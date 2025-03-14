import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  redirectToCheckout,
  handleOneTimePayment,
  createCheckoutSession,
} from "@/lib/stripe";
import { Loader2, ExternalLink } from "lucide-react";

interface PaymentButtonProps {
  priceId: string;
  isSubscription?: boolean;
  children: React.ReactNode;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  disabled?: boolean;
}

export default function PaymentButton({
  priceId,
  isSubscription = true,
  children,
  className,
  variant = "default",
  disabled = false,
}: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      // Use the API endpoint for creating checkout sessions
      await createCheckoutSession(priceId, isSubscription);
    } catch (error) {
      console.error("Payment error:", error);
      alert(
        "Ocorreu um erro ao processar o pagamento. Por favor, tente novamente.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={className}
      variant={variant}
      disabled={disabled || loading}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
      ) : (
        <ExternalLink className="h-4 w-4 mr-2" />
      )}
      {children}
    </Button>
  );
}
