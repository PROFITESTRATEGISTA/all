import { Container } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot, Users, TrendingUp, Shield } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Robôs de Trading Avançados",
      description:
        "Algoritmos de última geração que operam automaticamente no mercado seguindo estratégias testadas, otimizadas e constantemente atualizadas por nossa equipe de especialistas.",
      icon: Bot,
    },
    {
      title: "Comunidade Exclusiva de Elite",
      description:
        "Acesso a um grupo seleto de traders profissionais onde você pode compartilhar ideias, estratégias e aprender com os melhores do mercado em um ambiente colaborativo e de alto nível.",
      icon: Users,
    },
    {
      title: "Resultados Consistentes e Comprovados",
      description:
        "Nossas estratégias são desenvolvidas e rigorosamente testadas para buscar resultados consistentes a longo prazo, minimizando riscos e maximizando o retorno sobre investimento.",
      icon: TrendingUp,
    },
    {
      title: "Segurança e Confiabilidade Garantidas",
      description:
        "Seus dados e investimentos estão protegidos com as mais avançadas tecnologias de segurança do mercado, com protocolos de criptografia e sistemas redundantes de proteção.",
      icon: Shield,
    },
  ];

  return (
    <section id="features-section" className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Por que escolher a Profit Estrategista?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas e inovadoras para automatizar suas
            operações no mercado financeiro, maximizar seus resultados e
            minimizar riscos com tecnologia de ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
