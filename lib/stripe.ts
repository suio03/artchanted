import Stripe from "stripe";

interface CreateCheckoutParams {
    priceId: string;
    mode: "payment";
    successUrl: string;
    cancelUrl: string;
    metadata?: {
        email: string;
        imageId: string;
        style: string;
        fileName: string;
        imageUrl: string;
    };
    user?: {
        email?: string;
    };
}

interface CreateCustomerPortalParams {
    customerId: string;
    returnUrl: string;
}

// This is used to create a Stripe Checkout for one-time payments. It's usually triggered with the <ButtonCheckout /> component. Webhooks are used to update the user's state in the database.
export const createCheckout = async ({
    user,
    mode,
    successUrl,
    cancelUrl,
    priceId,
    metadata
}: CreateCheckoutParams): Promise<string> => {
    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
            apiVersion: "2025-02-24.acacia",
            typescript: true,
        });

        const stripeSession = await stripe.checkout.sessions.create({
            mode,
            allow_promotion_codes: true,
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            success_url: successUrl,
            cancel_url: cancelUrl,
            expires_at: Math.floor(Date.now() / 1000) + 60 * 30, // 30 minutes to expire
            customer_email: user?.email,
            metadata,
            payment_intent_data: {
                setup_future_usage: "on_session",
            },
            tax_id_collection: { enabled: true }
        });

        return stripeSession.url || "";
    } catch (e) {
        console.error(e);
        return "";
    }
};

// This is used to create Customer Portal sessions, so users can manage their subscriptions (payment methods, cancel, etc..)
export const createCustomerPortal = async ({
    customerId,
    returnUrl,
}: CreateCustomerPortalParams): Promise<string> => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
        apiVersion: "2025-02-24.acacia",
        typescript: true,
    });

    const portalSession = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: returnUrl,
    });

    return portalSession.url;
};

// This is used to get the uesr checkout session and populate the data so we get the planId the user subscribed to
export const findCheckoutSession = async (sessionId: string) => {
    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
            apiVersion: "2025-02-24.acacia",
            typescript: true,
        });

        const session = await stripe.checkout.sessions.retrieve(sessionId, {
            expand: ["line_items"],
        });

        return session;
    } catch (e) {
        console.error(e);
        return null;
    }
};
