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
import { Link } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import { resetPassword } from "@/lib/auth";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Email é obrigatório");
      return;
    }

    setLoading(true);

    try {
      const { error } = await resetPassword(email);

      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
        toast({
          title: "Email enviado!",
          description:
            "Verifique sua caixa de entrada para redefinir sua senha.",
        });
      }
    } catch (err) {
      setError("Ocorreu um erro ao enviar o email. Tente novamente.");
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
                Esqueceu sua senha?
              </CardTitle>
              <CardDescription className="text-center">
                Digite seu email para receber um link de redefinição de senha
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
                {success && (
                  <Alert className="bg-green-50 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-700">
                      Email enviado com sucesso! Verifique sua caixa de entrada.
                    </AlertDescription>
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
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar link de redefinição"}
                </Button>
                <div className="text-center text-sm">
                  Lembrou sua senha?{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    Voltar para o login
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
