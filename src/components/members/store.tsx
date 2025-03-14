import { useState } from "react";
import DashboardLayout from "@/components/members/dashboard-layout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  BarChart,
  Clock,
  Zap,
  Check,
  Info,
  ExternalLink,
  HelpCircle,
  Users,
  BookOpen,
  Mail,
} from "lucide-react";
import PaymentButton from "@/components/members/payment-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RobotCard from "@/components/members/robot-card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function MembersStore() {
  const [currentView, setCurrentView] = useState("simple");

  // Categorias de produtos adicionais
  const categories = {
    AUTOMACAO: "Automação",
    PLATAFORMAS: "Plataformas",
    INFRAESTRUTURA: "Infraestrutura",
  };

  const additionalRobots = [
    {
      id: "1",
      name: "GR Pro 25 Contratos",
      description:
        "Robô avançado para operações em múltiplos mercados com análise técnica avançada.",
      price: "R$ 199,90",
      originalPrice: "R$ 499,90",
      type: categories.AUTOMACAO,
      color: "bg-blue-900",
      icon: BarChart,
      features: [
        "Operações em múltiplos mercados",
        "Análise técnica avançada",
        "Filtros de volatilidade",
        "Compatível com múltiplos ativos",
      ],
      stripeLink: "https://buy.stripe.com/00g4jI4pF7Yp3G8wA",
      notIncludedInPro: true,
    },
    {
      id: "2",
      name: "Plataforma Copy Tridar",
      description:
        "Serviço de copy trading que replica operações de traders profissionais na sua conta.",
      price: "R$ 200,00",
      type: "Copy Trading",
      color: "bg-green-500",
      icon: TrendingUp,
      features: [
        "Copy trading automatizado",
        "Operações de traders profissionais",
        "Relatórios detalhados de performance",
        "Configuração personalizada de risco",
      ],
      stripeLink: "https://profitestrategista.rds.land",
      notIncludedInPro: true,
    },
    {
      id: "3",
      name: "VPS Trader",
      description:
        "Máquina virtual dedicada para execução contínua dos seus robôs de trading.",
      price: "R$ 110,00",
      originalPrice: "R$ 145,00",
      type: categories.INFRAESTRUTURA,
      color: "bg-purple-500",
      icon: Zap,
      features: [
        "Servidor dedicado 24/7",
        "Baixa latência para execução",
        "Suporte técnico especializado",
        "Backup automático diário",
      ],
      stripeLink: "https://wa.me/5511999999999",
      notIncludedInPro: true,
    },
    {
      id: "4",
      name: "Módulo de Automação",
      description:
        "Módulo avançado para automação completa de suas estratégias de trading com 15% de desconto.",
      price: "A partir de R$ 99,90",
      type: categories.PLATAFORMAS,
      color: "bg-blue-500",
      icon: Clock,
      features: [
        "Automação completa de estratégias",
        "Execução precisa de ordens",
        "Integração com múltiplas corretoras",
        "Painel de controle avançado",
      ],
      stripeLink: "https://buy.stripe.com/8wM5nQ4pF6Yp3G8dQW",
      notIncludedInPro: true,
    },
    {
      id: "5",
      name: "BlackArrow PRO FX GLOBE",
      description:
        "Plataforma de corretora parceira específica com 20% de desconto. Suporta apenas operações manuais. Temporariamente indisponível.",
      price: "R$ 150,00",
      type: categories.PLATAFORMAS,
      color: "bg-black",
      icon: TrendingUp,
      features: [
        "Análise avançada de mercado",
        "Sinais de alta precisão",
        "Suporte dedicado",
        "Atualizações semanais",
      ],
      stripeLink: "https://buy.stripe.com/5kA6rG4pF3Fq5pK9AC",
      notIncludedInPro: true,
    },
    {
      id: "6",
      name: "Profit Pro",
      description:
        "Acesso gratuito à plataforma Profit Pro compatível com XP, BTG e Elliot. Versão gratuita com limite de 200 contratos mensais.",
      price: "GRÁTIS",
      type: categories.PLATAFORMAS,
      color: "bg-green-500",
      icon: TrendingUp,
      features: [
        "Acesso à plataforma Profit Pro",
        "Compatível com XP, BTG e Elliot",
        "Limite de 200 contratos mensais",
        "Suporte básico incluído",
      ],
      stripeLink: "#",
      notIncludedInPro: false,
      free: true,
    },
  ];

  // Opcionais contratados pelo cliente
  const optionals = [];

  // Definição dos robôs incluídos no plano (simulado)
  const standardRobots = [];

  // Combinar todos os robôs disponíveis
  const allRobots = [...standardRobots, ...optionals];

  // Agrupar robôs por categoria
  const robotsByCategory = allRobots.reduce((acc, robot) => {
    const category = robot.category || "Outros";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(robot);
    return acc;
  }, {});

  // Ordenar categorias
  const categoryNames = Object.keys(robotsByCategory).sort();

  // Definição dos planos disponíveis em ordem hierárquica
  const packHierarchy = [
    "Free",
    "Pack Starter",
    "Pack Global",
    "Pack PRO Quant",
  ];

  // Plano atual do usuário
  const currentUserPack =
    localStorage.getItem("testUserPack") || "Pack PRO Quant";

  // Encontrar o índice do plano atual do usuário na hierarquia
  const currentPackIndex = packHierarchy.indexOf(currentUserPack);

  const packs = [
    {
      name: "Pack Starter",
      price: "R$ 300",
      period: "/mês",
      description:
        "Pack com 20 estratégias para WIN e BIT, incluindo Trend 3, Take 40, V Rev, Location 1, Take GO, Pivot Hunter, Trap Hunter e mais.",
      color: "bg-green-500",
      popular: false,
      features: [
        "14 Robôs Starter + 6 Robôs Trader",
        "Estratégias para WIN e BIT",
        "Tendência, Reversão e Scalp",
        "Operações automatizadas",
        "Suporte básico",
      ],
      stripeLink: "https://buy.stripe.com/5kA6rG4pF3Fq5pK9AC",
      current: currentUserPack === "Pack Starter",
      canUpgrade: currentUserPack === "Free",
      canDowngrade: currentPackIndex > packHierarchy.indexOf("Pack Starter"),
      level: 1,
    },
    {
      name: "Pack Global",
      price: "R$ 300",
      period: "/mês",
      description:
        "Pack com 3 estratégias para mercado global, incluindo Robô GR Global, Criptomoedas e Ações e Futuros.",
      color: "bg-blue-500",
      popular: false,
      features: [
        "3 Robôs para mercados globais",
        "Operações em criptomoedas",
        "Operações em ações e futuros",
        "Gestão de risco integrada",
        "Suporte avançado",
      ],
      stripeLink: "https://buy.stripe.com/cN24jT8rq4QR7Qs6oF",
      current: currentUserPack === "Pack Global",
      canUpgrade: currentUserPack === "Pack Starter",
      canDowngrade: currentPackIndex > packHierarchy.indexOf("Pack Global"),
      level: 2,
    },
    {
      name: "Pack PRO Quant",
      price: "R$ 700",
      period: "/mês",
      description:
        "Pack Quant com todas as estratégias (23 robôs), Copy Invest incluído e backtest sem limites.",
      color: "bg-amber-500",
      popular: true,
      features: [
        "Todos os 23 robôs incluídos",
        "Pack Starter + Pack Trader + Pack Global",
        "Acesso a todos os robôs",
        "Backtest sem limites",
        "Suporte VIP 24/7",
      ],
      stripeLink: "https://buy.stripe.com/6oE3cY5pF5Fq5pKcN3",
      current: currentUserPack === "Pack PRO Quant",
      canUpgrade: currentUserPack === "Pack Global",
      canDowngrade: false,
      level: 3,
    },
  ];

  // Mostrar todos os produtos disponíveis sem filtrar
  const filteredRobots = additionalRobots;

  // Comunidades e grupos de suporte
  const supportGroups = [
    {
      name: "Comunidade Profit",
      description:
        "Participe do nosso grupo exclusivo para traders e tire suas dúvidas em tempo real.",
      link: "https://chat.whatsapp.com/KfIRw3pgeAG4strXZtyEEm",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      name: "Agendar Consultoria",
      description:
        "Agende uma consultoria personalizada com nossos especialistas para otimizar suas estratégias.",
      link: "https://profitestrategista.rds.land/demo",
      icon: Calendar,
      color: "bg-green-500",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Loja de Robôs</h1>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Loja de Robôs</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={currentView === "simple" ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentView("simple")}
            >
              Visão Simplificada
            </Button>
            <Button
              variant={currentView === "detailed" ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentView("detailed")}
            >
              Visão Detalhada
            </Button>
          </div>
        </div>

        {/* Informação do plano atual */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-amber-800">
                Seu Plano: <span className="font-bold">{currentUserPack}</span>
              </h3>
              <p className="text-sm text-amber-600">
                {currentUserPack === "Pack PRO Quant"
                  ? "Você tem acesso a todos os 23 robôs disponíveis na plataforma."
                  : currentUserPack === "Pack Starter"
                    ? "Você tem acesso a 20 robôs de trading para operações em WIN e BIT."
                    : "Você tem acesso a 3 robôs para mercados globais."}
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="help" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="help">Ajuda e Suporte</TabsTrigger>
            <TabsTrigger value="robots">Robôs e Serviços</TabsTrigger>
            <TabsTrigger value="packs">Packs de Estratégias</TabsTrigger>
          </TabsList>

          <TabsContent value="robots" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRobots.map((robot) => {
                const Icon = robot.icon;
                return (
                  <Card
                    key={robot.id}
                    className="border overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className={`h-2 ${robot.color}`}></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-2">
                          <div
                            className={`w-10 h-10 rounded-full ${robot.color} flex items-center justify-center`}
                          >
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{robot.name}</h3>
                            <Badge variant="outline" className="mt-1">
                              {robot.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        {robot.description}
                      </p>

                      {robot.notIncludedInPro &&
                        currentUserPack === "Pack PRO Quant" && (
                          <div className="mb-4 bg-amber-50 border border-amber-200 rounded-lg p-2 text-sm text-amber-800">
                            Não incluído no seu plano atual
                          </div>
                        )}

                      {robot.free && (
                        <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-2 text-sm text-green-800">
                          Incluído GRÁTIS no seu plano
                        </div>
                      )}

                      {currentView === "detailed" && (
                        <div className="space-y-3">
                          {robot.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <div>
                        <p className="text-sm text-gray-500">Preço</p>
                        <div className="flex items-baseline gap-2">
                          <p className="text-xl font-bold">{robot.price}</p>
                          {robot.originalPrice && (
                            <span className="text-gray-500 line-through text-sm">
                              {robot.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      <PaymentButton
                        priceId={robot.stripeLink}
                        isSubscription={false}
                      >
                        Contratar
                      </PaymentButton>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="packs" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <CardHeader
                    className={`pb-0 ${pack.popular ? "pt-8" : "pt-6"}`}
                  >
                    <CardTitle className="text-xl">{pack.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{pack.price}</span>
                      <span className="text-gray-500 ml-1">{pack.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      {pack.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-6">
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
                    {pack.current ? (
                      <div className="w-full bg-green-100 text-green-800 py-2 px-4 rounded-md text-center font-medium">
                        Seu Plano Atual
                      </div>
                    ) : pack.canUpgrade ? (
                      <PaymentButton
                        priceId={pack.stripeLink}
                        className="w-full"
                      >
                        Fazer Upgrade
                      </PaymentButton>
                    ) : pack.canDowngrade ? (
                      <PaymentButton
                        priceId={pack.stripeLink}
                        className="w-full bg-gray-600 hover:bg-gray-700"
                      >
                        Fazer Downgrade
                      </PaymentButton>
                    ) : (
                      <Button className="w-full" disabled>
                        <span className="flex items-center gap-1">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          {currentPackIndex < packHierarchy.indexOf(pack.name)
                            ? "Upgrade Indisponível"
                            : "Downgrade Indisponível"}
                        </span>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="help" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-green-500 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2">
                    <img
                      src="/whatsapp-icon-new.png"
                      alt="WhatsApp"
                      className="h-5 w-5"
                    />
                    Comunidade WhatsApp
                  </CardTitle>
                  <CardDescription>
                    Participe do nosso grupo exclusivo para traders
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    Tire dúvidas em tempo real, compartilhe estratégias e
                    conecte-se com outros traders da plataforma.
                  </p>
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600"
                    onClick={() =>
                      window.open(
                        "https://chat.whatsapp.com/KfIRw3pgeAG4strXZtyEEm",
                        "_blank",
                      )
                    }
                  >
                    <img
                      src="/whatsapp-icon-new.png"
                      alt="WhatsApp"
                      className="h-5 w-5 mr-2"
                    />
                    Entrar no Grupo WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Assistente de Configuração
                  </CardTitle>
                  <CardDescription>
                    Nosso assistente especializado para configuração dos robôs
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    Obtenha ajuda com a configuração dos robôs, estratégias de
                    trading e muito mais.
                  </p>
                  <Button
                    className="w-full"
                    onClick={() =>
                      window.open(
                        "https://chatgpt.com/g/g-678c078c21208191a0b18fb1a70e22f1-profit-estrategista-trading-solutions",
                        "_blank",
                      )
                    }
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Acessar Assistente de Configuração
                  </Button>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-xl font-bold mt-8 mb-4">
              Grupos e Comunidades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <Card
                    key={index}
                    className="border hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full ${group.color} flex items-center justify-center`}
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{group.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        {group.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full"
                        onClick={() => window.open(group.link, "_blank")}
                      >
                        Participar
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  Precisa de ajuda adicional?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Entre em contato com nossa equipe de suporte para obter ajuda
                  personalizada com a configuração dos robôs, estratégias de
                  trading ou qualquer outra dúvida.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white"
                    onClick={() =>
                      window.open(
                        "https://chat.whatsapp.com/KfIRw3pgeAG4strXZtyEEm",
                        "_blank",
                      )
                    }
                  >
                    <img
                      src="/whatsapp-icon-new.png"
                      alt="WhatsApp"
                      className="h-5 w-5"
                    />
                    Entrar na Comunidade WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() =>
                      window.open(
                        "mailto:suporte@profitestrategista.com.br",
                        "_blank",
                      )
                    }
                  >
                    <Mail className="h-4 w-4" />
                    Enviar Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
