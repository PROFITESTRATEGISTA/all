import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/auth-context";
import { handlePayment } from "@/lib/payment-handler";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function PaymentSuccess() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const processPayment = async () => {
      if (!user) {
        setError("Você precisa estar logado para processar o pagamento.");
        setLoading(false);
        return;
      }

      try {
        // Get payment_link_id from URL query params
        const params = new URLSearchParams(location.search);
        const paymentLinkId = params.get("payment_link_id");
        const sessionId = params.get("session_id");

        if (!paymentLinkId && !sessionId) {
          setError("Informações de pagamento não encontradas.");
          setLoading(false);
          return;
        }

        // Use the payment link ID from the URL or from the session metadata
        const linkId = paymentLinkId || "";

        // Update user membership based on payment
        const result = await handlePayment(user.email, linkId);

        if (result.status === "success") {
          setMessage(result.message);
        } else {
          setError(result.message);
        }
      } catch (err) {
        console.error("Error processing payment:", err);
        setError(
          "Ocorreu um erro ao processar seu pagamento. Por favor, entre em contato com o suporte.",
        );
      } finally {
        setLoading(false);
      }
    };

    processPayment();
  }, [user, location.search]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Container className="py-16">
        <div className="max-w-md mx-auto">
          <Card className="border shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-center">
                {loading
                  ? "Processando Pagamento"
                  : error
                    ? "Erro no Pagamento"
                    : "Pagamento Confirmado"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                  <p>Processando seu pagamento, por favor aguarde...</p>
                </div>
              ) : error ? (
                <>
                  <Alert variant="destructive" className="mb-6">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                  <Button
                    onClick={() => navigate("/members")}
                    className="w-full"
                  >
                    Voltar para Área de Membros
                  </Button>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center justify-center py-4">
                    <div className="bg-green-100 p-4 rounded-full mb-4">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <p className="text-lg font-medium mb-2">
                      Seu pagamento foi processado com sucesso!
                    </p>
                    {message && <p className="text-gray-600">{message}</p>}
                  </div>
                  <div className="space-y-4">
                    <Button
                      onClick={() => navigate("/members")}
                      className="w-full"
                    >
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
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
