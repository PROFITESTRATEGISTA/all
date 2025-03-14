import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import StrategyPacksSection from "@/components/strategy-packs-section";
import ProprietaryDeskSection from "@/components/proprietary-desk-section";
import FloatingActionButtons from "@/components/floating-action-buttons";

export default function StrategyPacks() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Packs de Estratégias
            </h1>
            <p className="text-xl text-blue-100">
              Escolha o pack ideal para suas necessidades e comece a operar com
              estratégias profissionais
            </p>
          </div>
        </Container>
      </div>
      <StrategyPacksSection />
      <ProprietaryDeskSection />
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
