import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function FloatingIcon() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
      >
        <img
          src="/whatsapp-icon-fixed.png"
          alt="WhatsApp"
          className="h-6 w-6 object-contain"
        />
      </Button>
    </div>
  );
}
