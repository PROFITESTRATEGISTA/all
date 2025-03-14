import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Clock,
  TrendingUp,
  BarChart,
  Shield,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingActionButtons from "@/components/floating-action-buttons";

export default function CopyInvest() {
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
              Plataforma Copy Tridar
            </h1>
            <p className="text-xl text-blue-100">
              Contrate um Fundo de Investimentos para Operar na sua Conta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 flex items-center gap-2"
              >
                <img
                  src="/whatsapp-icon-fixed.png"
                  alt="WhatsApp"
                  className="h-5 w-5 object-contain"
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

      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary shadow-lg relative overflow-hidden mb-12">
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
                      Contrate um Fundo de Investimentos para Operar na sua
                      Conta
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
                      <Clock className="h-4 w-4 mr-1" /> 40 Estratégias em até 9
                      Ativos Diferentes
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
                      className="mb-3 flex items-center gap-2"
                      onClick={() =>
                        window.open(
                          "https://profitestrategista.rds.land",
                          "_blank",
                        )
                      }
                    >
                      <MessageCircle className="h-5 w-5" />
                      Entrar na Fila de Espera
                    </Button>
                    <p className="text-center text-sm text-gray-500">
                      50 Vagas disponíveis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-500" />
                    Rentabilidade Consistente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    O Copy Invest Multi utiliza algoritmos avançados de trading
                    que operam em múltiplos ativos simultaneamente, garantindo
                    uma diversificação que reduz riscos e maximiza retornos.
                  </p>
                  <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-gray-500">
                        Rentabilidade Média
                      </p>
                      <p className="text-2xl font-bold text-green-600">
                        +22.5%
                      </p>
                      <p className="text-xs text-gray-500">mensal</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Win Rate</p>
                      <p className="text-2xl font-bold">72%</p>
                      <p className="text-xs text-gray-500">média</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    Segurança e Transparência
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Todas as operações são realizadas diretamente na sua conta,
                    com total transparência e segurança. Você mantém o controle
                    total sobre seu capital enquanto se beneficia de estratégias
                    profissionais.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Operações visíveis em tempo real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Relatórios detalhados de performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Controle total sobre seu capital</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Como Funciona o Copy Invest
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Inscrição</h3>
                  <p className="text-gray-600">
                    Faça sua inscrição na lista de espera para garantir sua vaga
                    no Copy Invest Multi.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Configuração</h3>
                  <p className="text-gray-600">
                    Configure sua conta na corretora parceira e conecte ao nosso
                    sistema de copy trading.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Resultados</h3>
                  <p className="text-gray-600">
                    Acompanhe os resultados em tempo real e veja seu capital
                    crescer com estratégias profissionais.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-bold mb-4">Resultados Históricos</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-3 px-4 text-blue-800">Mês</th>
                      <th className="text-left py-3 px-4 text-blue-800">
                        Operações
                      </th>
                      <th className="text-left py-3 px-4 text-blue-800">
                        Win Rate
                      </th>
                      <th className="text-left py-3 px-4 text-blue-800">
                        Resultado
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        month: "Janeiro/2023",
                        trades: 142,
                        winRate: "73%",
                        result: "+21.8%",
                      },
                      {
                        month: "Fevereiro/2023",
                        trades: 138,
                        winRate: "70%",
                        result: "+19.5%",
                      },
                      {
                        month: "Março/2023",
                        trades: 156,
                        winRate: "75%",
                        result: "+24.2%",
                      },
                      {
                        month: "Abril/2023",
                        trades: 145,
                        winRate: "72%",
                        result: "+22.7%",
                      },
                      {
                        month: "Maio/2023",
                        trades: 152,
                        winRate: "74%",
                        result: "+23.1%",
                      },
                    ].map((month, index) => (
                      <tr key={index} className="border-b hover:bg-blue-50/50">
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
            </div>
          </div>
        </Container>
      </section>

      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
