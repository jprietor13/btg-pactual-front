import { useState } from "react";
import { AuthApiRepository } from "../infrastructure/AuthApiRepository";
import axios from "axios";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const repository = new AuthApiRepository();

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const token = await repository.login(email, password);

      localStorage.setItem("access_token", token);

      return true;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? "Login failed");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed");
      }

      return false;
    }
  };

  return {
    login,
    loading,
    error,
  };
};
