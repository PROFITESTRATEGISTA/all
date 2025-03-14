import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default function AssistantButton() {
  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Button
        onClick={() =>
          window.open(
            "https://chatgpt.com/g/g-678c078c21208191a0b18fb1a70e22f1-profit-estrategista-trading-solutions",
            "_blank",
          )
        }
        size="icon"
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg relative overflow-hidden"
      >
        <BookOpen className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
}
