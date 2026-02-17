import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "@/core/providers/AuthProvider";

interface Props {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated, isInitializing } = useAuth();

  if(isInitializing) {
    return <div>Cargando...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace/>;
  }

  return <>{children}</>;
}
