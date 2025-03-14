import { Container } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function StrategyPacksSection() {
  const packs = [
    {
      name: "Pack Starter",
      originalPrice: "R$ 430",
      price: "R$ 350",
      description:
        "Pack com 14 estratégias para WIN e BIT, incluindo Trend 3, Take 40, V Rev, Location 1, Take GO e mais.",
      features: [
        "14 Robôs Starter",
        "Estratégias para WIN e BIT",
        "Tendência, Reversão e Scalp",
        "Operações automatizadas",
        "Suporte básico",
      ],
      backtest: true,
      popular: false,
      cta: "Escolher Pack Starter",
      color: "bg-green-500",
    },
    {
      name: "Pack Trader",
      originalPrice: "R$ 430",
      price: "R$ 350",
      description:
        "Pack com 6 estratégias avançadas para múltiplos ativos, incluindo Pivot Hunter, Trap Hunter e mais.",
      features: [
        "6 Robôs Trader",
        "Operações em múltiplos ativos",
        "Estratégias mistas",
        "Automático/Híbrido",
        "Suporte prioritário",
      ],
      backtest: true,
      popular: false,
      cta: "Escolher Pack Trader",
      color: "bg-blue-500",
    },
    {
      name: "Pack Global",
      originalPrice: "R$ 430",
      price: "R$ 350",
      description:
        "Pack com 3 estratégias para mercado global, incluindo Robô GR Global, Criptomoedas e Ações e Futuros",
      features: [
        "3 Robôs para mercados globais",
        "Operações em criptomoedas",
        "Operações em ações e futuros",
        "Gestão de risco integrada",
        "Suporte avançado",
      ],
      backtest: true,
      popular: false,
      cta: "Escolher Pack Global",
      color: "bg-purple-500",
    },
    {
      name: "Pack PRO Quant",
      originalPrice: "R$ 1.200",
      price: "R$ 700",
      description:
        "Pack Quant com todas as estratégias (23 robôs), Copy Invest incluído e backtest sem limites",
      features: [
        "Todos os 23 robôs incluídos",
        "Pack Starter + Pack Trader + Pack Global",
        "Acesso a todos os robôs",
        "Backtest sem limites",
        "Suporte VIP 24/7",
      ],
      backtest: true,
      popular: true,
      cta: "Escolher Pack PRO",
      color: "bg-amber-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Packs de Estratégias
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o pack ideal para suas necessidades e comece a operar com
            estratégias profissionais hoje mesmo. Todos os packs incluem suporte
            técnico e atualizações constantes.
          </p>
        </div>

        {/* Copy MULTI N1 BTG Pactual Card */}
        <div className="mb-16 max-w-4xl mx-auto">
          <Card className="border-primary shadow-lg relative overflow-hidden">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                LANÇAMENTO EXCLUSIVO
              </span>
            </div>
            <div className="h-2 bg-primary"></div>
            <CardHeader className="pt-8 pb-0">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle className="text-2xl">
                    Plataforma Copy Tridar
                  </CardTitle>
                  <p className="text-lg font-medium mt-1">
                    Contrate um Fundo de Investimentos para Operar na sua Conta
                  </p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-500 line-through text-sm">
                    R$ 900,00
                  </span>
                  <span className="text-3xl font-bold text-primary">
                    R$ 550,00
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="space-y-4">
                  <Badge
                    variant="outline"
                    className="text-sm font-medium border-amber-500 text-amber-700 bg-amber-50"
                  >
                    <Clock className="h-4 w-4 mr-1" /> EM BREVE - 40 Estratégias
                    em até 9 Ativos Diferentes
                  </Badge>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-800 font-medium">
                    Acesso LIMITADO! 50 Vagas Disponíveis
                  </div>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Operações automatizadas via BTG Pactual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Gestão profissional de capital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Diversificação em múltiplos ativos</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col justify-center">
                  <Button
                    size="lg"
                    className="mb-3"
                    onClick={() =>
                      window.open(
                        "https://profitestrategista.rds.land",
                        "_blank",
                      )
                    }
                  >
                    Entrar na Fila de Espera
                  </Button>
                  <p className="text-center text-sm text-gray-500">
                    50 Vagas disponíveis
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packs.map((pack, index) => (
            <Card
              key={index}
              className={`border ${pack.popular ? "border-primary shadow-lg relative" : "border-gray-200"} hover:shadow-xl transition-shadow duration-300`}
            >
              {pack.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}
              <div className={`h-2 ${pack.color}`}></div>
              <CardHeader className={`pb-0 ${pack.popular ? "pt-8" : "pt-6"}`}>
                <CardTitle className="text-xl">{pack.name}</CardTitle>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{pack.price}</span>
                  {pack.originalPrice && pack.price !== "GRÁTIS" && (
                    <span className="text-gray-500 line-through text-sm">
                      {pack.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mt-3">{pack.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Badge
                    variant={pack.backtest ? "default" : "outline"}
                    className="mb-2"
                  >
                    {pack.backtest ? "Backtest Incluso" : "Sem Backtest"}
                  </Badge>
                </div>
                <ul className="space-y-3">
                  {pack.features.map((feature, idx) => (
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
                  className={`w-full ${pack.popular ? "" : pack.price === "GRÁTIS" ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-800 hover:bg-gray-700"}`}
                >
                  <Link to="/signup">{pack.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/robots">Ver Todos os Robôs Disponíveis</Link>
          </Button>
        </div>

        <div className="mt-12 text-center bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-4">
            Precisa de um pack personalizado para suas necessidades específicas?
          </p>
          <Button asChild variant="outline">
            <Link to="/contact">Fale com Nossa Equipe</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
