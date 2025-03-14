import { useNavigate } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Container className="py-16">
        <div className="max-w-md mx-auto">
          <Card className="border shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-center">
                Pagamento Confirmado
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <div className="flex flex-col items-center justify-center py-4">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <p className="text-lg font-medium mb-2">
                  Seu pagamento foi processado com sucesso!
                </p>
                <p className="text-gray-600">
                  Nossa equipe entrará em contato em breve para ativar seu
                  acesso.
                </p>
              </div>
              <div className="space-y-4">
                <Button onClick={() => navigate("/members")} className="w-full">
                  Acessar Área de Membros
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/members/store")}
                  className="w-full"
                >
                  Voltar para Loja
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
