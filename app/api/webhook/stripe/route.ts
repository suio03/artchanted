import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { findCheckoutSession } from "@/lib/stripe";
import { Resend } from "resend";

export const runtime = "edge";
export const dynamic = "force-dynamic";

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
const resend = new Resend(process.env.RESEND_API_KEY);

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
                    const fileName = session?.metadata?.fileName;
                    const imageUrl = session?.metadata?.imageUrl;

                    if (!email || !imageId || !style || !fileName || !imageUrl) {
                        console.error("Missing required metadata:", {
                            email,
                            imageId,
                            style,
                            fileName,
                            imageUrl
                        });
                        break;
                    }

                    // Send email notification with image URL
                    const emailResponse = await resend.emails.send({
                        from: "ChantedArt<support@artchanted.net>",
                        to: process.env.ADMIN_EMAIL || "",
                        subject: "New ChantedArt Order",
                        html: `
                            <h2>New Order Received</h2>
                            <p><strong>Customer Email:</strong> ${email}</p>
                            <p><strong>Image ID:</strong> ${imageId}</p>
                            <p><strong>Style:</strong> ${style}</p>
                            <p><strong>Stripe Session ID:</strong> ${stripeObject.id}</p>
                            <p><strong>Amount:</strong> $3.00</p>
                            <p><strong>Date:</strong> ${new Date().toISOString()}</p>
                            <p><strong>Image:</strong> <a href="${imageUrl}">View Image</a></p>
                        `
                    });

                } catch (error) {
                    console.error("Error in checkout.session.completed:", error);
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
