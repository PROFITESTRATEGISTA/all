import AdminLayout from "@/components/admin/admin-layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Loader2, Search, RefreshCw, CheckCircle, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Subscription {
  id: string;
  user_email: string;
  plan: string;
  status: string;
  start_date: string;
  end_date: string;
  price: number;
  stripe_customer_id: string;
  last_payment_date: string;
}

export default function AdminSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const fetchSubscriptions = async () => {
    try {
      setLoading(true);

      // For development, use mock data
      if (import.meta.env.DEV) {
        setTimeout(() => {
          setSubscriptions([
            {
              id: "sub_1",
              user_email: "user@example.com",
              plan: "Pack PRO Quant",
              status: "active",
              start_date: new Date(2023, 5, 15).toISOString(),
              end_date: new Date(2024, 5, 15).toISOString(),
              price: 700,
              stripe_customer_id: "cus_123456",
              last_payment_date: new Date(2023, 11, 15).toISOString(),
            },
            {
              id: "sub_2",
              user_email: "johndoe@example.com",
              plan: "Pack Starter",
              status: "active",
              start_date: new Date(2023, 8, 10).toISOString(),
              end_date: new Date(2024, 8, 10).toISOString(),
              price: 300,
              stripe_customer_id: "cus_234567",
              last_payment_date: new Date(2024, 2, 10).toISOString(),
            },
            {
              id: "sub_3",
              user_email: "jane@example.com",
              plan: "Pack Global",
              status: "canceled",
              start_date: new Date(2023, 3, 5).toISOString(),
              end_date: new Date(2023, 9, 5).toISOString(),
              price: 300,
              stripe_customer_id: "cus_345678",
              last_payment_date: new Date(2023, 8, 5).toISOString(),
            },
            {
              id: "sub_4",
              user_email: "mark@example.com",
              plan: "Pack PRO Quant",
              status: "past_due",
              start_date: new Date(2023, 7, 20).toISOString(),
              end_date: new Date(2024, 7, 20).toISOString(),
              price: 700,
              stripe_customer_id: "cus_456789",
              last_payment_date: new Date(2024, 0, 20).toISOString(),
            },
            {
              id: "sub_5",
              user_email: "sarah@example.com",
              plan: "Pack Starter",
              status: "active",
              start_date: new Date(2024, 0, 5).toISOString(),
              end_date: new Date(2025, 0, 5).toISOString(),
              price: 300,
              stripe_customer_id: "cus_567890",
              last_payment_date: new Date(2024, 3, 5).toISOString(),
            },
          ]);
          setLoading(false);
        }, 1000);
        return;
      }

      // In production, fetch from Supabase
      const { data, error } = await supabase
        .from("subscriptions")
        .select("*")
        .order("start_date", { ascending: false });

      if (error) throw error;
      setSubscriptions(data || []);
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">
            <CheckCircle className="h-3 w-3 mr-1" /> Ativo
          </Badge>
        );
      case "canceled":
        return (
          <Badge variant="outline" className="border-gray-500 text-gray-700">
            <XCircle className="h-3 w-3 mr-1" /> Cancelado
          </Badge>
        );
      case "past_due":
        return (
          <Badge variant="destructive">
            <XCircle className="h-3 w-3 mr-1" /> Pagamento Pendente
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredSubscriptions = subscriptions.filter(
    (subscription) =>
      subscription.user_email
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      subscription.plan?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subscription.status?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <AdminLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Gerenciamento de Assinaturas</h1>

        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Assinaturas</CardTitle>
              <CardDescription>
                Gerencie as assinaturas de todos os usuários da plataforma
              </CardDescription>
            </div>
            <Button onClick={fetchSubscriptions} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Atualizar
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar assinaturas..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Plano</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Data de Início</TableHead>
                      <TableHead>Data de Término</TableHead>
                      <TableHead>Último Pagamento</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSubscriptions.length > 0 ? (
                      filteredSubscriptions.map((subscription) => (
                        <TableRow key={subscription.id}>
                          <TableCell>{subscription.user_email}</TableCell>
                          <TableCell>{subscription.plan}</TableCell>
                          <TableCell>
                            {getStatusBadge(subscription.status)}
                          </TableCell>
                          <TableCell>
                            {format(
                              new Date(subscription.start_date),
                              "dd/MM/yyyy",
                            )}
                          </TableCell>
                          <TableCell>
                            {format(
                              new Date(subscription.end_date),
                              "dd/MM/yyyy",
                            )}
                          </TableCell>
                          <TableCell>
                            {format(
                              new Date(subscription.last_payment_date),
                              "dd/MM/yyyy",
                            )}
                          </TableCell>
                          <TableCell>
                            R$ {subscription.price.toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                Detalhes
                              </Button>
                              {subscription.status === "active" && (
                                <Button variant="destructive" size="sm">
                                  Cancelar
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center py-4">
                          Nenhuma assinatura encontrada
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
