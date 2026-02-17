import { useEffect, useState } from "react";
import type { Fund } from "../domain/Fund";
import { FundsApiRepository } from "../infrastructure/FundsApiRepository";
import axios from "axios";
export const useFunds = () => {
  const [funds, setFunds] = useState<Fund[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const repository = new FundsApiRepository();

  const fetchFunds = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await repository.getAll();
      setFunds(data);
    } catch (err: unknown) {
      
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? "Error fetching funds");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error fetching funds");
      }

      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFunds();
  }, []);

  return {
    funds,
    loading,
    error,
    refetch: fetchFunds,
  };
};
