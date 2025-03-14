import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import { AuthProvider, useAuth } from "./contexts/auth-context";
import FloatingIcon from "./components/floating-icon";

// Lazy load pages
const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const ForgotPassword = lazy(() => import("./pages/forgot-password"));
const Robots = lazy(() => import("./pages/robots"));
// Plans page replaced by strategy packs
const Results = lazy(() => import("./pages/results"));
const Community = lazy(() => import("./pages/community"));
const Contact = lazy(() => import("./pages/contact"));
const RobotDetail = lazy(() => import("./pages/robot-detail"));
const StrategyPacks = lazy(() => import("./pages/strategy-packs"));
const ProprietaryDesk = lazy(() => import("./pages/proprietary-desk"));
const CopyInvest = lazy(() => import("./pages/copy-invest"));
const ScheduleDemo = lazy(() => import("./pages/schedule-demo"));
const PaymentSuccess = lazy(() => import("./pages/payment-success"));
const PaymentCancelled = lazy(() => import("./pages/payment-cancelled"));

// Members area pages
const MembersRobots = lazy(() => import("./pages/members/robots"));
const MembersAdaptiveRobots = lazy(
  () => import("./pages/members/adaptive-robots"),
);
const MembersCommunity = lazy(() => import("./pages/members/community"));
const MembersTutorials = lazy(() => import("./pages/members/tutorials"));
const MembersStore = lazy(() => import("./pages/members/store"));
const MembersSubscription = lazy(() => import("./pages/members/subscription"));
const MembersProfile = lazy(() => import("./pages/members/profile"));

// Admin pages
const AdminUsers = lazy(() => import("./pages/admin/users"));
const AdminPayments = lazy(() => import("./pages/admin/payments"));
const AdminSubscriptions = lazy(() => import("./pages/admin/subscriptions"));
const AdminStats = lazy(() => import("./pages/admin/stats"));
const AdminSettings = lazy(() => import("./pages/admin/settings"));

// Protected route component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Carregando...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

// Admin route component
function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Carregando...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Check if user is admin
  const isAdmin =
    user.email === "admin@example.com" ||
    user.email === "pedropardal04@gmail.com";
  if (!isAdmin) {
    return <Navigate to="/members" replace />;
  }

  return <>{children}</>;
}

function App() {
  // For Tempo routes
  const tempoRoutes = import.meta.env.VITE_TEMPO ? useRoutes(routes) : null;

  return (
    <AuthProvider>
      <FloatingIcon />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            Carregando...
          </div>
        }
      >
        {tempoRoutes}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/robots" element={<Robots />} />
          <Route path="/robots/:id" element={<RobotDetail />} />
          <Route path="/results" element={<Results />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/strategy-packs" element={<StrategyPacks />} />
          <Route path="/proprietary-desk" element={<ProprietaryDesk />} />
          <Route path="/copy-invest" element={<CopyInvest />} />
          <Route path="/schedule-demo" element={<ScheduleDemo />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-cancelled" element={<PaymentCancelled />} />

          {/* Members area routes - protected */}
          <Route
            path="/members"
            element={
              <ProtectedRoute>
                <MembersAdaptiveRobots />
              </ProtectedRoute>
            }
          />
          <Route
            path="/members/robots"
            element={
              <ProtectedRoute>
                <MembersRobots />
              </ProtectedRoute>
            }
          />
          <Route
            path="/members/adaptive-robots"
            element={
              <ProtectedRoute>
                <MembersAdaptiveRobots />
              </ProtectedRoute>
            }
          />
          <Route
            path="/members/community"
            element={
              <ProtectedRoute>
                <MembersCommunity />
              </ProtectedRoute>
            }
          />
          <Route
            path="/members/tutorials"
            element={
              <ProtectedRoute>
                <MembersTutorials />
              </ProtectedRoute>
            }
          />
          <Route
            path="/members/store"
            element={
              <ProtectedRoute>
                <MembersStore />
              </ProtectedRoute>
            }
          />
          <Route
            path="/members/subscription"
            element={
              <ProtectedRoute>
                <MembersSubscription />
              </ProtectedRoute>
            }
          />
          <Route
            path="/members/profile"
            element={
              <ProtectedRoute>
                <MembersProfile />
              </ProtectedRoute>
            }
          />

          {/* Admin routes */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminStats />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <AdminUsers />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/payments"
            element={
              <AdminRoute>
                <AdminPayments />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/subscriptions"
            element={
              <AdminRoute>
                <AdminSubscriptions />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/stats"
            element={
              <AdminRoute>
                <AdminStats />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <AdminRoute>
                <AdminSettings />
              </AdminRoute>
            }
          />

          {/* Add a catch-all route */}
          {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
