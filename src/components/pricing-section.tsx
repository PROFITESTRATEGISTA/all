import { Container } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function PricingSection() {
  const plans = [
    {
      name: "Básico",
      price: "R$ 127",
      period: "/mês",
      description:
        "Ideal para iniciantes que querem começar a automatizar suas operações com segurança.",
      features: [
        "Acesso a 1 robô de trading à sua escolha",
        "Comunidade básica de traders",
        "Suporte por email em horário comercial",
        "Atualizações mensais dos algoritmos",
        "Material educativo básico",
        "1 webinar mensal",
      ],
      cta: "Começar Agora",
      popular: false,
    },
    {
      name: "Premium",
      price: "R$ 247",
      period: "/mês",
      description:
        "Nossa opção mais popular para traders que buscam resultados consistentes e diversificação.",
      features: [
        "Acesso a 3 robôs de trading à sua escolha",
        "Comunidade exclusiva com traders profissionais",
        "Suporte prioritário por email e chat",
        "Atualizações semanais dos algoritmos",
        "Webinars mensais com especialistas",
        "Análises de mercado semanais",
        "Configurações personalizadas básicas",
        "Acesso à biblioteca de conteúdo exclusivo",
      ],
      cta: "Escolher Premium",
      popular: true,
    },
    {
      name: "Pro",
      price: "R$ 497",
      period: "/mês",
      description:
        "Para traders profissionais que buscam o máximo de performance e resultados extraordinários.",
      features: [
        "Acesso ilimitado a todos os robôs",
        "Comunidade VIP com acesso direto aos desenvolvedores",
        "Suporte 24/7 por email, chat e telefone",
        "Atualizações em tempo real dos algoritmos",
        "Webinars semanais exclusivos",
        "Análises avançadas diárias",
        "Configurações totalmente personalizadas",
        "Consultoria individual mensal",
        "Acesso antecipado a novos robôs e recursos",
      ],
      cta: "Escolher Pro",
      popular: false,
    },
  ];

  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Planos e Preços Exclusivos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para suas necessidades e comece a automatizar
            suas operações hoje mesmo. Oferecemos garantia de satisfação de 15
            dias em todos os planos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border ${plan.popular ? "border-primary shadow-lg relative" : "border-gray-200"} hover:shadow-xl transition-shadow duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}
              <CardHeader className={`pb-0 ${plan.popular ? "pt-8" : "pt-6"}`}>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm mt-3">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className={`w-full ${plan.popular ? "" : "bg-gray-800 hover:bg-gray-700"}`}
                >
                  <Link to="/signup">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-600 mb-4">
            Precisa de um plano personalizado para sua empresa?
          </p>
          <Button asChild variant="outline">
            <Link to="/contact">Fale com Nossa Equipe</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
