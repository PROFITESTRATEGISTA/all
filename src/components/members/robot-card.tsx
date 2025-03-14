import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Download, BookOpen, ExternalLink } from "lucide-react";

interface RobotCardProps {
  robot: {
    id: string;
    name: string;
    description: string;
    type: string;
    color: string;
    included?: boolean;
    downloadUrl?: string;
    tutorialUrl?: string;
  };
}

export default function RobotCard(
  { robot }: RobotCardProps = {
    robot: {
      id: "1",
      name: "Profit Master",
      description:
        "Robô especializado em operações de day trade no mercado de ações.",
      type: "Day Trade",
      color: "bg-blue-500",
      included: true,
      downloadUrl: "#",
      tutorialUrl: "#",
    },
  },
) {
  return (
    <Card className="border shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className={`h-2 ${robot.color}`}></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold">{robot.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{robot.description}</p>
          </div>
          {robot.included && (
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 border-green-200"
            >
              Incluído no plano
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full ${robot.color} flex items-center justify-center`}
            >
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium">Tipo de Operação</h4>
              <p className="text-sm text-gray-600">{robot.type}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button variant="outline" size="sm" className="w-1/2 mr-1" asChild>
          <a
            href={robot.tutorialUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen className="h-4 w-4 mr-1" />
            Tutorial
          </a>
        </Button>
        <Button size="sm" className="w-1/2 ml-1" asChild>
          <a
            href={robot.downloadUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-4 w-4 mr-1" />
            Download
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
