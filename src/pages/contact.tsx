import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Fale Conosco
            </h1>
            <p className="text-xl text-blue-100">
              Entre em contato com nossa equipe para tirar suas dúvidas ou
              solicitar mais informações
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    Envie uma mensagem
                  </h2>
                  <form className="space-y-6">
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
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input id="subject" placeholder="Assunto da mensagem" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        placeholder="Digite sua mensagem aqui"
                        rows={6}
                      />
                    </div>
                    <Button type="submit" className="w-full md:w-auto">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    Informações de Contato
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-gray-600">
                          contato@profitestrategista.com.br
                        </p>
                        <p className="text-gray-600">
                          suporte@profitestrategista.com.br
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">Telefone</h3>
                        <p className="text-gray-600">+55 11 9999-9999</p>
                        <p className="text-gray-600">+55 11 8888-8888</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">Endereço</h3>
                        <p className="text-gray-600">
                          Av. Paulista, 1000 - Bela Vista
                          <br />
                          São Paulo - SP, 01310-100
                          <br />
                          Brasil
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6">
                <Card className="border shadow-md bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Horário de Atendimento
                    </h3>
                    <p className="mb-4">
                      Nossa equipe está disponível para atendê-lo nos seguintes
                      horários:
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Segunda a Sexta:</span>
                        <span>9h às 18h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado:</span>
                        <span>9h às 13h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo:</span>
                        <span>Fechado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
