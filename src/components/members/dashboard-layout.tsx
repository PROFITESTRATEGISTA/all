import { ReactNode } from "react";
import DashboardHeader from "./dashboard-header";
import { Container } from "@/components/ui/container";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <Container className="py-8">{children}</Container>
    </div>
  );
}
