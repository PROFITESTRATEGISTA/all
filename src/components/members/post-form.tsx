import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image, BarChart2, Link2, Tag, Hash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PostForm() {
  return (
    <div>
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="h-10 w-10 border">
          <AvatarImage
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
            alt="Seu Avatar"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <Textarea
          placeholder="Compartilhe uma ideia, análise ou pergunta com a comunidade..."
          className="resize-none flex-1 border-gray-200 focus:ring-primary"
          rows={3}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Categoria
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="backtest">Backtest de Estratégias</SelectItem>
              <SelectItem value="technical">Análise Técnica</SelectItem>
              <SelectItem value="help">Ajuda e Suporte</SelectItem>
              <SelectItem value="discussion">Discussões Gerais</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Tags
          </label>
          <div className="relative">
            <Hash className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Adicione tags separadas por vírgula"
              className="w-full pl-9 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-md">
            <Image className="h-4 w-4 mr-2" />
            Imagem
          </Button>
          <Button variant="outline" size="sm" className="rounded-md">
            <BarChart2 className="h-4 w-4 mr-2" />
            Gráfico
          </Button>
          <Button variant="outline" size="sm" className="rounded-md">
            <Link2 className="h-4 w-4 mr-2" />
            Link
          </Button>
        </div>
        <Button size="sm" className="rounded-md">
          Publicar
        </Button>
      </div>
    </div>
  );
}
