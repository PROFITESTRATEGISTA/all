import { Container } from "@/components/ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, MessageCircle } from "lucide-react";

export default function FAQSection() {
  const faqCategories = [
    {
      title: "Sobre Robôs Trading",
      faqs: [
        {
          question: "O que são robôs traders?",
          answer:
            "Robôs traders são softwares que automatizam operações no mercado financeiro. Eles utilizam setups pré-configurados para analisar o mercado e executar ordens de compra e venda de forma precisa e sem intervenção humana.",
        },
        {
          question: "Mercados compatíveis:",
          answer:
            "Índices futuros (WIN, IND), Dólar futuro (WDO), Criptomoedas, Forex, Ações e commodities",
        },
        {
          question: "O robô garante lucro?",
          answer:
            "Não. Robôs traders seguem estratégias programadas, mas os resultados dependem de fatores de mercado, como volatilidade e liquidez. Eles ajudam a minimizar erros emocionais e a operar com disciplina.",
        },
      ],
    },
    {
      title: "Planos e Preços",
      faqs: [
        {
          question: "Clube de Robôs",
          answer:
            "Benefícios exclusivos: Descontos de até 80% em estratégias, Acesso a setups exclusivos, Suporte prioritário",
        },
        {
          question: "Planos:",
          answer:
            "Starter: R$ 200,00/mês, Trader: R$ 250,00/mês, Global: R$ 250,00/mês, Pro: R$ 700,00/mês",
        },
        {
          question: "Preços dos Robôs",
          answer:
            "Robôs simples: A partir de - R$ 99,90, Robôs avançados: A partir de - R$ 199,90",
        },
      ],
    },
    {
      title: "Configuração e Suporte",
      faqs: [
        {
          question: "Como configurar?",
          answer:
            "Para configurar o Profit: Acesse www.nelogica.com.br, Escolha um plano e realize o cadastro, Faça o download do software e instale, Consulte nosso guia para configurar o módulo de automação",
        },
        {
          question: "Precisa de ajuda?",
          answer:
            "Nossa Central de Ajuda oferece guias e tutoriais detalhados para resolver dúvidas e configurar estratégias.",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            FAQ - Dúvidas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossos robôs
            de trading e serviços
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {faqCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`item-${index}-${faqIndex}`}
                    >
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link to="/faq">
              <HelpCircle className="h-4 w-4" />
              Central de Ajuda
            </Link>
          </Button>
          <Button asChild className="flex items-center gap-2">
            <Link to="/contact">
              <MessageCircle className="h-4 w-4" />
              Fale com o Desenvolvedor
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
