import { useState, useEffect } from "react";
import RobotCard from "./robot-card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useMembership } from "@/hooks/use-membership";

export default function AdaptiveRobotsGrid() {
  const { membership, loading } = useMembership();
  const [currentPage, setCurrentPage] = useState(0);
  const [robotsPerPage, setRobotsPerPage] = useState(6);

  // Ajusta o número de robôs por página com base no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setRobotsPerPage(9);
      } else if (window.innerWidth >= 768) {
        setRobotsPerPage(6);
      } else {
        setRobotsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Todos os robôs disponíveis
  const allRobots = [
    // Pack Starter Robots
    {
      id: "1",
      name: "Trend 3",
      description:
        "Estratégia automatizada para operações baseadas em tendência.",
      type: "Tendencia",
      color: "bg-blue-900",
      included: true,
      category: "Pack Starter",
      downloadUrl: "https://example.com/download/trend-3",
      tutorialUrl: "https://example.com/tutorial/trend-3",
      pack: "Pack Starter",
    },
    {
      id: "2",
      name: "Trend 2",
      description:
        "Robô especializado em identificar e seguir tendências de mercado.",
      type: "Tendencia",
      color: "bg-blue-900",
      included: true,
      category: "Pack Starter",
      downloadUrl: "https://example.com/download/trend-2",
      tutorialUrl: "https://example.com/tutorial/trend-2",
      pack: "Pack Starter",
    },
    {
      id: "3",
      name: "Take 40",
      description:
        "Robô especializado em identificar pontos de reversão no mercado.",
      type: "Reversão",
      color: "bg-green-500",
      included: true,
      category: "Pack Starter",
      downloadUrl: "https://example.com/download/take-40",
      tutorialUrl: "https://example.com/tutorial/take-40",
      pack: "Pack Starter",
    },
    {
      id: "4",
      name: "V Rev",
      description:
        "Estratégia para operações baseada em reversões em formato V.",
      type: "Reversão",
      color: "bg-green-500",
      included: true,
      category: "Pack Starter",
      downloadUrl: "https://example.com/download/v-rev",
      tutorialUrl: "https://example.com/tutorial/v-rev",
      pack: "Pack Starter",
    },
    {
      id: "5",
      name: "Location 1",
      description:
        "Robô para operações baseadas em pontos específicos de reversão.",
      type: "Reversão",
      color: "bg-green-500",
      included: true,
      category: "Pack Starter",
      downloadUrl: "https://example.com/download/location-1",
      tutorialUrl: "https://example.com/tutorial/location-1",
      pack: "Pack Starter",
    },
    {
      id: "6",
      name: "Take GO",
      description:
        "Estratégia para operações de scalp com entradas precisas e gestão de risco automatizada.",
      type: "Scalp",
      color: "bg-black",
      included: true,
      category: "Pack Starter",
      downloadUrl: "https://example.com/download/take-go",
      tutorialUrl: "https://example.com/tutorial/take-go",
      pack: "Pack Starter",
    },
    {
      id: "7",
      name: "T20 BITFUT",
      description:
        "Robô especializado em operações de reversão no mercado de Bitcoin Futuro.",
      type: "Reversão",
      color: "bg-amber-500",
      included: true,
      category: "Pack Starter",
      downloadUrl: "https://example.com/download/t20-bitfut",
      tutorialUrl: "https://example.com/tutorial/t20-bitfut",
      pack: "Pack Starter",
    },
    {
      id: "8",
      name: "Flag 14",
      description:
        "Estratégia para identificação de padrões de bandeira em tendências.",
      type: "Tendencia",
      color: "bg-blue-900",
      included: true,
      category: "Pack Starter",
      downloadUrl: "https://example.com/download/flag-14",
      tutorialUrl: "https://example.com/tutorial/flag-14",
      pack: "Pack Starter",
    },
    {
      id: "9",
      name: "Esto R",
      description:
        "Robô baseado em estocástico para identificação de reversões.",
      type: "Reversão",
      color: "bg-green-500",
      included: true,
      category: "Pack Starter",
      downloadUrl: "https://example.com/download/esto-r",
      tutorialUrl: "https://example.com/tutorial/esto-r",
      pack: "Pack Starter",
    },
    {
      id: "10",
      name: "Esto T",
      description: "Estratégia de scalp baseada em indicador estocástico.",
      type: "Scalp",
      color: "bg-purple-500",
      included: true,
      category: "Pack Starter",
      downloadUrl: "https://example.com/download/esto-t",
      tutorialUrl: "https://example.com/tutorial/esto-t",
      pack: "Pack Starter",
    },
    {
      id: "11",
      name: "Take 33",
      description:
        "Robô para operações de scalp com entradas rápidas e precisas.",
      type: "Scalp",
      color: "bg-purple-500",
      included: true,
      category: "Pack Starter",
      downloadUrl: "https://example.com/download/take-33",
      tutorialUrl: "https://example.com/tutorial/take-33",
      pack: "Pack Starter",
    },
    {
      id: "12",
      name: "CB BITFUT",
      description:
        "Estratégia para operações de reversão no mercado de Bitcoin Futuro.",
      type: "Reversão",
      color: "bg-amber-500",
      included: true,
      category: "Pack Starter",
      downloadUrl: "https://example.com/download/cb-bitfut",
      tutorialUrl: "https://example.com/tutorial/cb-bitfut",
      pack: "Pack Starter",
    },
    {
      id: "13",
      name: "T200 BITFUT",
      description:
        "Robô para operações de reversão no mercado de Bitcoin Futuro com timeframe maior.",
      type: "Reversão",
      color: "bg-amber-500",
      included: true,
      category: "Pack Starter",
      downloadUrl: "https://example.com/download/t200-bitfut",
      tutorialUrl: "https://example.com/tutorial/t200-bitfut",
      pack: "Pack Starter",
    },
    {
      id: "14",
      name: "CB WIN",
      description: "Estratégia para operações de reversão no mercado WIN.",
      type: "Reversão",
      color: "bg-green-500",
      included: true,
      category: "Pack Starter",
      downloadUrl: "https://example.com/download/cb-win",
      tutorialUrl: "https://example.com/tutorial/cb-win",
      pack: "Pack Starter",
    },
    // Pack Trader Robots
    {
      id: "15",
      name: "Pivot Hunter",
      description:
        "Estratégia automatizada para identificação de pontos de pivô com análise avançada de múltiplos timeframes.",
      type: "Misto",
      color: "bg-blue-900",
      included: true,
      category: "Pack Trader",
      downloadUrl: "https://example.com/download/pivot-hunter",
      tutorialUrl: "https://example.com/tutorial/pivot-hunter",
      pack: "Pack Starter",
    },
    {
      id: "16",
      name: "Trap Hunter",
      description:
        "Robô especializado em identificar armadilhas de preço e reversões de tendência.",
      type: "Misto",
      color: "bg-blue-900",
      included: true,
      category: "Pack Trader",
      downloadUrl: "https://example.com/download/trap-hunter",
      tutorialUrl: "https://example.com/tutorial/trap-hunter",
      pack: "Pack Starter",
    },
    {
      id: "17",
      name: "Elephant Hunter",
      description:
        "Robô especializado em identificar e operar em movimentos de grande volume no mercado.",
      type: "Misto",
      color: "bg-green-500",
      included: true,
      category: "Pack Trader",
      downloadUrl: "https://example.com/download/elephant-hunter",
      tutorialUrl: "https://example.com/tutorial/elephant-hunter",
      pack: "Pack Starter",
    },
    {
      id: "18",
      name: "Esto Hunter",
      description:
        "Estratégia para operações baseada em análise estocástica avançada.",
      type: "Misto",
      color: "bg-purple-500",
      included: true,
      category: "Pack Trader",
      downloadUrl: "https://example.com/download/esto-hunter",
      tutorialUrl: "https://example.com/tutorial/esto-hunter",
      pack: "Pack Starter",
    },
    {
      id: "19",
      name: "Setup 9.1/9.2",
      description:
        "Robô para operações baseadas em setups específicos de alta precisão.",
      type: "Misto",
      color: "bg-blue-500",
      included: true,
      category: "Pack Trader",
      downloadUrl: "https://example.com/download/setup-9",
      tutorialUrl: "https://example.com/tutorial/setup-9",
      pack: "Pack Starter",
    },
    {
      id: "20",
      name: "Robô GR Starter",
      description:
        "Estratégia para operações com gestão de risco automatizada.",
      type: "Misto",
      color: "bg-amber-500",
      included: true,
      category: "Pack Trader",
      downloadUrl: "https://example.com/download/gr-starter",
      tutorialUrl: "https://example.com/tutorial/gr-starter",
      pack: "Pack Starter",
    },
    // Pack Global Robots
    {
      id: "21",
      name: "Robô GR Global",
      description:
        "Estratégia avançada para operações em mercados globais com gestão de risco integrada.",
      type: "Misto",
      color: "bg-blue-900",
      included: true,
      category: "Pack Global",
      downloadUrl: "https://example.com/download/gr-global",
      tutorialUrl: "https://example.com/tutorial/gr-global",
      pack: "Pack Global",
    },
    {
      id: "22",
      name: "Criptomoedas",
      description:
        "Robô especializado em operações no mercado de criptomoedas.",
      type: "Misto",
      color: "bg-purple-500",
      included: true,
      category: "Pack Global",
      downloadUrl: "https://example.com/download/criptomoedas",
      tutorialUrl: "https://example.com/tutorial/criptomoedas",
      pack: "Pack Global",
    },
    {
      id: "23",
      name: "Ações e Futuros",
      description:
        "Estratégia para operações em mercados de ações e futuros internacionais.",
      type: "Misto",
      color: "bg-green-500",
      included: true,
      category: "Pack Global",
      downloadUrl: "https://example.com/download/acoes-futuros",
      tutorialUrl: "https://example.com/tutorial/acoes-futuros",
      pack: "Pack Global",
    },
  ];

  // Filtra os robôs com base no plano do usuário
  const getUserRobots = () => {
    if (loading) return [];

    const userPack =
      membership?.pack ||
      localStorage.getItem("testUserPack") ||
      "Pack Starter";

    let availableRobots = [];

    if (userPack === "Pack PRO Quant" || userPack === "PRO") {
      // Usuário PRO tem acesso a todos os robôs
      availableRobots = allRobots;
    } else if (userPack === "Pack Starter" || userPack === "Starter") {
      // Usuário Starter tem acesso apenas aos robôs do Pack Starter
      availableRobots = allRobots.filter(
        (robot) => robot.pack === "Pack Starter",
      );
    } else if (userPack === "Pack Global" || userPack === "Global") {
      // Usuário Global tem acesso apenas aos robôs do Pack Global
      availableRobots = allRobots.filter(
        (robot) => robot.pack === "Pack Global",
      );
    }

    return availableRobots;
  };

  const userRobots = getUserRobots();

  // Agrupa os robôs por categoria
  const robotsByCategory = userRobots.reduce((acc, robot) => {
    const category = robot.category || "Outros";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(robot);
    return acc;
  }, {});

  // Obtém todas as categorias disponíveis
  const categories = Object.keys(robotsByCategory).sort();

  // Calcula o número total de páginas
  const totalPages = Math.ceil(userRobots.length / robotsPerPage);

  // Obtém os robôs da página atual
  const paginatedRobots = userRobots.slice(
    currentPage * robotsPerPage,
    (currentPage + 1) * robotsPerPage,
  );

  // Navega para a próxima página
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Navega para a página anterior
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Obtém o nome do plano do usuário
  const getUserPlanName = () => {
    if (loading) return "Carregando...";
    return (
      membership?.pack || localStorage.getItem("testUserPack") || "Pack Starter"
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Meus Robôs</h2>
          <p className="text-sm text-gray-500">
            Robôs incluídos no seu {getUserPlanName()}
          </p>
        </div>
        <Button asChild>
          <Link to="/members/store">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Loja de Robôs
          </Link>
        </Button>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium text-amber-800">{getUserPlanName()}</h3>
            <p className="text-sm text-amber-600">
              {userRobots.length} robôs incluídos no seu {getUserPlanName()}
            </p>
          </div>
          <Badge
            variant="outline"
            className="bg-amber-100 text-amber-800 border-amber-300"
          >
            28 dias restantes
          </Badge>
        </div>
      </div>

      {/* Visualização por categoria (para telas grandes) */}
      <div className="hidden lg:block">
        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {robotsByCategory[category].map((robot) => (
                <RobotCard key={robot.id} robot={robot} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Visualização paginada (para telas médias e pequenas) */}
      <div className="lg:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {paginatedRobots.map((robot) => (
            <RobotCard key={robot.id} robot={robot} />
          ))}
        </div>

        {/* Controles de paginação */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-6">
            <Button
              variant="outline"
              onClick={prevPage}
              disabled={currentPage === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Anterior
            </Button>

            <div className="text-sm text-gray-500">
              Página {currentPage + 1} de {totalPages}
            </div>

            <Button
              variant="outline"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="flex items-center gap-2"
            >
              Próximo
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
