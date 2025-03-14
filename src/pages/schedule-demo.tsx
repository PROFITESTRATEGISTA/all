import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import FloatingActionButtons from "@/components/floating-action-buttons";

export default function ScheduleDemo() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Agende uma Demonstração
            </h1>
            <p className="text-xl text-blue-100">
              Conheça nossas soluções de trading automatizado com um
              especialista
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Agende sua Demonstração
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input id="name" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="(11) 99999-9999" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">Interesse principal</Label>
                      <Select>
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="robots">
                            Robôs de Trading
                          </SelectItem>
                          <SelectItem value="packs">
                            Packs de Estratégias
                          </SelectItem>
                          <SelectItem value="desk">
                            Mesa Proprietária
                          </SelectItem>
                          <SelectItem value="copy">Copy Invest</SelectItem>
                          <SelectItem value="community">Comunidade</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Data preferencial</Label>
                      <div className="flex">
                        <div className="relative flex-1">
                          <Input id="date" type="date" className="pl-10" />
                          <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Horário preferencial</Label>
                      <div className="flex">
                        <div className="relative flex-1">
                          <Input id="time" type="time" className="pl-10" />
                          <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem (opcional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos um pouco sobre suas expectativas ou dúvidas específicas"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Agendar Demonstração
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border shadow-md bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Por que agendar uma demo?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <p>
                      Conheça todas as funcionalidades dos nossos robôs de
                      trading
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <p>Tire suas dúvidas diretamente com um especialista</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <p>
                      Entenda como nossas soluções podem se adaptar às suas
                      necessidades
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <p>Veja casos reais de sucesso e resultados comprovados</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <p>
                      Receba uma proposta personalizada com condições especiais
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border shadow-md mt-6">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">
                    Precisa de ajuda imediata?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Entre em contato com nossa equipe de suporte:
                  </p>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://profitestrategista.rds.land",
                        "_blank",
                      )
                    }
                    className="w-full bg-green-500 hover:bg-green-600 mb-3 flex items-center justify-center gap-2"
                  >
                    <img
                      src="/whatsapp-icon-fixed.png"
                      alt="WhatsApp"
                      className="h-5 w-5 object-contain"
                    />
                    Falar no WhatsApp
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    Resposta em até 5 minutos durante horário comercial
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
