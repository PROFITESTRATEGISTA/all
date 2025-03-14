import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/auth-context";
import { supabase } from "@/lib/supabase";
import { checkFeatureAccess } from "@/lib/payment-handler";

interface Membership {
  id: string;
  user_id: string;
  pack: string | null;
  optionals: string[];
  active: boolean;
  created_at: string;
  updated_at: string;
  stripe_customer_id?: string;
  last_payment_date?: string;
  payment_status?: string;
}

export function useMembership() {
  const { user } = useAuth();
  const [membership, setMembership] = useState<Membership | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembership = async () => {
      if (!user) {
        setMembership(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        // For development environment, use mock data based on localStorage
        if (import.meta.env.DEV) {
          const testUserPack =
            localStorage.getItem("testUserPack") || "Pack PRO Quant";
          const mockMembership = {
            id: "mock-membership-id",
            user_id: user.id,
            pack: testUserPack,
            optionals: [], // No optionals contracted by default
            active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            stripe_customer_id: "mock-customer-id",
            last_payment_date: new Date().toISOString(),
            payment_status: "active",
          };
          setMembership(mockMembership);
          setLoading(false);
          return;
        }

        // Real implementation for production
        const { data, error } = await supabase
          .from("memberships")
          .select("*")
          .eq("user_id", user.id)
          .single();

        if (error && error.code !== "PGRST116") {
          throw error;
        }

        setMembership(data);
      } catch (err) {
        console.error("Error fetching membership:", err);
        setError("Failed to load membership data");
      } finally {
        setLoading(false);
      }
    };

    fetchMembership();
  }, [user]);

  const checkAccess = async (feature: string): Promise<boolean> => {
    if (!user) return false;
    return await checkFeatureAccess(user.id, feature);
  };

  return { membership, loading, error, checkAccess };
}
