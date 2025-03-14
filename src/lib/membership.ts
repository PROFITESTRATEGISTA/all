// This file is deprecated - functionality moved to payment-handler.ts
// Keeping this file for backward compatibility

import { checkFeatureAccess } from "./payment-handler";

// Re-export the feature access check function
export const hasAccess = checkFeatureAccess;

// Types for membership management (for backward compatibility)
export interface UserMembership {
  id: string;
  user_id: string;
  pack: string | null;
  optionals: string[];
  active: boolean;
  created_at: string;
  updated_at: string;
}

// Function to get user membership details (for backward compatibility)
export const getUserMembership = async (
  userId: string,
): Promise<UserMembership | null> => {
  console.warn(
    "getUserMembership is deprecated. Use useMembership hook instead.",
  );
  return null;
};

// Function to update user membership based on payment (for backward compatibility)
export const updateMembership = async (
  userId: string,
  paymentLinkId: string,
): Promise<{ success: boolean; message: string }> => {
  console.warn(
    "updateMembership is deprecated. Use handlePayment from payment-handler.ts instead.",
  );
  return { success: false, message: "Function deprecated" };
};
