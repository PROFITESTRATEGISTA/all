import { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Users,
  Settings,
  Home,
  CreditCard,
  BarChart2,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Usuários", href: "/admin/users", icon: Users },
    { name: "Pagamentos", href: "/admin/payments", icon: CreditCard },
    { name: "Assinaturas", href: "/admin/subscriptions", icon: CreditCard },
    { name: "Estatísticas", href: "/admin/stats", icon: BarChart2 },
    { name: "Configurações", href: "/admin/settings", icon: Settings },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Logout realizado",
        description: "Você foi desconectado com sucesso.",
      });
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Erro",
        description: "Não foi possível fazer logout.",
        variant: "destructive",
      });
    }
  };

  const avatarUrl =
    user?.user_metadata?.avatar_url ||
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-primary text-white py-4">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.svg"
                  alt="Profit Estrategista"
                  className="h-8"
                />
              </Link>
              <span className="text-xl font-bold">Admin Panel</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">{user?.email}</span>
              <Avatar className="h-8 w-8">
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Button
                  key={item.name}
                  asChild
                  variant={active ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Link to={item.href}>
                    <Icon className="mr-2 h-5 w-5" />
                    {item.name}
                  </Link>
                </Button>
              );
            })}
            <div className="pt-4 mt-4 border-t space-y-2">
              <Button
                asChild
                variant="outline"
                className="w-full justify-start"
              >
                <Link to="/members">
                  <Home className="mr-2 h-5 w-5" />
                  Área de Membros
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={handleSignOut}
              >
                <LogOut className="mr-2 h-5 w-5" />
                Sair
              </Button>
            </div>
          </aside>

          <main className="flex-1">{children}</main>
        </div>
      </Container>
    </div>
  );
}
