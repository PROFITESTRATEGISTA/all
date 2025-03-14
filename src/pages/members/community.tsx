import DashboardLayout from "@/components/members/dashboard-layout";
import CommunitySection from "@/components/members/community-section";
import FloatingActionButtons from "@/components/floating-action-buttons";

export default function MembersCommunity() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Comunidade</h1>
        <CommunitySection />
      </div>
      <FloatingActionButtons />
    </DashboardLayout>
  );
}
