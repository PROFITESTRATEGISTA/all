import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, TrendingUp, Calendar } from "lucide-react";
import FloatingActionButtons from "@/components/floating-action-buttons";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Sobre a Profit Estrategista
            </h1>
            <p className="text-xl text-blue-100">
              Conheça nossa história, missão e os especialistas por trás dos
              nossos robôs de trading
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Nossa História
              </h2>
              <p className="text-gray-600 mb-4">
                A Profit Estrategista nasceu da paixão de um grupo de traders
                profissionais que acreditavam que a tecnologia poderia
                revolucionar a forma como as pessoas investem no mercado
                financeiro.
              </p>
              <p className="text-gray-600 mb-4">
                Fundada em 2018, nossa empresa começou desenvolvendo algoritmos
                proprietários para uso interno. Os resultados foram tão
                impressionantes que decidimos compartilhar nossas estratégias
                com outros traders, democratizando o acesso a ferramentas de
                trading automatizado de alta performance.
              </p>
              <p className="text-gray-600">
                Hoje, somos reconhecidos como líderes no desenvolvimento de
                robôs de trading no Brasil, com uma comunidade de mais de 5.000
                traders ativos utilizando nossas soluções diariamente.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Equipe Profit Estrategista"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nossa Missão</h3>
                <p className="text-gray-600">
                  Democratizar o acesso a estratégias de trading automatizado de
                  alta performance, permitindo que traders de todos os níveis
                  possam operar com eficiência e consistência no mercado
                  financeiro.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nossos Valores</h3>
                <p className="text-gray-600">
                  Transparência, inovação contínua, excelência técnica e foco
                  absoluto nos resultados dos nossos clientes. Acreditamos que
                  nosso sucesso está diretamente ligado ao sucesso dos traders
                  que utilizam nossas soluções.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nossa Comunidade</h3>
                <p className="text-gray-600">
                  Mais do que uma empresa de tecnologia, somos uma comunidade de
                  traders apaixonados por resultados. Compartilhamos
                  conhecimento, estratégias e experiências para crescermos
                  juntos no mercado financeiro.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Nossa Equipe
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Conheça os especialistas por trás dos nossos robôs de trading, uma
              equipe multidisciplinar de traders, desenvolvedores e analistas de
              mercado.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Carlos Mendes",
                  role: "CEO & Trader Chefe",
                  bio: "Trader há mais de 15 anos com especialização em algoritmos de trading.",
                  avatar:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos&backgroundColor=b6e3f4",
                },
                {
                  name: "Mariana Silva",
                  role: "CTO & Desenvolvedora",
                  bio: "Especialista em inteligência artificial aplicada ao mercado financeiro.",
                  avatar:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=mariana&backgroundColor=c0aede",
                },
                {
                  name: "Roberto Alves",
                  role: "Analista Quantitativo",
                  bio: "Matemático com foco em modelagem estatística para mercados financeiros.",
                  avatar:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=roberto&backgroundColor=d1d4f9",
                },
                {
                  name: "Juliana Costa",
                  role: "Diretora de Operações",
                  bio: "Especialista em gestão de risco e otimização de estratégias de trading.",
                  avatar:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=juliana&backgroundColor=ffdfbf",
                },
              ].map((member, index) => (
                <Card
                  key={index}
                  className="border-none shadow-md overflow-hidden"
                >
                  <div className="bg-gray-100 p-6 flex justify-center">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-32 h-32 rounded-full"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Quer conhecer mais sobre nossos robôs de trading?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Agende uma demonstração gratuita com um de nossos especialistas e
              descubra como nossas soluções podem transformar seus resultados no
              mercado financeiro.
            </p>
            <Button asChild size="lg" className="flex items-center gap-2">
              <Link to="/schedule-demo">
                <Calendar className="h-5 w-5" />
                Agendar Demonstração
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
