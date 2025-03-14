import AdminLayout from "@/components/admin/admin-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MessageCircle, InfoIcon, Globe, CreditCard } from "lucide-react";

export default function AdminSettings() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showIntegrationInfo, setShowIntegrationInfo] = useState(true);

  const [generalSettings, setGeneralSettings] = useState({
    siteName: "Profit Estrategista",
    siteDescription: "Marketplace de robôs de trading com área de membros",
    supportEmail: "suporte@profitestrategista.com.br",
    contactPhone: "+55 11 9999-9999",
  });

  const [domainSettings, setDomainSettings] = useState({
    primaryDomain: "profitestrategista.com.br",
    customDomain: "",
    useSsl: true,
    enableCdn: true,
    enableWww: true,
    redirects: [
      { source: "/old-page", destination: "/new-page", permanent: true },
      { source: "/blog/*", destination: "/articles/:splat", permanent: false },
    ],
  });

  const [stripeSettings, setStripeSettings] = useState({
    liveMode: false,
    publishableKey:
      "pk_test_51NxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    secretKey:
      "sk_test_51NxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    webhookSecret:
      "whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  });

  const [emailSettings, setEmailSettings] = useState({
    provider: "smtp",
    host: "smtp.example.com",
    port: "587",
    username: "notifications@profitestrategista.com.br",
    password: "**********",
    fromEmail: "notifications@profitestrategista.com.br",
    fromName: "Profit Estrategista",
  });

  const handleGeneralSettingsSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Configurações salvas",
        description: "As configurações gerais foram atualizadas com sucesso.",
      });
      setLoading(false);
    }, 1000);
  };

  const handleStripeSettingsSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Configurações salvas",
        description:
          "As configurações do Stripe foram atualizadas com sucesso.",
      });
      setLoading(false);
    }, 1000);
  };

  const handleEmailSettingsSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Configurações salvas",
        description: "As configurações de email foram atualizadas com sucesso.",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Configurações da Plataforma</h1>

        <Tabs defaultValue="general" className="w-full">
          {showIntegrationInfo && (
            <Alert className="mb-6 bg-blue-50 border-blue-200">
              <InfoIcon className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-700">
                <div className="font-medium mb-2">
                  Integração Stripe com Contas de Usuário
                </div>
                <p className="mb-2">
                  A integração do Stripe com as contas de usuário segue esta
                  lógica:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Verifica se o usuário já existe e qual pacote possui</li>
                  <li>
                    Se existir: atualiza a assinatura e adiciona produtos
                    opcionais
                  </li>
                  <li>Se não existir: cria nova conta com o plano adquirido</li>
                </ul>
                <p className="mb-2">Gerenciamento de pacotes de assinatura:</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>
                    Pack PRO: acesso a todos os recursos exceto produtos
                    opcionais
                  </li>
                  <li>
                    Pack Starter: acesso a todos os bots exceto Copy Invest e
                    Pack Global
                  </li>
                  <li>Pack Global: acesso a 3 bots específicos</li>
                </ul>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-2"
                  onClick={() => setShowIntegrationInfo(false)}
                >
                  Fechar
                </Button>
              </AlertDescription>
            </Alert>
          )}
          <TabsList className="mb-6">
            <TabsTrigger value="general">Geral</TabsTrigger>
            <TabsTrigger value="stripe">Stripe</TabsTrigger>
            <TabsTrigger value="domain">Domínios</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações Gerais</CardTitle>
                <CardDescription>
                  Configure as informações básicas da plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  id="generalSettingsForm"
                  onSubmit={handleGeneralSettingsSave}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="siteName">Nome do Site</Label>
                      <Input
                        id="siteName"
                        value={generalSettings.siteName}
                        onChange={(e) =>
                          setGeneralSettings({
                            ...generalSettings,
                            siteName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="supportEmail">Email de Suporte</Label>
                      <Input
                        id="supportEmail"
                        type="email"
                        value={generalSettings.supportEmail}
                        onChange={(e) =>
                          setGeneralSettings({
                            ...generalSettings,
                            supportEmail: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Telefone de Contato</Label>
                      <Input
                        id="contactPhone"
                        value={generalSettings.contactPhone}
                        onChange={(e) =>
                          setGeneralSettings({
                            ...generalSettings,
                            contactPhone: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="siteDescription">Descrição do Site</Label>
                    <Textarea
                      id="siteDescription"
                      value={generalSettings.siteDescription}
                      onChange={(e) =>
                        setGeneralSettings({
                          ...generalSettings,
                          siteDescription: e.target.value,
                        })
                      }
                      rows={3}
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  form="generalSettingsForm"
                  disabled={loading}
                >
                  {loading ? "Salvando..." : "Salvar Configurações"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="stripe" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Configurações do Stripe
                </CardTitle>
                <CardDescription>
                  Configure as chaves de API e webhooks do Stripe para
                  processamento de pagamentos e integração com contas de usuário
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  id="stripeSettingsForm"
                  onSubmit={handleStripeSettingsSave}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <Switch
                      id="liveMode"
                      checked={stripeSettings.liveMode}
                      onCheckedChange={(checked) =>
                        setStripeSettings({
                          ...stripeSettings,
                          liveMode: checked,
                        })
                      }
                    />
                    <Label htmlFor="liveMode" className="font-medium">
                      {stripeSettings.liveMode ? "Modo Produção" : "Modo Teste"}
                    </Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="publishableKey">Chave Publicável</Label>
                    <Input
                      id="publishableKey"
                      value={stripeSettings.publishableKey}
                      onChange={(e) =>
                        setStripeSettings({
                          ...stripeSettings,
                          publishableKey: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="secretKey">Chave Secreta</Label>
                    <Input
                      id="secretKey"
                      type="password"
                      value={stripeSettings.secretKey}
                      onChange={(e) =>
                        setStripeSettings({
                          ...stripeSettings,
                          secretKey: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="webhookSecret">Segredo do Webhook</Label>
                    <Input
                      id="webhookSecret"
                      type="password"
                      value={stripeSettings.webhookSecret}
                      onChange={(e) =>
                        setStripeSettings({
                          ...stripeSettings,
                          webhookSecret: e.target.value,
                        })
                      }
                    />
                    <p className="text-xs text-gray-500">
                      O webhook é usado para capturar eventos de pagamento e
                      atribuir o plano correto a cada usuário com base no email
                      e link de pagamento.
                    </p>
                  </div>

                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-medium mb-2">
                      Links de Pagamento do Stripe
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Cada link de pagamento do Stripe corresponde a um pacote
                      de assinatura ou produto opcional:
                    </p>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Pack PRO Quant</span>
                        <code className="text-xs bg-gray-100 p-1 rounded">
                          https://buy.stripe.com/6oE3cY5pF5Fq5pKcN3
                        </code>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Pack Starter</span>
                        <code className="text-xs bg-gray-100 p-1 rounded">
                          https://buy.stripe.com/5kA6rG4pF3Fq5pK9AC
                        </code>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Pack Global</span>
                        <code className="text-xs bg-gray-100 p-1 rounded">
                          https://buy.stripe.com/cN24jT8rq4QR7Qs6oF
                        </code>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Robô GR PRO</span>
                        <code className="text-xs bg-gray-100 p-1 rounded">
                          https://buy.stripe.com/00g4jI4pF7Yp3G8wA
                        </code>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-medium mb-2">
                      Configurações Avançadas do Stripe
                    </h4>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="stripeAccountId">
                          ID da Conta Stripe
                        </Label>
                        <Input
                          id="stripeAccountId"
                          placeholder="acct_1234567890"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="stripeWebhookUrl">URL do Webhook</Label>
                        <Input
                          id="stripeWebhookUrl"
                          placeholder="https://seu-dominio.com/api/stripe-webhook"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="successUrl">URL de Sucesso</Label>
                          <Input
                            id="successUrl"
                            placeholder="/payment-success"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cancelUrl">URL de Cancelamento</Label>
                          <Input
                            id="cancelUrl"
                            placeholder="/payment-cancelled"
                          />
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch id="enableTax" />
                        <Label htmlFor="enableTax" className="font-medium">
                          Habilitar Cálculo de Impostos
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch id="enableCustomerPortal" />
                        <Label
                          htmlFor="enableCustomerPortal"
                          className="font-medium"
                        >
                          Habilitar Portal do Cliente
                        </Label>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  form="stripeSettingsForm"
                  disabled={loading}
                >
                  {loading ? "Salvando..." : "Salvar Configurações"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="domain" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Configurações de Domínio
                </CardTitle>
                <CardDescription>
                  Configure domínios, redirecionamentos e SSL para seu site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form id="domainSettingsForm" className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="primaryDomain">Domínio Principal</Label>
                      <Input
                        id="primaryDomain"
                        value={domainSettings.primaryDomain}
                        onChange={(e) =>
                          setDomainSettings({
                            ...domainSettings,
                            primaryDomain: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customDomain">
                        Domínio Personalizado
                      </Label>
                      <Input
                        id="customDomain"
                        placeholder="seu-dominio-personalizado.com.br"
                        value={domainSettings.customDomain}
                        onChange={(e) =>
                          setDomainSettings({
                            ...domainSettings,
                            customDomain: e.target.value,
                          })
                        }
                      />
                      <p className="text-xs text-gray-500">
                        Deixe em branco se não estiver usando um domínio
                        personalizado
                      </p>
                    </div>

                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="useSsl"
                          checked={domainSettings.useSsl}
                          onCheckedChange={(checked) =>
                            setDomainSettings({
                              ...domainSettings,
                              useSsl: checked,
                            })
                          }
                        />
                        <Label htmlFor="useSsl" className="font-medium">
                          Usar SSL (HTTPS)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch
                          id="enableCdn"
                          checked={domainSettings.enableCdn}
                          onCheckedChange={(checked) =>
                            setDomainSettings({
                              ...domainSettings,
                              enableCdn: checked,
                            })
                          }
                        />
                        <Label htmlFor="enableCdn" className="font-medium">
                          Habilitar CDN
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch
                          id="enableWww"
                          checked={domainSettings.enableWww}
                          onCheckedChange={(checked) =>
                            setDomainSettings({
                              ...domainSettings,
                              enableWww: checked,
                            })
                          }
                        />
                        <Label htmlFor="enableWww" className="font-medium">
                          Redirecionar para www
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">
                      Redirecionamentos
                    </h3>
                    <div className="space-y-4">
                      {domainSettings.redirects.map((redirect, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-md"
                        >
                          <div className="space-y-2">
                            <Label htmlFor={`source-${index}`}>Origem</Label>
                            <Input
                              id={`source-${index}`}
                              value={redirect.source}
                              onChange={(e) => {
                                const newRedirects = [
                                  ...domainSettings.redirects,
                                ];
                                newRedirects[index].source = e.target.value;
                                setDomainSettings({
                                  ...domainSettings,
                                  redirects: newRedirects,
                                });
                              }}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`destination-${index}`}>
                              Destino
                            </Label>
                            <Input
                              id={`destination-${index}`}
                              value={redirect.destination}
                              onChange={(e) => {
                                const newRedirects = [
                                  ...domainSettings.redirects,
                                ];
                                newRedirects[index].destination =
                                  e.target.value;
                                setDomainSettings({
                                  ...domainSettings,
                                  redirects: newRedirects,
                                });
                              }}
                            />
                          </div>
                          <div className="flex items-center space-x-2 mt-8">
                            <Switch
                              id={`permanent-${index}`}
                              checked={redirect.permanent}
                              onCheckedChange={(checked) => {
                                const newRedirects = [
                                  ...domainSettings.redirects,
                                ];
                                newRedirects[index].permanent = checked;
                                setDomainSettings({
                                  ...domainSettings,
                                  redirects: newRedirects,
                                });
                              }}
                            />
                            <Label
                              htmlFor={`permanent-${index}`}
                              className="font-medium"
                            >
                              Permanente (301)
                            </Label>
                            <Button
                              variant="outline"
                              size="sm"
                              className="ml-auto text-red-500 hover:text-red-700"
                              onClick={() => {
                                const newRedirects = [
                                  ...domainSettings.redirects,
                                ];
                                newRedirects.splice(index, 1);
                                setDomainSettings({
                                  ...domainSettings,
                                  redirects: newRedirects,
                                });
                              }}
                            >
                              Remover
                            </Button>
                          </div>
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        onClick={() => {
                          setDomainSettings({
                            ...domainSettings,
                            redirects: [
                              ...domainSettings.redirects,
                              { source: "", destination: "", permanent: false },
                            ],
                          });
                        }}
                      >
                        Adicionar Redirecionamento
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  form="domainSettingsForm"
                  disabled={loading}
                  onClick={(e) => {
                    e.preventDefault();
                    setLoading(true);
                    setTimeout(() => {
                      toast({
                        title: "Configurações salvas",
                        description:
                          "As configurações de domínio foram atualizadas com sucesso.",
                      });
                      setLoading(false);
                    }, 1000);
                  }}
                >
                  {loading ? "Salvando..." : "Salvar Configurações"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="email" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Email</CardTitle>
                <CardDescription>
                  Configure o serviço de email para envio de notificações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  id="emailSettingsForm"
                  onSubmit={handleEmailSettingsSave}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="emailProvider">Provedor de Email</Label>
                    <Select
                      value={emailSettings.provider}
                      onValueChange={(value) =>
                        setEmailSettings({
                          ...emailSettings,
                          provider: value,
                        })
                      }
                    >
                      <SelectTrigger id="emailProvider">
                        <SelectValue placeholder="Selecione um provedor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="smtp">SMTP</SelectItem>
                        <SelectItem value="sendgrid">SendGrid</SelectItem>
                        <SelectItem value="mailgun">Mailgun</SelectItem>
                        <SelectItem value="ses">Amazon SES</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emailHost">Servidor SMTP</Label>
                      <Input
                        id="emailHost"
                        value={emailSettings.host}
                        onChange={(e) =>
                          setEmailSettings({
                            ...emailSettings,
                            host: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emailPort">Porta</Label>
                      <Input
                        id="emailPort"
                        value={emailSettings.port}
                        onChange={(e) =>
                          setEmailSettings({
                            ...emailSettings,
                            port: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emailUsername">Usuário</Label>
                      <Input
                        id="emailUsername"
                        value={emailSettings.username}
                        onChange={(e) =>
                          setEmailSettings({
                            ...emailSettings,
                            username: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emailPassword">Senha</Label>
                      <Input
                        id="emailPassword"
                        type="password"
                        value={emailSettings.password}
                        onChange={(e) =>
                          setEmailSettings({
                            ...emailSettings,
                            password: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fromEmail">Email de Origem</Label>
                      <Input
                        id="fromEmail"
                        type="email"
                        value={emailSettings.fromEmail}
                        onChange={(e) =>
                          setEmailSettings({
                            ...emailSettings,
                            fromEmail: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fromName">Nome de Exibição</Label>
                      <Input
                        id="fromName"
                        value={emailSettings.fromName}
                        onChange={(e) =>
                          setEmailSettings({
                            ...emailSettings,
                            fromName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  form="emailSettingsForm"
                  disabled={loading}
                >
                  {loading ? "Salvando..." : "Salvar Configurações"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
