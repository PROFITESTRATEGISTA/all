import { Container } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function ProprietaryDeskSection() {
  const desks = [
    {
      name: "Mesa 5 Contratos",
      price: "R$349,00",
      description:
        "Ideal para traders iniciantes que buscam operar com risco controlado.",
      maxLoss: "R$1400,00",
      comboPrice: "a partir de R$1550,00",
      automationDiscount: "15% OFF",
      color: "bg-blue-500",
      popular: false,
    },
    {
      name: "Mesa 20 Contratos",
      price: "R$1099,00",
      description:
        "Perfeito para traders intermediários que buscam escalar suas operações.",
      maxLoss: "R$3800,00",
      comboPrice: "a partir de R$2300,00",
      automationDiscount: "15% OFF",
      color: "bg-green-500",
      popular: true,
    },
    {
      name: "Mesa 35 Contratos",
      price: "R$1599,00",
      description:
        "Para traders experientes que buscam maior volume operacional.",
      maxLoss: "R$5500,00",
      comboPrice: "a partir de R$2800,00",
      automationDiscount: "15% OFF",
      color: "bg-purple-500",
      popular: false,
    },
    {
      name: "Mesa 50 Contratos",
      price: "R$2699,00",
      description:
        "Nossa solução premium para traders profissionais de alto volume.",
      maxLoss: "R$8000,00",
      comboPrice: "a partir de R$3900,00",
      automationDiscount: "15% OFF",
      color: "bg-amber-500",
      popular: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Risco Reduzido com Mesa Proprietária
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Opere com capital de terceiros e risco controlado através de nossas
            mesas proprietárias. Ideal para traders que buscam escalar suas
            operações sem aumentar seu capital próprio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {desks.map((desk, index) => (
            <Card
              key={index}
              className={`border ${desk.popular ? "border-primary shadow-lg relative" : "border-gray-200"} hover:shadow-xl transition-shadow duration-300`}
            >
              {desk.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}
              <div className={`h-2 ${desk.color}`}></div>
              <CardHeader className={`pb-0 ${desk.popular ? "pt-8" : "pt-6"}`}>
                <CardTitle className="text-xl">{desk.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{desk.price}</span>
                </div>
                <p className="text-gray-600 text-sm mt-3">{desk.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Loss Máximo:{" "}
                      <span className="font-semibold">{desk.maxLoss}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Combo Pack Semestral + Mesa:{" "}
                      <span className="font-semibold">{desk.comboPrice}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Módulo de Automação com{" "}
                      <span className="font-semibold text-green-600">
                        {desk.automationDiscount}
                      </span>
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className={`w-full ${desk.popular ? "" : "bg-gray-800 hover:bg-gray-700"}`}
                >
                  <Link to="/proprietary-desk">Saiba Mais</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-600 mb-4">
            Precisa de uma mesa personalizada para suas necessidades
            específicas?
          </p>
          <Button asChild variant="outline">
            <Link to="/contact">Fale com Nossa Equipe</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
