import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Community() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="relative min-h-screen w-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80')",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex flex-col items-end justify-center h-screen pr-16">
          <div className="max-w-xl text-right">
            <h1 className="text-5xl font-bold text-white mb-6">
              Comunidade de Traders
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Faça parte de uma comunidade exclusiva de traders e potencialize
              seus resultados
            </p>
            <Button asChild size="lg" className="text-xl px-8 py-7 rounded-xl">
              <Link to="/signup" className="flex items-center">
                <span>Começar agora</span>
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
