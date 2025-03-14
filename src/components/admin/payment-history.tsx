import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Loader2, Search, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";

interface PaymentEvent {
  id: string;
  user_id: string;
  email: string;
  payment_link_id: string;
  product_name: string;
  amount: number;
  currency: string;
  status: string;
  created_at: string;
}

export default function PaymentHistory() {
  const [payments, setPayments] = useState<PaymentEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("payment_events")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPayments(data || []);
    } catch (error) {
      console.error("Error fetching payments:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      case "pending":
        return (
          <Badge variant="outline" className="border-amber-500 text-amber-700">
            Pending
          </Badge>
        );
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      case "refunded":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-700">
            Refunded
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredPayments = payments.filter(
    (payment) =>
      payment.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.product_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.status?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>
            View all payment transactions in the system
          </CardDescription>
        </div>
        <Button onClick={fetchPayments} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search payments..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPayments.length > 0 ? (
                  filteredPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>
                        {payment.created_at
                          ? format(
                              new Date(payment.created_at),
                              "dd/MM/yyyy HH:mm",
                            )
                          : "N/A"}
                      </TableCell>
                      <TableCell>{payment.email}</TableCell>
                      <TableCell>{payment.product_name}</TableCell>
                      <TableCell>
                        {payment.amount
                          ? `${payment.currency || "USD"} ${payment.amount}`
                          : "N/A"}
                      </TableCell>
                      <TableCell>{getStatusBadge(payment.status)}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-4">
                      No payments found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
