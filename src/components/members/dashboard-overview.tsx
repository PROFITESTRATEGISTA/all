import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Users, Bot, Calendar, TrendingUp } from "lucide-react";
import MembershipStatus from "./membership-status";

export default function DashboardOverview() {
  const stats = [
    {
      title: "Robôs Ativos",
      value: "5",
      change: "+2 este mês",
      icon: Bot,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      title: "Dias Restantes",
      value: "28",
      change: "Renovação em 28/06/2023",
      icon: Calendar,
      color: "text-amber-500",
      bgColor: "bg-amber-100",
    },
  ];

  return (
    <div className="space-y-6">
      <MembershipStatus />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="border shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-full ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-gray-500 flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
