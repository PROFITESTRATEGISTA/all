import AdminLayout from "@/components/admin/admin-layout";
import PaymentHistory from "@/components/admin/payment-history";

export default function AdminPayments() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Payment Management</h1>
        <PaymentHistory />
      </div>
    </AdminLayout>
  );
}
