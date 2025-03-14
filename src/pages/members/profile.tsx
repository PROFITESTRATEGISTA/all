import DashboardLayout from "@/components/members/dashboard-layout";
import UserProfile from "@/components/members/user-profile";
import FloatingActionButtons from "@/components/floating-action-buttons";

export default function MembersProfile() {
  return (
    <DashboardLayout>
      <UserProfile />
      <FloatingActionButtons />
    </DashboardLayout>
  );
}
