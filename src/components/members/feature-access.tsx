import { useEffect, useState } from "react";
import { useMembership } from "@/hooks/use-membership";

interface FeatureAccessProps {
  featureName: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function FeatureAccess({
  featureName,
  children,
  fallback = null,
}: FeatureAccessProps) {
  const { checkAccess } = useMembership();
  const [canAccess, setCanAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAccess = async () => {
      try {
        setLoading(true);
        const hasAccess = await checkAccess(featureName);
        setCanAccess(hasAccess);
      } catch (error) {
        console.error("Error checking feature access:", error);
        setCanAccess(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAccess();
  }, [featureName, checkAccess]);

  // For development purposes, always show content
  if (import.meta.env.DEV) {
    return <>{children}</>;
  }

  if (loading) {
    return null; // Or a loading indicator
  }

  return canAccess ? <>{children}</> : <>{fallback}</>;
}
