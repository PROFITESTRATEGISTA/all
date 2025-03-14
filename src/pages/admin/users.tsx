import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
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
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { useAuth } from "@/contexts/auth-context";
import { useNavigate } from "react-router-dom";
import { Loader2, UserX, UserCheck, Search, UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/admin/admin-layout";
import TestUserSwitcher from "@/components/admin/test-user-switcher";

type User = {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at: string | null;
  user_metadata: {
    first_name?: string;
    last_name?: string;
  };
  is_subscribed?: boolean;
  subscription_tier?: string;
};

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: "1",
    email: "admin@example.com",
    created_at: new Date().toISOString(),
    last_sign_in_at: new Date().toISOString(),
    user_metadata: {
      first_name: "Admin",
      last_name: "User",
    },
    is_subscribed: true,
    subscription_tier: "premium",
  },
  {
    id: "2",
    email: "user@example.com",
    created_at: new Date().toISOString(),
    last_sign_in_at: new Date().toISOString(),
    user_metadata: {
      first_name: "Regular",
      last_name: "User",
    },
    is_subscribed: true,
    subscription_tier: "basic",
  },
  {
    id: "3",
    email: "inactive@example.com",
    created_at: new Date().toISOString(),
    last_sign_in_at: null,
    user_metadata: {
      first_name: "Inactive",
      last_name: "User",
    },
    is_subscribed: false,
    subscription_tier: "basic",
  },
];

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is admin
    if (
      !user ||
      (user.email !== "admin@example.com" &&
        user.email !== "pedropardal04@gmail.com")
    ) {
      toast({
        title: "Acesso negado",
        description: "Você não tem permissão para acessar esta página.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    fetchUsers();
  }, [user, navigate, toast]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      // In a real app, you would use Supabase admin API
      // For demo purposes, we'll use mock data
      setTimeout(() => {
        setUsers(mockUsers);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os usuários.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  const toggleUserStatus = async (userId: string, currentStatus: boolean) => {
    try {
      // This is a placeholder - in a real app, you would use the Supabase admin API
      // to disable/enable the user account
      const newStatus = !currentStatus;

      // Update local state for immediate UI feedback
      setUsers(
        users.map((user) =>
          user.id === userId ? { ...user, is_subscribed: newStatus } : user,
        ),
      );

      toast({
        title: "Sucesso",
        description: `Usuário ${newStatus ? "ativado" : "desativado"} com sucesso.`,
      });
    } catch (error) {
      console.error("Error toggling user status:", error);
      toast({
        title: "Erro",
        description: "Não foi possível alterar o status do usuário.",
        variant: "destructive",
      });
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.user_metadata?.first_name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      user.user_metadata?.last_name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()),
  );

  return (
    <AdminLayout>
      {import.meta.env.DEV && (
        <div className="mb-8">
          <TestUserSwitcher />
        </div>
      )}
      <Card className="shadow-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Gerenciamento de Usuários</CardTitle>
            <CardDescription>
              Gerencie todos os usuários da plataforma
            </CardDescription>
          </div>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Adicionar Usuário
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar usuários..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button onClick={fetchUsers} variant="outline">
              Atualizar
            </Button>
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
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Data de Cadastro</TableHead>
                    <TableHead>Último Login</TableHead>
                    <TableHead>Plano</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          {user.user_metadata?.first_name}{" "}
                          {user.user_metadata?.last_name}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          {user.created_at
                            ? format(
                                new Date(user.created_at),
                                "dd/MM/yyyy HH:mm",
                              )
                            : "N/A"}
                        </TableCell>
                        <TableCell>
                          {user.last_sign_in_at
                            ? format(
                                new Date(user.last_sign_in_at),
                                "dd/MM/yyyy HH:mm",
                              )
                            : "Nunca"}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              user.subscription_tier === "premium"
                                ? "default"
                                : "outline"
                            }
                          >
                            {user.subscription_tier || "Básico"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              user.is_subscribed ? "default" : "destructive"
                            }
                            className={user.is_subscribed ? "bg-green-500" : ""}
                          >
                            {user.is_subscribed ? "Ativo" : "Inativo"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              toggleUserStatus(user.id, !!user.is_subscribed)
                            }
                          >
                            {user.is_subscribed ? (
                              <UserX className="h-4 w-4 mr-1" />
                            ) : (
                              <UserCheck className="h-4 w-4 mr-1" />
                            )}
                            {user.is_subscribed ? "Desativar" : "Ativar"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-4">
                        Nenhum usuário encontrado
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
