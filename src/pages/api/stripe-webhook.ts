import { stripeWebhookHandler } from "@/api/stripe-webhook";

/**
 * This file would be used in a Next.js or similar framework that supports API routes
 * For Vite, you would need to set up a server-side component or use a serverless function
 */
export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    return await stripeWebhookHandler(req, res);
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
