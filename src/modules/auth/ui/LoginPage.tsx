import { useAuth } from "@/core/providers/AuthProvider";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../application/useLogin";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  const { login, loading, error } = useLogin();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/funds");
    }
  }, [isAuthenticated, navigate]);
  return (
    <>
      <LoginForm
        onSubmit={login}
        loading={loading}
        error={error}
      />
      <Link to="/register" className="text-red-600 text-sm">
        Crear cuenta
      </Link>
    </>
  );
};
