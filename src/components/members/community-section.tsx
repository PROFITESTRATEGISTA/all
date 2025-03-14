import PostCard from "./post-card";
import PostForm from "./post-form";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Filter,
  Tag,
  TrendingUp,
  BookOpen,
  HelpCircle,
  Users,
  PinIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CommunitySection() {
  const categories = [
    {
      id: "backtest",
      name: "Backtest de Estratégias",
      icon: TrendingUp,
      count: 28,
    },
    { id: "technical", name: "Análise Técnica", icon: BookOpen, count: 42 },
    { id: "help", name: "Ajuda e Suporte", icon: HelpCircle, count: 15 },
    { id: "discussion", name: "Discussões Gerais", icon: Users, count: 36 },
  ];

  const pinnedPosts = [
    {
      id: "pinned-1",
      author: {
        name: "Admin Profit",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
        role: "Administrador",
      },
      content:
        "Bem-vindos à nova versão da nossa comunidade! Aqui você pode compartilhar estratégias, resultados de backtest e tirar dúvidas com outros traders. Lembre-se de seguir nossas diretrizes de comunidade.",
      timestamp: "Há 2 dias",
      likes: 56,
      comments: 23,
      tags: ["Anúncio", "Importante"],
      isPinned: true,
    },
  ];

  const posts = [
    {
      id: "1",
      author: {
        name: "Carlos Silva",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos",
        role: "Trader Profissional",
      },
      content:
        "Estou vendo uma ótima oportunidade de entrada em PETR4 hoje. O preço está testando um suporte importante e os indicadores técnicos estão mostrando sinais de reversão. Alguém mais está de olho nesse ativo?",
      timestamp: "Há 2 horas",
      likes: 24,
      comments: 8,
      tags: ["Ações", "Análise Técnica"],
      category: "technical",
    },
    {
      id: "2",
      author: {
        name: "Mariana Costa",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mariana",
        role: "Analista de Mercado",
      },
      content:
        "Acabei de atualizar meu robô Forex Expert com os novos parâmetros otimizados. Nos testes de backtest, a rentabilidade mensal subiu de 18% para 22%. Se alguém quiser os parâmetros, é só pedir nos comentários!",
      timestamp: "Há 5 horas",
      likes: 42,
      comments: 15,
      tags: ["Forex", "Otimização"],
      category: "backtest",
    },
    {
      id: "3",
      author: {
        name: "Roberto Almeida",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=roberto",
        role: "Trader Iniciante",
      },
      content:
        "Pessoal, estou tendo dificuldades para configurar o robô Crypto Trader. Alguém poderia me ajudar com as configurações iniciais? Estou especialmente confuso com os parâmetros de stop loss e take profit para o mercado de criptomoedas.",
      timestamp: "Há 1 dia",
      likes: 7,
      comments: 12,
      tags: ["Ajuda", "Crypto"],
      category: "help",
    },
  ];

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Comunidade</h2>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filtrar
        </Button>
      </div>

      <Tabs defaultValue="feed" className="w-full">
        <TabsList className="mb-6 bg-gray-100 p-1 rounded-md">
          <TabsTrigger value="feed" className="rounded-sm">
            Feed
          </TabsTrigger>
          <TabsTrigger value="pinned" className="rounded-sm">
            Fixados
          </TabsTrigger>
          <TabsTrigger value="following" className="rounded-sm">
            Seguindo
          </TabsTrigger>
          <TabsTrigger value="my-posts" className="rounded-sm">
            Meus Posts
          </TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="md:col-span-3">
            <TabsContent value="feed" className="space-y-6 mt-0">
              <Card className="border shadow-sm">
                <CardContent className="p-6">
                  <PostForm />
                </CardContent>
              </Card>

              {pinnedPosts.map((post) => (
                <Card
                  key={post.id}
                  className="border-primary border-2 shadow-sm"
                >
                  <CardHeader className="pb-0 pt-4 px-6">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/30 flex items-center gap-1"
                      >
                        <PinIcon className="h-3 w-3" /> Fixado
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <PostCard post={post} />
                  </CardContent>
                </Card>
              ))}

              <div className="grid grid-cols-1 gap-4">
                {posts.map((post) => (
                  <Card key={post.id} className="border shadow-sm">
                    <CardContent className="p-0">
                      <PostCard post={post} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pinned" className="space-y-6 mt-0">
              {pinnedPosts.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {pinnedPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="border-primary border-2 shadow-sm"
                    >
                      <CardHeader className="pb-0 pt-4 px-6">
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="outline"
                            className="bg-primary/10 text-primary border-primary/30 flex items-center gap-1"
                          >
                            <PinIcon className="h-3 w-3" /> Fixado
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <PostCard post={post} />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border shadow-sm">
                  <CardContent className="p-6 text-center text-gray-500">
                    Não há posts fixados no momento
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="following" className="mt-0">
              <Card className="border shadow-sm">
                <CardContent className="p-6 text-center text-gray-500">
                  Posts de pessoas que você segue serão exibidos aqui
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="my-posts" className="mt-0">
              <Card className="border shadow-sm">
                <CardContent className="p-6 text-center text-gray-500">
                  Seus posts serão exibidos aqui
                </CardContent>
              </Card>
            </TabsContent>
          </div>

          <div className="md:col-span-1">
            <Card className="border shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Categorias</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <div
                        key={category.id}
                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">
                            {category.name}
                          </span>
                        </div>
                        <Badge variant="outline" className="bg-gray-100">
                          {category.count}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm mt-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Tags Populares</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 cursor-pointer hover:bg-gray-50"
                  >
                    <Tag className="h-3 w-3" /> Backtest
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 cursor-pointer hover:bg-gray-50"
                  >
                    <Tag className="h-3 w-3" /> Forex
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 cursor-pointer hover:bg-gray-50"
                  >
                    <Tag className="h-3 w-3" /> Crypto
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 cursor-pointer hover:bg-gray-50"
                  >
                    <Tag className="h-3 w-3" /> Análise Técnica
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 cursor-pointer hover:bg-gray-50"
                  >
                    <Tag className="h-3 w-3" /> Otimização
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 cursor-pointer hover:bg-gray-50"
                  >
                    <Tag className="h-3 w-3" /> Ajuda
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
