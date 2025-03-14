import DashboardLayout from "@/components/members/dashboard-layout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, BookOpen, Clock, Star, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import FloatingActionButtons from "@/components/floating-action-buttons";

export default function MembersTutorials() {
  const tutorials = [
    {
      id: "1",
      title: "Configuração Inicial do Profit Master",
      description:
        "Aprenda a configurar corretamente o robô Profit Master para operações de day trade.",
      duration: "15 min",
      level: "Iniciante",
      robot: "Profit Master",
      thumbnail:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    },
    {
      id: "2",
      title: "Estratégias Avançadas com Forex Expert",
      description:
        "Técnicas avançadas para maximizar os resultados com o robô Forex Expert.",
      duration: "25 min",
      level: "Avançado",
      robot: "Forex Expert",
      thumbnail:
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&q=80",
    },
    {
      id: "3",
      title: "Gestão de Risco em Operações Automatizadas",
      description:
        "Aprenda a configurar stop loss e take profit adequados para seus robôs.",
      duration: "20 min",
      level: "Intermediário",
      robot: "Todos",
      thumbnail:
        "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=600&q=80",
    },
    {
      id: "4",
      title: "Análise de Resultados e Otimização",
      description:
        "Como analisar os resultados dos seus robôs e otimizar os parâmetros.",
      duration: "30 min",
      level: "Avançado",
      robot: "Todos",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
      id: "5",
      title: "Operando em Diferentes Timeframes",
      description:
        "Estratégias para operar em múltiplos timeframes com seus robôs.",
      duration: "22 min",
      level: "Intermediário",
      robot: "Profit Master",
      thumbnail:
        "https://images.unsplash.com/photo-1642790551116-18e150f248e9?w=600&q=80",
    },
    {
      id: "6",
      title: "Integração com APIs de Corretoras",
      description:
        "Como conectar seus robôs diretamente às APIs das principais corretoras.",
      duration: "35 min",
      level: "Avançado",
      robot: "Todos",
      thumbnail:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&q=80",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Iniciante":
        return "bg-green-100 text-green-800 border-green-200";
      case "Intermediário":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Avançado":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Tutoriais Práticos</h1>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-sm">
            <Input placeholder="Buscar tutoriais..." className="pl-10" />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BookOpen className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filtrar
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="profit-master">Profit Master</TabsTrigger>
            <TabsTrigger value="forex-expert">Forex Expert</TabsTrigger>
            <TabsTrigger value="beginner">Para Iniciantes</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial) => (
                <Card
                  key={tutorial.id}
                  className="border overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <Play className="h-4 w-4" />
                        Assistir
                      </Button>
                    </div>
                    <Badge className="absolute top-2 right-2 bg-black bg-opacity-70 text-white border-none">
                      <Clock className="h-3 w-3 mr-1" />
                      {tutorial.duration}
                    </Badge>
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        variant="outline"
                        className={getLevelColor(tutorial.level)}
                      >
                        {tutorial.level}
                      </Badge>
                      <Badge variant="outline">{tutorial.robot}</Badge>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {tutorial.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-gray-300" />
                      <span className="text-sm text-gray-500 ml-2">(42)</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <BookOpen className="h-4 w-4" />
                      Detalhes
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profit-master" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials
                .filter(
                  (tutorial) =>
                    tutorial.robot === "Profit Master" ||
                    tutorial.robot === "Todos",
                )
                .map((tutorial) => (
                  <Card
                    key={tutorial.id}
                    className="border overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={tutorial.thumbnail}
                        alt={tutorial.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <Play className="h-4 w-4" />
                          Assistir
                        </Button>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-black bg-opacity-70 text-white border-none">
                        <Clock className="h-3 w-3 mr-1" />
                        {tutorial.duration}
                      </Badge>
                    </div>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge
                          variant="outline"
                          className={getLevelColor(tutorial.level)}
                        >
                          {tutorial.level}
                        </Badge>
                        <Badge variant="outline">{tutorial.robot}</Badge>
                      </div>
                      <h3 className="font-bold text-lg mb-2">
                        {tutorial.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {tutorial.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-gray-300" />
                        <span className="text-sm text-gray-500 ml-2">(42)</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1"
                      >
                        <BookOpen className="h-4 w-4" />
                        Detalhes
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="forex-expert" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials
                .filter(
                  (tutorial) =>
                    tutorial.robot === "Forex Expert" ||
                    tutorial.robot === "Todos",
                )
                .map((tutorial) => (
                  <Card
                    key={tutorial.id}
                    className="border overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={tutorial.thumbnail}
                        alt={tutorial.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <Play className="h-4 w-4" />
                          Assistir
                        </Button>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-black bg-opacity-70 text-white border-none">
                        <Clock className="h-3 w-3 mr-1" />
                        {tutorial.duration}
                      </Badge>
                    </div>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge
                          variant="outline"
                          className={getLevelColor(tutorial.level)}
                        >
                          {tutorial.level}
                        </Badge>
                        <Badge variant="outline">{tutorial.robot}</Badge>
                      </div>
                      <h3 className="font-bold text-lg mb-2">
                        {tutorial.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {tutorial.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-gray-300" />
                        <span className="text-sm text-gray-500 ml-2">(42)</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1"
                      >
                        <BookOpen className="h-4 w-4" />
                        Detalhes
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="beginner" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials
                .filter((tutorial) => tutorial.level === "Iniciante")
                .map((tutorial) => (
                  <Card
                    key={tutorial.id}
                    className="border overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={tutorial.thumbnail}
                        alt={tutorial.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <Play className="h-4 w-4" />
                          Assistir
                        </Button>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-black bg-opacity-70 text-white border-none">
                        <Clock className="h-3 w-3 mr-1" />
                        {tutorial.duration}
                      </Badge>
                    </div>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge
                          variant="outline"
                          className={getLevelColor(tutorial.level)}
                        >
                          {tutorial.level}
                        </Badge>
                        <Badge variant="outline">{tutorial.robot}</Badge>
                      </div>
                      <h3 className="font-bold text-lg mb-2">
                        {tutorial.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {tutorial.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-gray-300" />
                        <span className="text-sm text-gray-500 ml-2">(42)</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1"
                      >
                        <BookOpen className="h-4 w-4" />
                        Detalhes
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <FloatingActionButtons />
    </DashboardLayout>
  );
}
