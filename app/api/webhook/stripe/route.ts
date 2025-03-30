import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { findCheckoutSession } from "@/lib/stripe";
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

// Initialize Stripe only if the API key is available
const getStripeClient = () => {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    console.warn("Stripe API key not found");
    return null;
  }
  
  return new Stripe(apiKey, {
    apiVersion: "2025-02-24.acacia",
    typescript: true,
  });
};

// Create stripe client lazily only when needed
let stripeClient: Stripe | null = null;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
    const body = await req.text();
    const signature = headers().get("stripe-signature");
    
    // Initialize Stripe client if not already done
    if (!stripeClient) {
        stripeClient = getStripeClient();
    }
    
    // If Stripe client couldn't be initialized, return an error
    if (!stripeClient) {
        console.error("Stripe client not initialized - missing API key");
        return NextResponse.json(
            { error: "Stripe client not initialized" },
            { status: 500 }
        );
    }

    let eventType;
    let event;

    // verify Stripe event is legit
    try {
        event = await stripeClient.webhooks.constructEventAsync(
            body,
            signature || "",
            webhookSecret || ""
        );
    } catch (err: any) {
        console.error(`Webhook signature verification failed. ${err.message}`);
        return NextResponse.json({ error: err.message }, { status: 400 });
    }

    eventType = event.type;

    try {
        switch (eventType) {
            case "checkout.session.completed": {
                try {
                    const stripeObject: Stripe.Checkout.Session = event.data
                        .object as Stripe.Checkout.Session;

                    const session = await findCheckoutSession(stripeObject.id);
                    const email = session?.metadata?.email;
                    const imageId = session?.metadata?.imageId;
                    const style = session?.metadata?.style;

                    if (!email || !imageId || !style) {
                        console.error('Missing required metadata:', { email, imageId, style });
                        break;
                    }

                    // Store the order in D1
                    const response = await fetch(`${process.env.WORKER_URL}/api/orders`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${process.env.API_SECRET}`,
                        },
                        body: JSON.stringify({
                            email,
                            imageId,
                            style,
                            stripeSessionId: stripeObject.id,
                            status: 'pending'
                        }),
                    });

                    if (!response.ok) {
                        const errorText = await response.text();
                        console.error('Order creation failed:', {
                            status: response.status,
                            statusText: response.statusText,
                            body: errorText
                        });
                        throw new Error(`Failed to create order: ${response.status} ${response.statusText}`);
                    }

                } catch (error) {
                    console.error('Error in checkout.session.completed:', error);
                }
                break;
            }

            case "checkout.session.expired": {
                // User didn't complete the transaction
                // You can implement cleanup here if needed
                break;
            }

            default:
                // Unhandled event type
                break;
        }
    } catch (e: any) {
        console.error("stripe error: ", e.message);
    }

    return NextResponse.json({});
}
