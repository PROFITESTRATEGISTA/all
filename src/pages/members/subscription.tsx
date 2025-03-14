import DashboardLayout from "@/components/members/dashboard-layout";
import SubscriptionManager from "@/components/members/subscription-manager";

export default function MembersSubscription() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Gerenciar Assinatura</h1>
        <SubscriptionManager />
      </div>
    </DashboardLayout>
  );
}
