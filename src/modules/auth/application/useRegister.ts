import { useState } from "react";
import { AuthApiRepository } from "../infrastructure/AuthApiRepository";
import axios from "axios";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const repository = new AuthApiRepository();

  const register = async (
    name: string,
    email: string,
    password: string,
    notificationPreference: string
  ) => {
    try {
      setLoading(true);
      setError(null);

      await repository.register({
        name,
        email,
        password,
        notificationPreference,
      });

      return true;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? "Registration failed");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Registration failed");
      }

      return false;
    }
  };

  return { register, loading, error };
};
