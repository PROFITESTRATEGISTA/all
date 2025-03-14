import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Pronto para revolucionar suas operações e maximizar seus resultados
            como nunca antes?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Junte-se a mais de 5.000 traders satisfeitos que já estão utilizando
            nossos robôs e transformando completamente sua forma de investir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link to="/signup" className="flex items-center gap-2">
                Começar Agora <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base bg-white/10 border-white/20 hover:bg-white/20"
            >
              <Link to="/contact">Falar com um Especialista</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
