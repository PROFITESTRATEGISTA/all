import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import PricingSection from "@/components/pricing-section";

export default function Plans() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Planos e Preços
            </h1>
            <p className="text-xl text-blue-100">
              Escolha o plano ideal para suas necessidades e comece a
              automatizar suas operações
            </p>
          </div>
        </Container>
      </div>
      <PricingSection />
      <Footer />
    </div>
  );
}
