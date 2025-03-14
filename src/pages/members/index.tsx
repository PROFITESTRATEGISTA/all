import DashboardLayout from "@/components/members/dashboard-layout";
import DashboardOverview from "@/components/members/dashboard-overview";
import RobotsGrid from "@/components/members/robots-grid";
import CommunitySection from "@/components/members/community-section";

export default function MembersHome() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <DashboardOverview />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RobotsGrid />
          </div>
          <div>
            <CommunitySection />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
