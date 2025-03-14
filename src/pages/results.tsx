import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart, Clock, Zap } from "lucide-react";

export default function Results() {
  const results = [
    {
      robot: "Profit Master",
      period: "Último mês",
      trades: 124,
      winRate: "68%",
      return: "+18.7%",
      icon: TrendingUp,
      color: "bg-blue-500",
    },
    {
      robot: "Forex Expert",
      period: "Último mês",
      trades: 87,
      winRate: "72%",
      return: "+22.3%",
      icon: BarChart,
      color: "bg-green-500",
    },
    {
      robot: "Crypto Trader",
      period: "Último mês",
      trades: 156,
      winRate: "65%",
      return: "+25.9%",
      icon: Zap,
      color: "bg-purple-500",
    },
    {
      robot: "Swing Trader",
      period: "Último mês",
      trades: 42,
      winRate: "76%",
      return: "+12.8%",
      icon: Clock,
      color: "bg-amber-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Resultados Comprovados
            </h1>
            <p className="text-xl text-blue-100">
              Confira o desempenho histórico dos nossos robôs de trading
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {results.map((result, index) => {
              const Icon = result.icon;
              return (
                <Card
                  key={index}
                  className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`h-2 ${result.color}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{result.robot}</h3>
                      <div
                        className={`w-10 h-10 rounded-full ${result.color} bg-opacity-10 flex items-center justify-center`}
                      >
                        <Icon
                          className={`h-5 w-5 text-${result.color.split("-")[1]}`}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">{result.period}</p>
                        <p className="text-3xl font-bold text-green-600">
                          {result.return}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Operações</p>
                          <p className="text-xl font-semibold">
                            {result.trades}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Taxa de Acerto
                          </p>
                          <p className="text-xl font-semibold">
                            {result.winRate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Aviso de Risco
            </h2>
            <p className="text-gray-600 mb-4">
              Os resultados apresentados são baseados em desempenho passado e
              não garantem resultados futuros. O trading de ativos financeiros
              envolve riscos significativos e pode não ser adequado para todos
              os investidores.
            </p>
            <p className="text-gray-600">
              Antes de investir, considere cuidadosamente seus objetivos de
              investimento, nível de experiência e apetite ao risco. Você pode
              perder parte ou todo o seu investimento inicial.
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
