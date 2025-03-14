import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/ui/container";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signIn } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email e senha são obrigatórios");
      return;
    }

    setLoading(true);

    try {
      // For development, store the email in localStorage for testing different users
      if (import.meta.env.DEV) {
        localStorage.setItem("testUserEmail", email);

        // Set default pack based on email
        if (email === "pedropardal04@gmail.com") {
          localStorage.setItem("testUserPack", "Pack PRO Quant");
        } else if (email.includes("starter")) {
          localStorage.setItem("testUserPack", "Pack Starter");
        } else if (email.includes("global")) {
          localStorage.setItem("testUserPack", "Pack Global");
        } else {
          localStorage.setItem("testUserPack", "Pack PRO Quant");
        }
      }

      const { error } = await signIn(email, password);

      if (error) {
        setError("Email ou senha inválidos");
      } else {
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo à área de membros.",
        });
        navigate("/members");
      }
    } catch (err) {
      setError("Ocorreu um erro ao fazer login. Tente novamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Container className="py-16">
        <div className="max-w-md mx-auto">
          <Card className="border shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">
                Login
              </CardTitle>
              <CardDescription className="text-center">
                Entre na sua conta para acessar a área de membros
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Senha</Label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Entrando..." : "Entrar"}
                </Button>
                <div className="text-center text-sm">
                  Não tem uma conta?{" "}
                  <Link to="/signup" className="text-primary hover:underline">
                    Cadastre-se
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
