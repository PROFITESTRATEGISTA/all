import AdminLayout from "@/components/admin/admin-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Loader2,
  RefreshCw,
  Users,
  CreditCard,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminStats() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeSubscriptions: 0,
    monthlyRevenue: 0,
    averageSubscriptionValue: 0,
    userGrowth: 0,
    churnRate: 0,
    conversionRate: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);

      // For development, use mock data
      setTimeout(() => {
        setStats({
          totalUsers: 1250,
          activeSubscriptions: 875,
          monthlyRevenue: 262500,
          averageSubscriptionValue: 300,
          userGrowth: 12.5,
          churnRate: 3.2,
          conversionRate: 70,
        });
        setLoading(false);
      }, 1000);

      // In production, fetch from API or Supabase
      // const { data, error } = await supabase.rpc('get_platform_stats');
      // if (error) throw error;
      // setStats(data);
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total de Usuários",
      value: stats.totalUsers.toLocaleString(),
      description: "Usuários registrados na plataforma",
      icon: Users,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Assinaturas Ativas",
      value: stats.activeSubscriptions.toLocaleString(),
      description: "Assinaturas ativas no momento",
      icon: CreditCard,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Receita Mensal",
      value: `R$ ${stats.monthlyRevenue.toLocaleString()}`,
      description: "Receita recorrente mensal (MRR)",
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Valor Médio",
      value: `R$ ${stats.averageSubscriptionValue.toLocaleString()}`,
      description: "Valor médio por assinatura",
      icon: Calendar,
      color: "bg-amber-100 text-amber-700",
    },
  ];

  const performanceMetrics = [
    {
      title: "Crescimento de Usuários",
      value: `+${stats.userGrowth}%`,
      description: "Nos últimos 30 dias",
      trend: "up",
    },
    {
      title: "Taxa de Cancelamento",
      value: `${stats.churnRate}%`,
      description: "Nos últimos 30 dias",
      trend: "down",
    },
    {
      title: "Taxa de Conversão",
      value: `${stats.conversionRate}%`,
      description: "Visitantes para assinantes",
      trend: "up",
    },
  ];

  const planDistribution = [
    { name: "Pack PRO Quant", value: 45, color: "bg-amber-500" },
    { name: "Pack Starter", value: 35, color: "bg-green-500" },
    { name: "Pack Global", value: 20, color: "bg-blue-500" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Estatísticas da Plataforma</h1>
          <Button onClick={fetchStats} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statCards.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="shadow-sm">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-sm font-medium text-gray-500">
                          {stat.title}
                        </CardTitle>
                        <div
                          className={`p-2 rounded-full ${stat.color.split(" ")[0]}`}
                        >
                          <Icon
                            className={`h-4 w-4 ${stat.color.split(" ")[1]}`}
                          />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-gray-500 mt-1">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="shadow-sm lg:col-span-2">
                <CardHeader>
                  <CardTitle>Distribuição de Planos</CardTitle>
                  <CardDescription>
                    Porcentagem de usuários por plano de assinatura
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {planDistribution.map((plan) => (
                      <div key={plan.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            {plan.name}
                          </span>
                          <span className="text-sm font-medium">
                            {plan.value}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className={`${plan.color} h-2.5 rounded-full`}
                            style={{ width: `${plan.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Métricas de Desempenho</CardTitle>
                  <CardDescription>
                    Indicadores chave de performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {performanceMetrics.map((metric, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <div>
                          <p className="font-medium">{metric.title}</p>
                          <p className="text-xs text-gray-500">
                            {metric.description}
                          </p>
                        </div>
                        <div
                          className={`text-lg font-bold ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}
                        >
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="monthly" className="w-full">
              <div className="flex justify-between items-center mb-4">
                <CardTitle>Receita ao Longo do Tempo</CardTitle>
                <TabsList>
                  <TabsTrigger value="monthly">Mensal</TabsTrigger>
                  <TabsTrigger value="quarterly">Trimestral</TabsTrigger>
                  <TabsTrigger value="yearly">Anual</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="monthly" className="mt-0">
                <Card>
                  <CardContent className="pt-6">
                    <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md">
                      <p className="text-gray-500">
                        Gráfico de receita mensal seria exibido aqui
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="quarterly" className="mt-0">
                <Card>
                  <CardContent className="pt-6">
                    <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md">
                      <p className="text-gray-500">
                        Gráfico de receita trimestral seria exibido aqui
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="yearly" className="mt-0">
                <Card>
                  <CardContent className="pt-6">
                    <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md">
                      <p className="text-gray-500">
                        Gráfico de receita anual seria exibido aqui
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </AdminLayout>
  );
}
