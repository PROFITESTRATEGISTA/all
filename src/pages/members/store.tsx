import DashboardLayout from "@/components/members/dashboard-layout";
import StoreComponent from "@/components/members/store";
import FloatingActionButtons from "@/components/floating-action-buttons";

export default function MembersStore() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <StoreComponent />
      </div>
      <FloatingActionButtons />
    </DashboardLayout>
  );
}
