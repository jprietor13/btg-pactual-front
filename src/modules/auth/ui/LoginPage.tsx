import { useNavigate } from "react-router-dom";
import { useLogin } from "../application/useLogin"
import { LoginForm } from "./LoginForm";
import { useEffect } from "react";
import { useAuth } from "@/core/providers/AuthProvider";

export const LoginPage = () => {
  const { login, loading, error } = useLogin();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) {
      navigate("/funds")
    }
  }, [isAuthenticated, navigate]);
  return (
    <LoginForm
      onSubmit={login}
      loading={loading}
      error={error}
    />
  );
};
