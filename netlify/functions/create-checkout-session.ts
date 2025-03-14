import { Handler } from "@netlify/functions";
import { createCheckoutSession } from "../../src/api/create-checkout-session";

/**
 * Netlify serverless function to create a Stripe checkout session
 */
export const handler: Handler = async (event, context) => {
  // Convert Netlify event to Express-like request object
  const req = {
    method: event.httpMethod,
    body: JSON.parse(event.body || "{}"),
    headers: event.headers,
  };

  // Create Express-like response object
  let statusCode = 200;
  let responseBody = {};

  const res = {
    status: (code: number) => {
      statusCode = code;
      return res;
    },
    json: (body: any) => {
      responseBody = body;
      return res;
    },
    send: (body: string) => {
      responseBody = { message: body };
      return res;
    },
    setHeader: () => res, // No-op for this implementation
    end: () => res, // No-op for this implementation
  };

  // Process the request
  await createCheckoutSession(req, res);

  // Return the response
  return {
    statusCode,
    body: JSON.stringify(responseBody),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
