import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  Settings,
  User,
  LogOut,
  MessageCircle,
  Calendar,
  Bot,
  Users,
  CreditCard,
  UserCircle,
  BookOpen,
  HelpCircle,
  Mail,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

export default function DashboardHeader() {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Get user data from localStorage for immediate updates in development mode
  const firstName = import.meta.env.DEV
    ? localStorage.getItem("userFirstName") ||
      user?.user_metadata?.first_name ||
      ""
    : user?.user_metadata?.first_name || "";

  const lastName = import.meta.env.DEV
    ? localStorage.getItem("userLastName") ||
      user?.user_metadata?.last_name ||
      ""
    : user?.user_metadata?.last_name || "";

  const avatarUrl = import.meta.env.DEV
    ? localStorage.getItem("userAvatarUrl") ||
      user?.user_metadata?.avatar_url ||
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`
    : user?.user_metadata?.avatar_url ||
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`;

  const initials =
    firstName && lastName ? `${firstName[0]}${lastName[0]}` : "U";

  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank");
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

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="Profit Estrategista" className="h-8" />
            </Link>
            <nav className="hidden md:flex ml-10 space-x-8">
              <Link
                to="/members/adaptive-robots"
                className="text-sm font-medium text-gray-700 hover:text-primary flex items-center gap-1"
              >
                <Bot className="h-4 w-4" />
                Meus Robôs
              </Link>
              <Link
                to="/members/community"
                className="text-sm font-medium text-gray-700 hover:text-primary flex items-center gap-1"
              >
                <Users className="h-4 w-4" />
                Comunidade
              </Link>
              <Link
                to="/members/tutorials"
                className="text-sm font-medium text-gray-700 hover:text-primary flex items-center gap-1"
              >
                <BookOpen className="h-4 w-4" />
                Tutoriais
              </Link>
              <Link
                to="/members/store"
                className="text-sm font-medium text-gray-700 hover:text-primary flex items-center gap-1"
              >
                <CreditCard className="h-4 w-4" />
                Loja de Opcionais
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() =>
                window.open(
                  "https://chat.whatsapp.com/KfIRw3pgeAG4strXZtyEEm",
                  "_blank",
                )
              }
              variant="outline"
              size="sm"
              className="hidden md:inline-flex gap-1"
            >
              <img
                src="/whatsapp-icon-fixed.png"
                alt="WhatsApp"
                className="h-5 w-5 object-contain"
              />
              Comunidade WhatsApp
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex gap-1"
              onClick={() =>
                window.open(
                  "https://profitestrategista.rds.land/demo",
                  "_blank",
                )
              }
            >
              <Calendar className="h-4 w-4" />
              Agendar Consultoria
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={avatarUrl} alt={firstName || "User"} />
                    <AvatarFallback className="bg-primary/10">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  {firstName ? `${firstName} ${lastName}` : user?.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/members/profile">
                    <UserCircle className="mr-2 h-4 w-4" />
                    <span>Meu Perfil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/members/store">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Loja de Opcionais</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    window.open(
                      "https://chat.whatsapp.com/KfIRw3pgeAG4strXZtyEEm",
                      "_blank",
                    )
                  }
                >
                  <img
                    src="/whatsapp-icon-fixed.png"
                    alt="WhatsApp"
                    className="mr-2 h-5 w-5 object-contain"
                  />
                  <span>Comunidade WhatsApp</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    window.open(
                      "https://chatgpt.com/g/g-678c078c21208191a0b18fb1a70e22f1-profit-estrategista-trading-solutions",
                      "_blank",
                    )
                  }
                >
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Assistente de Configuração</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    window.open(
                      "mailto:suporte@profitestrategista.com.br",
                      "_blank",
                    )
                  }
                >
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email de Suporte</span>
                </DropdownMenuItem>
                {(user?.email === "admin@example.com" ||
                  user?.email === "pedropardal04@gmail.com") && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/admin/users">
                        <Users className="mr-2 h-4 w-4" />
                        <span>Gerenciar Usuários</span>
                      </Link>
                    </DropdownMenuItem>
                    {import.meta.env.DEV && (
                      <DropdownMenuItem
                        onClick={() => {
                          const newPack = window.prompt(
                            "Escolha um plano: Pack Starter, Pack Global, Pack PRO Quant",
                            localStorage.getItem("testUserPack") ||
                              "Pack PRO Quant",
                          );
                          if (
                            newPack &&
                            [
                              "Pack Starter", // Now includes Pack Trader robots
                              "Pack Global",
                              "Pack PRO Quant",
                            ].includes(newPack)
                          ) {
                            localStorage.setItem("testUserPack", newPack);
                            // Force reload to apply changes immediately
                            setTimeout(() => {
                              window.location.reload();
                            }, 100);
                          }
                        }}
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Alterar Plano (DEV)</span>
                      </DropdownMenuItem>
                    )}
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
    </header>
  );
}
