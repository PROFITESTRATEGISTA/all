import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
  const handleClick = () => {
    // Simply redirect to the payment link
    window.open(priceId, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className={className}
      variant={variant}
      disabled={disabled}
    >
      <ExternalLink className="h-4 w-4 mr-2" />
      {children}
    </Button>
  );
}
