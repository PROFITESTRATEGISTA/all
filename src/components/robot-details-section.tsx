import { Container } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp } from "lucide-react";

export default function RobotDetailsSection() {
  const packCategories = [
    {
      name: "Pack Starter",
      robots: [
        {
          name: "Trend 3",
          store: "NeloStore",
          regularPrice: "R$249",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Tendencia", value: "" },
            { name: "Automático", value: "" },
            { name: "Ativos", value: "WIN" },
          ],
        },
        {
          name: "Trend 2",
          store: "NeloStore",
          regularPrice: "R$249",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Tendencia", value: "" },
            { name: "Automático", value: "" },
            { name: "Ativos", value: "WIN" },
          ],
        },
        {
          name: "Take 40",
          store: "NeloStore",
          regularPrice: "R$249",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Reversão", value: "" },
            { name: "Automático", value: "" },
            { name: "Ativos", value: "WIN" },
          ],
        },
        {
          name: "V Rev",
          store: "NeloStore",
          regularPrice: "R$249",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Reversão", value: "" },
            { name: "Automático", value: "" },
            { name: "Ativos", value: "WIN" },
          ],
        },
        {
          name: "Location 1",
          store: "NeloStore",
          regularPrice: "R$249",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Reversão", value: "" },
            { name: "Automático", value: "" },
            { name: "Ativos", value: "WIN" },
          ],
        },
        {
          name: "Take GO",
          store: "NeloStore",
          regularPrice: "R$249",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Scalp", value: "" },
            { name: "Automático", value: "" },
            { name: "Ativos", value: "WIN" },
          ],
        },
        {
          name: "T20 BITFUT",
          store: "NeloStore",
          regularPrice: "R$99,90",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Reversão", value: "" },
            { name: "Automático", value: "" },
            { name: "Ativos", value: "BIT" },
          ],
        },
        {
          name: "Flag 14",
          store: "NeloStore",
          regularPrice: "R$99,90",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Tendencia", value: "" },
            { name: "Automático", value: "" },
            { name: "Ativos", value: "WIN" },
          ],
        },
        {
          name: "Esto R",
          store: "NeloStore",
          regularPrice: "R$99,90",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Reversão", value: "" },
            { name: "Automático", value: "" },
            { name: "Ativos", value: "WIN" },
          ],
        },
        {
          name: "Esto T",
          store: "NeloStore",
          regularPrice: "R$99,90",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Scalp", value: "" },
            { name: "Automático", value: "" },
            { name: "Ativos", value: "WIN" },
          ],
        },
        {
          name: "Take 33",
          store: "NeloStore",
          regularPrice: "R$99,90",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Scalp", value: "" },
            { name: "Automático", value: "" },
            { name: "Ativos", value: "WIN" },
          ],
        },
        {
          name: "CB BITFUT",
          store: "NeloStore",
          regularPrice: "R$99,90",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Reversão", value: "" },
            { name: "Automático", value: "" },
            { name: "Ativos", value: "BIT" },
          ],
        },
        {
          name: "T200 BITFUT",
          store: "NeloStore",
          regularPrice: "R$99,90",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Reversão", value: "" },
            { name: "Automático", value: "" },
            { name: "Ativos", value: "BIT" },
          ],
        },
        {
          name: "CB WIN",
          store: "NeloStore",
          regularPrice: "R$99,90",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Reversão", value: "" },
            { name: "Automático", value: "" },
            { name: "Ativos", value: "BIT" },
          ],
        },
      ],
    },
    {
      name: "Pack Trader",
      robots: [
        {
          name: "Pivot Hunter",
          store: "NeloStore",
          regularPrice: "R$299",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Misto", value: "" },
            { name: "Automático/Hibrido", value: "" },
            { name: "Ativos", value: "Multi-Ativo" },
          ],
        },
        {
          name: "Trap Hunter",
          store: "NeloStore",
          regularPrice: "R$299",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Misto", value: "" },
            { name: "Automático/Hibrido", value: "" },
            { name: "Ativos", value: "Multi-Ativo" },
          ],
        },
        {
          name: "Elephant Hunter",
          store: "NeloStore",
          regularPrice: "R$299",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Misto", value: "" },
            { name: "Automático/Hibrido", value: "" },
            { name: "Ativos", value: "Multi-Ativo" },
          ],
        },
        {
          name: "Esto Hunter",
          store: "NeloStore",
          regularPrice: "R$299",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Misto", value: "" },
            { name: "Automático/Hibrido", value: "" },
            { name: "Ativos", value: "Multi-Ativo" },
          ],
        },
        {
          name: "Setup 9.1/9.2",
          store: "NeloStore",
          regularPrice: "R$299",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Misto", value: "" },
            { name: "Automático/Hibrido", value: "" },
            { name: "Ativos", value: "Multi-Ativo" },
          ],
        },
        {
          name: "Robô GR Starter",
          store: "NeloStore",
          regularPrice: "R$199",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Misto", value: "" },
            { name: "Manual/Hibrido", value: "" },
            { name: "Ativos", value: "Multi-Ativo" },
          ],
        },
      ],
    },
    {
      name: "Pack Global",
      robots: [
        {
          name: "Robô GR Global",
          store: "NeloStore",
          regularPrice: "R$349,90",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Misto", value: "" },
            { name: "Manual/Híbrido", value: "" },
            { name: "Ativos", value: "Multi-Ativo" },
          ],
        },
        {
          name: "Criptomoedas",
          store: "NeloStore",
          regularPrice: "R$399,90",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Misto", value: "" },
            { name: "Automático/Híbrido", value: "" },
            { name: "Ativos", value: "Multi-Ativo" },
          ],
        },
        {
          name: "Ações e Futuros",
          store: "NeloStore",
          regularPrice: "R$399,90",
          clubPrice: "Grátis",
          characteristics: [
            { name: "Misto", value: "" },
            { name: "Automático/Híbrido", value: "" },
            { name: "Ativos", value: "Multi-Ativo" },
          ],
        },
      ],
    },
    {
      name: "Opcionais Disponíveis",
      robots: [
        {
          name: "GR Pro 25 Contratos",
          store: "NeloStore",
          regularPrice: "R$499,90",
          clubPrice: "R$199,90",
          characteristics: [
            { name: "Multi-Ativo", value: "" },
            { name: "Análise técnica avançada", value: "" },
            { name: "Filtros de volatilidade", value: "" },
          ],
          highlight: true,
          highlightText: "Contratado",
          highlightColor: "border-green-500",
        },
        {
          name: "Copy Invest",
          store: "NeloStore",
          regularPrice: "R$350,00",
          clubPrice: "R$200,00",
          characteristics: [
            { name: "Copy Trading", value: "" },
            { name: "Operações automatizadas", value: "" },
            { name: "Relatórios detalhados", value: "" },
          ],
        },
        {
          name: "VPS Trader",
          store: "NeloStore",
          regularPrice: "R$145,00/mês",
          clubPrice: "R$110,00/mês",
          characteristics: [
            { name: "Infraestrutura", value: "" },
            { name: "Servidor dedicado 24/7", value: "" },
            { name: "Baixa latência", value: "" },
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Estratégias e Robôs Disponíveis
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça todos os robôs e estratégias disponíveis em nossos packs.
            Cada robô foi desenvolvido e otimizado para diferentes mercados e
            estilos de trading.
          </p>
        </div>

        <Tabs defaultValue="Pack Starter" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {packCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {packCategories.map((category) => (
            <TabsContent
              key={category.name}
              value={category.name}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.robots.map((robot, index) => (
                  <Card
                    key={index}
                    className={`border overflow-hidden hover:shadow-lg transition-shadow duration-300 ${robot.highlight ? robot.highlightColor : ""}`}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-2">
                          {(category.name === "Pack Starter" ||
                            category.name === "Pack Trader") && (
                            <div className="w-8 h-8 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                              <TrendingUp className="h-5 w-5 text-primary" />
                            </div>
                          )}
                          <div>
                            <h3 className="text-xl font-bold">{robot.name}</h3>
                            <p className="text-sm text-gray-500">
                              {robot.store}
                            </p>
                            {robot.highlight && (
                              <Badge className="mt-1 bg-amber-600 text-white hover:bg-amber-700">
                                {robot.highlightText}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-700 border-blue-200"
                        >
                          {robot.characteristics[0].name}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-500">Sem o Clube</p>
                            <p className="text-lg font-semibold line-through text-gray-500">
                              {robot.regularPrice}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Com o Clube</p>
                            <p className="text-lg font-bold text-green-600">
                              {robot.clubPrice}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Características</p>
                          <ul className="space-y-1">
                            {robot.characteristics.map((char, idx) => (
                              <li
                                key={idx}
                                className="flex justify-between text-sm"
                              >
                                <span className="text-gray-700">
                                  {char.name}
                                </span>
                                <span className="font-medium">
                                  {char.value}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contratar Pack</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
}
