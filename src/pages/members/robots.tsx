import DashboardLayout from "@/components/members/dashboard-layout";
import RobotsGrid from "@/components/members/robots-grid";

export default function MembersRobots() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Meus Robôs</h1>
        <RobotsGrid />
      </div>
    </DashboardLayout>
  );
}
