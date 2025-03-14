import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Check, AlertCircle } from "lucide-react";

export default function SubscriptionManager() {
  const subscription = {
    plan: "Premium",
    status: "Ativo",
    nextBilling: "28/06/2023",
    price: "R$ 247,00",
    daysRemaining: 28,
    features: [
      "Acesso a 3 robôs de trading à sua escolha",
      "Comunidade exclusiva com traders profissionais",
      "Suporte prioritário por email e chat",
      "Atualizações semanais dos algoritmos",
      "Webinars mensais com especialistas",
      "Análises de mercado semanais",
      "Configurações personalizadas básicas",
      "Acesso à biblioteca de conteúdo exclusivo",
    ],
    paymentMethod: "Cartão de crédito terminando em 4242",
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gerenciar Assinatura</h2>
        <Badge
          variant="outline"
          className="text-green-600 bg-green-50 border-green-200"
        >
          {subscription.status}
        </Badge>
      </div>

      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>Plano {subscription.plan}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Próxima cobrança</p>
              <p className="font-medium">{subscription.nextBilling}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Valor</p>
              <p className="font-medium">{subscription.price}/mês</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Dias restantes</span>
              <span>{subscription.daysRemaining} dias</span>
            </div>
            <Progress value={(subscription.daysRemaining / 30) * 100} />
          </div>

          <div>
            <p className="font-medium mb-2">Método de pagamento</p>
            <p className="text-sm text-gray-600">
              {subscription.paymentMethod}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <Button variant="outline">Alterar Plano</Button>
          <Button variant="destructive">Cancelar Assinatura</Button>
        </CardFooter>
      </Card>

      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>Recursos Inclusos</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {subscription.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border shadow-sm bg-amber-50 border-amber-200">
        <CardContent className="p-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-800 mb-1">Importante</h4>
              <p className="text-amber-700 text-sm">
                Ao cancelar sua assinatura, você continuará tendo acesso aos
                recursos até o final do período atual. Após esse período, seu
                acesso será limitado até que você renove sua assinatura.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
