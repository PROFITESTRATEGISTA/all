import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { AuthUser, getCurrentUser, signIn, signOut, signUp } from "@/lib/auth";

type AuthContextType = {
  user: AuthUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<{ error: any }>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await getCurrentUser();
        setUser(user || null);
      } catch (error) {
        console.error("Error loading user:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();

    // Set up an interval to refresh user data every 5 seconds
    const refreshInterval = setInterval(loadUser, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(refreshInterval);
  }, []);

  const handleSignIn = async (email: string, password: string) => {
    const { data, error } = await signIn(email, password);
    if (data?.user) {
      setUser(data.user);
    }
    return { error };
  };

  const handleSignUp = async (email: string, password: string) => {
    const { data, error } = await signUp(email, password);
    if (data?.user) {
      setUser(data.user);
    }
    return { error };
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (!error) {
      setUser(null);
    }
    return { error };
  };

  const value = {
    user,
    loading,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  // For storyboards and development, return a mock auth context
  if (import.meta.env.DEV) {
    // Check if we're using a specific test user from localStorage
    const testUserEmail =
      localStorage.getItem("testUserEmail") || "user@example.com";
    const isAdmin =
      testUserEmail === "pedropardal04@gmail.com" ||
      testUserEmail === "admin@example.com";
    const testUserPack =
      localStorage.getItem("testUserPack") || "Pack PRO Quant";

    return {
      user: {
        id: "test-user-id",
        email: testUserEmail,
        user_metadata: {
          first_name: isAdmin
            ? "Pedro"
            : localStorage.getItem("userFirstName") || "Test",
          last_name: isAdmin
            ? "Pardal"
            : localStorage.getItem("userLastName") || "User",
          is_admin: isAdmin,
          pack: testUserPack,
          avatar_url: localStorage.getItem("userAvatarUrl") || "",
        },
      },
      loading: false,
      signIn: async (email: string, password: string) => {
        localStorage.setItem("testUserEmail", email);
        // Force reload to apply changes
        setTimeout(() => {
          window.location.reload();
        }, 100);
        return { error: null };
      },
      signUp: async () => ({ error: null }),
      signOut: async () => {
        localStorage.removeItem("testUserEmail");
        localStorage.removeItem("testUserPack");
        // Force reload to apply changes
        setTimeout(() => {
          window.location.reload();
        }, 100);
        return { error: null };
      },
    } as AuthContextType;
  }

  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
