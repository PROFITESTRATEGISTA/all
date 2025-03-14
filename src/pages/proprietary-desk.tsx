import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import ProprietaryDeskSection from "@/components/proprietary-desk-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, TrendingUp, DollarSign, Users, Calendar } from "lucide-react";
import FloatingActionButtons from "@/components/floating-action-buttons";

export default function ProprietaryDesk() {
  const benefits = [
    {
      title: "Risco Controlado",
      description:
        "Opere com limites de perda pré-definidos, protegendo seu capital e garantindo longevidade na sua carreira de trader.",
      icon: Shield,
    },
    {
      title: "Maior Alavancagem",
      description:
        "Acesse um volume operacional muito maior do que seria possível apenas com seu capital próprio.",
      icon: TrendingUp,
    },
    {
      title: "Divisão de Lucros",
      description:
        "Modelo de negócio justo com divisão transparente dos lucros gerados nas operações.",
      icon: DollarSign,
    },
    {
      title: "Comunidade Exclusiva",
      description:
        "Faça parte de um grupo seleto de traders que operam com capital de terceiros e compartilham estratégias.",
      icon: Users,
    },
  ];

  const faqs = [
    {
      question: "Como funciona a mesa proprietária?",
      answer:
        "A mesa proprietária é um modelo onde você opera com capital de terceiros, com limites de perda pré-definidos. Você paga uma taxa de adesão e tem acesso a um capital muito maior para suas operações, dividindo os lucros com a empresa.",
    },
    {
      question: "O que acontece se eu atingir o loss máximo?",
      answer:
        "Se você atingir o loss máximo estabelecido, suas operações serão automaticamente encerradas para aquele período. Você poderá retornar às operações no próximo período após uma avaliação.",
    },
    {
      question: "Como é feita a divisão dos lucros?",
      answer:
        "A divisão dos lucros segue um modelo onde você fica com uma porcentagem significativa dos ganhos gerados. Os percentuais exatos variam de acordo com o plano escolhido e são detalhados no contrato.",
    },
    {
      question: "Posso usar meus próprios robôs na mesa proprietária?",
      answer:
        "Sim, você pode utilizar seus próprios robôs ou adquirir nosso módulo de automação com 15% de desconto para operar na mesa proprietária.",
    },
    {
      question: "Qual é a diferença entre os planos de mesa?",
      answer:
        "A principal diferença está no número de contratos que você pode operar simultaneamente e no valor do loss máximo permitido. Quanto maior o plano, maior o volume operacional disponível.",
    },
    {
      question: "O que é o Combo Pack Semestral + Mesa?",
      answer:
        "É uma oferta especial que combina o acesso a todos os nossos robôs e estratégias por seis meses junto com a adesão à mesa proprietária, oferecendo um desconto significativo em relação à aquisição separada.",
    },
  ];

  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Mesa Proprietária
            </h1>
            <p className="text-xl text-blue-100">
              Opere com capital de terceiros e potencialize seus resultados com
              risco controlado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 flex items-center gap-2"
              >
                <img
                  src="/whatsapp-icon-new.png"
                  alt="WhatsApp"
                  className="h-5 w-5"
                />
                Falar no WhatsApp
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/10 border-white/20 hover:bg-white/20 flex items-center gap-2"
              >
                <Link to="/schedule-demo">
                  <Calendar className="h-5 w-5" />
                  Agendar Demonstração
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <ProprietaryDeskSection />

      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Benefícios da Mesa Proprietária
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubra como operar com uma mesa proprietária pode transformar
              sua carreira como trader
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre como funciona nossa mesa proprietária
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Ainda tem dúvidas sobre nossa mesa proprietária?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 flex items-center gap-2"
              >
                <img
                  src="/whatsapp-icon-new.png"
                  alt="WhatsApp"
                  className="h-5 w-5"
                />
                Falar no WhatsApp
              </Button>
              <Button asChild size="lg">
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
