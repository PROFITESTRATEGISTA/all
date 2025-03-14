import DashboardLayout from "@/components/members/dashboard-layout";
import AdaptiveRobotsGrid from "@/components/members/adaptive-robots-grid";
import FloatingActionButtons from "@/components/floating-action-buttons";

export default function MembersAdaptiveRobots() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <AdaptiveRobotsGrid />
      </div>
      <FloatingActionButtons />
    </DashboardLayout>
  );
}
