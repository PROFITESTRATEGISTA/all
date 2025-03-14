import { CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  MoreHorizontal,
  Bookmark,
  Flag,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PostCardProps {
  post: {
    id: string;
    author: {
      name: string;
      avatar: string;
      role: string;
    };
    content: string;
    timestamp: string;
    likes: number;
    comments: number;
    tags: string[];
    category?: string;
    isPinned?: boolean;
  };
}

export default function PostCard(
  { post }: PostCardProps = {
    post: {
      id: "1",
      author: {
        name: "Carlos Silva",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos",
        role: "Trader Profissional",
      },
      content:
        "Estou vendo uma ótima oportunidade de entrada em PETR4 hoje. O preço está testando um suporte importante e os indicadores técnicos estão mostrando sinais de reversão. Alguém mais está de olho nesse ativo?",
      timestamp: "Há 2 horas",
      likes: 24,
      comments: 8,
      tags: ["Ações", "Análise Técnica"],
    },
  },
) {
  return (
    <div className="p-6">
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="h-10 w-10 border">
          <AvatarImage src={post.author.avatar} alt={post.author.name} />
          <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{post.author.name}</h3>
                <span className="text-xs text-gray-500">{post.timestamp}</span>
              </div>
              <p className="text-xs text-gray-500">{post.author.role}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="cursor-pointer">
                  <Bookmark className="h-4 w-4 mr-2" /> Salvar post
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-600">
                  <Flag className="h-4 w-4 mr-2" /> Reportar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-3 mb-4">
            <p className="text-gray-800 leading-relaxed">{post.content}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 rounded-md hover:bg-gray-100"
            >
              <ThumbsUp className="h-4 w-4 mr-2" />
              {post.likes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 rounded-md hover:bg-gray-100"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              {post.comments}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 rounded-md hover:bg-gray-100"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
