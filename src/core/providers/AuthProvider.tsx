import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { AuthUser } from "@/modules/auth/domain/AuthUser";
import { AuthApiRepository } from "@/modules/auth/infrastructure/AuthApiRepository";

interface AuthContextValue {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isInitializing: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("access_token")
  );

  const [user, setUser] = useState<AuthUser | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  const repository = new AuthApiRepository();

  useEffect(() => {
    const initializeAuth = async () => {
      if (!token) {
        setIsInitializing(false);
        return;
      }

      try {
        localStorage.setItem("access_token", token);
        const userData = await repository.me();
        setUser(userData);
      } catch {
        localStorage.removeItem("access_token");
        setToken(null);
        setUser(null);
      } finally {
        setIsInitializing(false);
      }
    };

    initializeAuth();
  }, [token]);

  const login = (newToken: string) => {
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isInitializing,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
