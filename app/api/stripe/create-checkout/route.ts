import { NextResponse, NextRequest } from "next/server";
import { createCheckout } from "@/lib/stripe";

// This function is used to create a Stripe Checkout Session (one-time payment or subscription)
// It's called by the <ButtonCheckout /> component
// Users must be authenticated. It will prefill the Checkout data with their email and/or credit card (if any)
export const runtime = "edge";
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { mode, successUrl, cancelUrl, email, imageId, style, fileName, imageUrl } = body;
        const priceId = process.env.STRIPE_PRICE_ID;
        if (!priceId) {
            return NextResponse.json(
                { error: "Price ID is required" },
                { status: 400 }
            );
        } else if (!successUrl || !cancelUrl) {
            return NextResponse.json(
                { error: "Success and cancel URLs are required" },
                { status: 400 }
            );
        } else if (!body.mode) {
            return NextResponse.json(
                {
                    error: "Mode is required (either 'payment' for one-time payments or 'subscription' for recurring subscription)",
                },
                { status: 400 }
            );
        } else if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        } else if (!imageId) {
            return NextResponse.json(
                { error: "Image ID is required" },
                { status: 400 }
            );
        } else if (!style) {
            return NextResponse.json(
                { error: "Style is required" },
                { status: 400 }
            );
        }

        const stripeSessionURL = await createCheckout({
            priceId,
            mode,
            successUrl,
            cancelUrl,
            metadata: {
                email,
                imageId,
                style,
                fileName,
                imageUrl
            },
            user: {
                email
            }
        });
        return NextResponse.json({ url: stripeSessionURL });
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: e?.message }, { status: 500 });
    }
}
