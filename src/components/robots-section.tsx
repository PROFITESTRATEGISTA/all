import { Container } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart, Clock, Zap } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function RobotsSection() {
  const robots = [
    {
      name: "Copy Invest Multi",
      description:
        "Contrate um Fundo de Investimentos para Operar na sua Conta com algoritmos de alta frequência e precisão.",
      metrics: [
        { label: "Rentabilidade", value: "+22.5%", period: "mensal" },
        { label: "Operações", value: "~140", period: "por mês" },
        { label: "Mercados", value: "Multi-Ativo", period: "" },
      ],
      icon: TrendingUp,
      color: "bg-amber-500",
    },
    {
      name: "Pivot Hunter",
      description:
        "Estratégia automatizada para identificação de pontos de pivô com análise avançada de múltiplos timeframes.",
      metrics: [
        { label: "Rentabilidade", value: "+19.8%", period: "mensal" },
        { label: "Operações", value: "~85", period: "por mês" },
        { label: "Mercados", value: "Multi-Ativo", period: "" },
      ],
      icon: BarChart,
      color: "bg-blue-900",
    },
    {
      name: "Fibo Hunter",
      description:
        "Robô para operações baseadas em níveis de Fibonacci com análise de tendências e algoritmos de machine learning.",
      metrics: [
        { label: "Rentabilidade", value: "+18.3%", period: "mensal" },
        { label: "Operações", value: "~110", period: "por mês" },
        { label: "Mercados", value: "Multi-Ativo", period: "" },
      ],
      icon: Zap,
      color: "bg-blue-900",
    },
    {
      name: "Take GO",
      description:
        "Estratégia para operações de scalp com entradas precisas e gestão de risco automatizada.",
      metrics: [
        { label: "Rentabilidade", value: "+16.7%", period: "mensal" },
        { label: "Operações", value: "~120", period: "por mês" },
        { label: "Mercados", value: "WIN", period: "" },
      ],
      icon: Clock,
      color: "bg-black",
    },
  ];

  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Nossos Robôs de Trading de Alta Performance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça nossas soluções automatizadas de última geração para
            diferentes mercados e estratégias de investimento, desenvolvidas por
            traders profissionais com anos de experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {robots.map((robot, index) => {
            const Icon = robot.icon;
            return (
              <Card
                key={index}
                className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`h-2 ${robot.color}`}></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{robot.name}</CardTitle>
                    <div
                      className={`w-10 h-10 rounded-full ${robot.color} bg-opacity-10 flex items-center justify-center`}
                    >
                      <Icon
                        className={`h-5 w-5 text-${robot.color.split("-")[1]}`}
                      />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    {robot.description}
                  </p>
                </CardHeader>
                <CardContent className="pb-0">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {robot.metrics.map((metric, idx) => (
                      <div key={idx} className="space-y-1">
                        <p className="text-xs text-gray-500">{metric.label}</p>
                        <p className="font-bold text-sm">{metric.value}</p>
                        <p className="text-xs text-gray-500">{metric.period}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-6 pb-4">
                  <Button asChild className="w-full">
                    <Link
                      to={`/robots/${robot.name.toLowerCase().replace(" ", "-")}`}
                    >
                      Ver Detalhes
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/robots">Ver Todos os Robôs</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
