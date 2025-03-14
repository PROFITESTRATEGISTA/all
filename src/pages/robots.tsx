import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import RobotsSection from "@/components/robots-section";
import RobotDetailsSection from "@/components/robot-details-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FloatingActionButtons from "@/components/floating-action-buttons";

export default function Robots() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Nossos Robôs de Trading
            </h1>
            <p className="text-xl text-blue-100">
              Conheça nossa linha completa de robôs automatizados para
              diferentes mercados e estratégias
            </p>
          </div>
        </Container>
      </div>
      <RobotsSection />
      <RobotDetailsSection />
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Como nossos robôs funcionam
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nossos algoritmos avançados analisam o mercado 24 horas por dia,
              identificando as melhores oportunidades de entrada e saída para
              maximizar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/strategy-packs">Ver Packs de Estratégias</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/schedule-demo">Agendar Demonstração</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
