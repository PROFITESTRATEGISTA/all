import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import AssistantButton from "./assistant-button";
import FloatingWhatsAppButton from "./floating-whatsapp-button";

export default function FloatingActionButtons() {
  const openAssistant = () => {
    window.open(
      "https://chatgpt.com/g/g-678c078c21208191a0b18fb1a70e22f1-profit-estrategista-trading-solutions",
      "_blank",
    );
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <FloatingWhatsAppButton />

      <Button
        onClick={openAssistant}
        size="icon"
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg relative overflow-hidden"
      >
        <BookOpen className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
}
