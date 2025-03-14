import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const scrollToNextSection = () => {
    const featuresSection = document.querySelector("#features-section");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Trading automatizado para resultados consistentes
          </h1>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl">
            Estratégias profissionais e packs especializados para maximizar seus
            investimentos
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base">
              <Link to="/strategy-packs" className="flex items-center gap-2">
                Ver Packs de Estratégias <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden aspect-video shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              className="h-16 w-16 rounded-full bg-primary/90 border-none hover:bg-primary hover:scale-105 transition-all"
            >
              <Play className="h-8 w-8 text-white" fill="white" />
            </Button>
          </div>
          {/* Placeholder for video - replace with actual video component */}
          <div className="w-full h-full bg-gradient-to-br from-black/40 to-black/20"></div>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce rounded-full bg-white/10 hover:bg-white/20 border-none"
            onClick={scrollToNextSection}
          >
            <ChevronDown className="h-6 w-6 text-white" />
          </Button>
        </div>
      </Container>
    </div>
  );
}
