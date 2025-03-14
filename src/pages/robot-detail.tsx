import { useParams } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  BarChart,
  Clock,
  Zap,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function RobotDetail() {
  const { id } = useParams<{ id: string }>();

  // Dados simulados dos robôs
  const robots = {
    "profit-master": {
      name: "Profit Master",
      description:
        "Robô especializado em operações de day trade no mercado de ações.",
      longDescription:
        "O Profit Master é um robô avançado de trading projetado para operar no mercado de ações brasileiro. Utilizando algoritmos de inteligência artificial, ele identifica padrões de preço e volume para realizar operações de day trade com alta precisão. O robô opera principalmente em ações de alta liquidez, buscando oportunidades de entrada e saída ao longo do dia.",
      metrics: [
        { label: "Rentabilidade", value: "+18.5%", period: "mensal" },
        { label: "Operações", value: "~120", period: "por mês" },
        { label: "Win Rate", value: "68%", period: "média" },
        { label: "Drawdown Máx.", value: "7.2%", period: "histórico" },
      ],
      features: [
        "Operações automatizadas em ações",
        "Análise técnica avançada",
        "Gestão de risco integrada",
        "Painel de controle em tempo real",
        "Relatórios detalhados de performance",
        "Configurações personalizáveis",
      ],
      requirements: [
        "Conta em corretora compatível",
        "Capital mínimo recomendado: R$ 10.000",
        "Computador conectado à internet durante o horário de operação",
      ],
      icon: TrendingUp,
      color: "bg-blue-500",
      colorText: "text-blue-500",
    },
    "forex-expert": {
      name: "Forex Expert",
      description:
        "Estratégia automatizada para o mercado de Forex com entradas precisas.",
      longDescription:
        "O Forex Expert é um robô especializado no mercado de câmbio (Forex), focado em pares de moedas de alta liquidez como EUR/USD, GBP/USD e USD/JPY. Utilizando uma combinação de indicadores técnicos e análise de momentum, o robô identifica tendências e pontos de reversão para entrar em operações com alto potencial de lucro. Com gestão de risco avançada, o Forex Expert protege seu capital enquanto busca resultados consistentes.",
      metrics: [
        { label: "Rentabilidade", value: "+22.3%", period: "mensal" },
        { label: "Operações", value: "~80", period: "por mês" },
        { label: "Win Rate", value: "72%", period: "média" },
        { label: "Drawdown Máx.", value: "9.5%", period: "histórico" },
      ],
      features: [
        "Operações 24/5 no mercado Forex",
        "Análise multi-timeframe",
        "Filtros de volatilidade",
        "Proteção contra slippage",
        "Painel de controle em tempo real",
        "Alertas via email e SMS",
      ],
      requirements: [
        "Conta em corretora Forex compatível",
        "Capital mínimo recomendado: $5.000",
        "VPS para operação 24 horas (recomendado)",
      ],
      icon: BarChart,
      color: "bg-green-500",
      colorText: "text-green-500",
    },
    "crypto-trader": {
      name: "Crypto Trader",
      description:
        "Robô para operações em criptomoedas com análise de tendências.",
      longDescription:
        "O Crypto Trader é um robô avançado desenvolvido especificamente para o mercado de criptomoedas. Operando nas principais exchanges como Binance, Coinbase e FTX, o robô utiliza algoritmos de machine learning para identificar tendências e oportunidades de arbitragem entre diferentes criptoativos. Com operação 24/7, o Crypto Trader está sempre atento às oportunidades em um mercado que nunca dorme.",
      metrics: [
        { label: "Rentabilidade", value: "+25.7%", period: "mensal" },
        { label: "Operações", value: "~150", period: "por mês" },
        { label: "Win Rate", value: "65%", period: "média" },
        { label: "Drawdown Máx.", value: "12.8%", period: "histórico" },
      ],
      features: [
        "Operações 24/7 em criptomoedas",
        "Suporte a múltiplas exchanges",
        "Estratégias de arbitragem",
        "Análise on-chain",
        "Gestão dinâmica de posições",
        "Painel de controle em tempo real",
      ],
      requirements: [
        "Conta em exchange compatível",
        "Capital mínimo recomendado: $3.000",
        "API keys configuradas",
        "VPS para operação 24 horas (recomendado)",
      ],
      icon: Zap,
      color: "bg-purple-500",
      colorText: "text-purple-500",
    },
    "swing-trader": {
      name: "Swing Trader",
      description:
        "Estratégia para operações de swing trade com hold de médio prazo.",
      longDescription:
        "O Swing Trader é um robô especializado em operações de médio prazo (swing trade) nos mercados de ações, ETFs e futuros. Utilizando análise fundamentalista combinada com indicadores técnicos, o robô identifica ativos com potencial de valorização em períodos que variam de dias a semanas. Com menor frequência de operações, o Swing Trader é ideal para investidores que preferem uma abordagem menos intensiva e com menor estresse operacional.",
      metrics: [
        { label: "Rentabilidade", value: "+12.9%", period: "mensal" },
        { label: "Operações", value: "~40", period: "por mês" },
        { label: "Win Rate", value: "76%", period: "média" },
        { label: "Drawdown Máx.", value: "5.4%", period: "histórico" },
      ],
      features: [
        "Operações de swing trade",
        "Análise fundamentalista",
        "Filtros de tendência",
        "Gestão de posição adaptativa",
        "Relatórios semanais detalhados",
        "Alertas de entrada e saída",
      ],
      requirements: [
        "Conta em corretora compatível",
        "Capital mínimo recomendado: R$ 20.000",
        "Computador ou smartphone para acompanhamento",
      ],
      icon: Clock,
      color: "bg-amber-500",
      colorText: "text-amber-500",
    },
  };

  // Encontrar o robô pelo ID da URL
  const robot = robots[id as keyof typeof robots] || robots["profit-master"];
  const Icon = robot.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div
        className={`bg-gradient-to-br from-gray-900 to-${robot.color.split("-")[1]}-900 text-white py-12`}
      >
        <Container>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div
              className={`w-24 h-24 ${robot.color} rounded-xl flex items-center justify-center`}
            >
              <Icon className="h-12 w-12 text-white" />
            </div>
            <div className="md:flex-1">
              <h1 className="text-4xl font-bold tracking-tight mb-4 text-center md:text-left">
                {robot.name}
              </h1>
              <p className="text-xl text-gray-100 max-w-3xl mb-6 text-center md:text-left">
                {robot.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                {robot.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <p className="text-sm text-gray-200">{metric.label}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <p className="text-xs text-gray-300">{metric.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <section className="py-16">
        <Container>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="features">Funcionalidades</TabsTrigger>
              <TabsTrigger value="results">Resultados</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    Sobre o {robot.name}
                  </h2>
                  <p className="text-gray-600 mb-6">{robot.longDescription}</p>

                  <h3 className="text-xl font-bold mb-3">Requisitos</h3>
                  <ul className="space-y-2 mb-6">
                    {robot.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-amber-800">
                          Aviso de Risco
                        </h4>
                        <p className="text-amber-700 text-sm">
                          Investimentos em mercados financeiros envolvem riscos.
                          Resultados passados não garantem resultados futuros.
                          Certifique-se de entender os riscos antes de investir.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Pronto para começar?
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Assine um de nossos planos e tenha acesso imediato ao{" "}
                  {robot.name} e todos os benefícios da nossa plataforma.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/signup">Começar Agora</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/plans">Ver Planos</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    Funcionalidades do {robot.name}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {robot.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-full ${robot.color} bg-opacity-10 flex items-center justify-center flex-shrink-0`}
                        >
                          <CheckCircle
                            className={`h-5 w-5 ${robot.colorText}`}
                          />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">{feature}</h3>
                          <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    Resultados Históricos
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Mês</th>
                          <th className="text-left py-3 px-4">Operações</th>
                          <th className="text-left py-3 px-4">Win Rate</th>
                          <th className="text-left py-3 px-4">Resultado</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            month: "Janeiro/2023",
                            trades: 118,
                            winRate: "67%",
                            result: "+17.8%",
                          },
                          {
                            month: "Fevereiro/2023",
                            trades: 124,
                            winRate: "70%",
                            result: "+19.2%",
                          },
                          {
                            month: "Março/2023",
                            trades: 132,
                            winRate: "65%",
                            result: "+16.5%",
                          },
                          {
                            month: "Abril/2023",
                            trades: 115,
                            winRate: "72%",
                            result: "+20.3%",
                          },
                          {
                            month: "Maio/2023",
                            trades: 128,
                            winRate: "68%",
                            result: "+18.7%",
                          },
                          {
                            month: "Junho/2023",
                            trades: 122,
                            winRate: "66%",
                            result: "+17.2%",
                          },
                        ].map((month, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">{month.month}</td>
                            <td className="py-3 px-4">{month.trades}</td>
                            <td className="py-3 px-4">{month.winRate}</td>
                            <td className="py-3 px-4 font-medium text-green-600">
                              {month.result}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">
                      Nota: Os resultados apresentados são baseados em backtest
                      e operações reais. Resultados passados não garantem
                      resultados futuros.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
