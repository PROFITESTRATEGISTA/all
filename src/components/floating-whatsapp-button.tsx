import { Button } from "@/components/ui/button";

export default function FloatingWhatsAppButton() {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Button
        onClick={openWhatsApp}
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg relative overflow-hidden"
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
