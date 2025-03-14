import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TestUserSwitcher() {
  const [email, setEmail] = useState(
    localStorage.getItem("testUserEmail") || "user@example.com",
  );
  const [pack, setPack] = useState(
    localStorage.getItem("testUserPack") || "Pack PRO Quant",
  );

  const handleSave = () => {
    localStorage.setItem("testUserEmail", email);
    localStorage.setItem("testUserPack", pack);

    // Force reload to apply changes
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  // Only show in development mode
  if (!import.meta.env.DEV) {
    return null;
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Teste de Usuários (DEV)</CardTitle>
        <CardDescription>
          Configure usuários de teste para simular diferentes planos
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email do Usuário</Label>
          <Input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
          <p className="text-xs text-muted-foreground">
            Use pedropardal04@gmail.com para acesso de administrador
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pack">Plano</Label>
          <Select value={pack} onValueChange={setPack}>
            <SelectTrigger id="pack">
              <SelectValue placeholder="Selecione um plano" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pack PRO Quant">Pack PRO Quant</SelectItem>
              <SelectItem value="Pack Starter">
                Pack Starter (inclui Pack Trader)
              </SelectItem>
              <SelectItem value="Pack Global">Pack Global</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSave} className="w-full">
          Aplicar Configurações
        </Button>
      </CardFooter>
    </Card>
  );
}
