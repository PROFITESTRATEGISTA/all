import { useMembership } from "@/hooks/use-membership";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function MembershipStatus() {
  const { membership, loading, error } = useMembership();

  if (loading) {
    return (
      <Card className="border shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-20" />
          </div>
          <Skeleton className="h-4 w-full mt-4" />
          <Skeleton className="h-4 w-3/4 mt-2" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border shadow-sm bg-red-50">
        <CardContent className="p-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-red-800">Erro</h3>
              <p className="text-sm text-red-600">{error}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!membership) {
    return (
      <Card className="border shadow-sm bg-amber-50">
        <CardContent className="p-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-amber-800">
                Sem Assinatura Ativa
              </h3>
              <p className="text-sm text-amber-600">
                Você ainda não possui uma assinatura ativa. Visite nossa loja
                para conhecer os planos disponíveis.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border shadow-sm bg-green-50">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <h3 className="font-medium text-green-800">
              {membership.pack
                ? `Plano ${membership.pack}`
                : "Produtos Opcionais"}
            </h3>
          </div>
          <Badge
            variant="outline"
            className={
              membership.active
                ? "bg-green-100 text-green-800 border-green-300"
                : "bg-red-100 text-red-800 border-red-300"
            }
          >
            {membership.active ? "Ativo" : "Inativo"}
          </Badge>
        </div>
        <p className="text-sm text-green-700">
          {membership.pack
            ? `Você tem acesso ao plano ${membership.pack}`
            : "Você não possui um plano ativo, apenas produtos opcionais."}
          {membership.optionals && membership.optionals.length > 0 && (
            <>
              {" "}
              e aos seguintes produtos opcionais:{" "}
              {membership.optionals.join(", ")}
            </>
          )}
        </p>
      </CardContent>
    </Card>
  );
}
