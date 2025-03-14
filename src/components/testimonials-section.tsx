import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Investidor Autônomo - São Paulo",
      content:
        "Os robôs de trading da Profit Estrategista transformaram completamente minha forma de investir. Após 6 meses utilizando o Profit Master Pro, minha rentabilidade aumentou em mais de 200% e agora tenho resultados consistentes sem precisar ficar o dia todo na frente do computador.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos",
      rating: 5,
    },
    {
      name: "Mariana Costa",
      role: "Trader Profissional - Rio de Janeiro",
      content:
        "A comunidade exclusiva é um diferencial incrível. Estou há mais de 1 ano na plataforma e aprendo diariamente com outros traders experientes. As estratégias compartilhadas e os webinars semanais têm me ajudado a melhorar significativamente meus próprios resultados.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mariana",
      rating: 5,
    },
    {
      name: "Roberto Almeida",
      role: "Empresário e Investidor - Belo Horizonte",
      content:
        "Comecei com o plano básico e rapidamente fiz upgrade para o premium. O retorno sobre o investimento é extraordinário - em apenas 3 meses recuperei o valor anual da assinatura. O suporte técnico está sempre disponível para ajudar e os algoritmos são constantemente atualizados.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=roberto",
      rating: 5,
    },
    {
      name: "Juliana Mendes",
      role: "Analista Financeira - Brasília",
      content:
        "Como profissional da área financeira, sempre fui cética em relação a robôs de trading, mas a Profit Estrategista mudou minha visão. A transparência nos resultados e a qualidade do material educativo são impressionantes. Recomendo fortemente para quem quer resultados sérios.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=juliana",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            O que nossos clientes estão dizendo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja os depoimentos reais de traders que já estão utilizando nossas
            soluções e obtendo resultados extraordinários em suas operações
            diárias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
