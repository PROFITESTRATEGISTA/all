// Stripe API integration for handling payments and subscriptions

// This is a client-side wrapper for Stripe functionality
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with your publishable key from environment variables
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
    "pk_live_51QW0ZTFkiCq7QZPSvp9tIZwbr5mS6MNJWFoQL1h7IyGBvpJcQRIBr0TqoDKGuMOlEqD69hyok5I0855PSKcbSp9500rmBKJrKF",
);

// Map of payment links to product types
export const PAYMENT_LINKS = {
  // Packs
  "https://buy.stripe.com/6oE3cY5pF5Fq5pKcN3": "PRO",
  "https://buy.stripe.com/5kA6rG4pF3Fq5pK9AC": "Starter",
  "https://buy.stripe.com/cN24jT8rq4QR7Qs6oF": "Global",
  "https://buy.stripe.com/8wM5nQ4pF6Yp3G8dQW": "Free",

  // Optional products
  "https://buy.stripe.com/00g4jI4pF7Yp3G8wA": "Robô GR PRO",
  "https://profitestrategista.rds.land": "Plataforma Tridar Copy Trading",
  "https://wa.me/5511999999999": "Máquina VPS Trader",
};

// Webhook endpoint URL - this is where Stripe will send events
export const WEBHOOK_URL = {
  development: "http://localhost:8888/.netlify/functions/stripe-webhook",
  production: "https://profitestrategista.com.br/api/stripe-webhook",
  vercel: "https://profitestrategista.vercel.app/api/stripe-webhook",
  netlify:
    "https://profitestrategista.netlify.app/.netlify/functions/stripe-webhook",
  teste:
    "https://teste.profitestrategista.com.br/.netlify/functions/stripe-webhook",
};

// Function to redirect to Stripe Checkout
export const redirectToCheckout = async (priceId: string) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error("Stripe failed to initialize");

    // Create checkout session
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      successUrl: `${window.location.origin}/payment-success`,
      cancelUrl: `${window.location.origin}/payment-cancelled`,
    });

    if (error) throw error;
  } catch (error) {
    console.error("Error redirecting to checkout:", error);
    throw error;
  }
};

// Function to handle one-time payments for optional products
export const handleOneTimePayment = async (priceId: string) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error("Stripe failed to initialize");

    // Create checkout session for one-time payment
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: "payment",
      successUrl: `${window.location.origin}/payment-success`,
      cancelUrl: `${window.location.origin}/payment-cancelled`,
    });

    if (error) throw error;
  } catch (error) {
    console.error("Error processing one-time payment:", error);
    throw error;
  }
};

// Function to check subscription status
export const checkSubscriptionStatus = async (customerId: string) => {
  // This would typically be a server-side function that calls Stripe's API
  // For client-side, we'll make a request to our backend
  try {
    const response = await fetch(
      `/api/subscription-status?customerId=${customerId}`,
    );
    if (!response.ok) throw new Error("Failed to fetch subscription status");
    return await response.json();
  } catch (error) {
    console.error("Error checking subscription status:", error);
    throw error;
  }
};

// Function to create a Stripe checkout session via API
export const createCheckoutSession = async (
  priceId: string,
  isSubscription: boolean = true,
) => {
  try {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId,
        mode: isSubscription ? "subscription" : "payment",
      }),
    });

    if (!response.ok) throw new Error("Failed to create checkout session");

    const { sessionId } = await response.json();

    // Redirect to checkout using the session ID
    const stripe = await stripePromise;
    if (!stripe) throw new Error("Stripe failed to initialize");

    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) throw error;
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw error;
  }
};
