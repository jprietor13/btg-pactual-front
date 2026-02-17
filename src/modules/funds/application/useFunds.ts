import { useEffect, useState } from "react";
import type { Fund } from "../domain/Fund";
import { FundsApiRepository } from "../infrastructure/FundsApiRepository";
import axios from "axios";

export const useFunds = () => {
  const [funds, setFunds] = useState<Fund[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const repository = new FundsApiRepository();

  const fetchFunds = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await repository.getAll();
      setFunds(data);
    }catch (err: unknown) {
      
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

  const subscribe = async (fundId: string) => {
    try {
      setActionLoading(fundId);
      await repository.subscribe(fundId);
      await fetchFunds(); // refetch después de acción
    } catch (err: unknown) {
      
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? "Error subscribing");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error subscribing");
      }

      return false;
    } finally {
      setActionLoading(null);
    }
  };

  const cancel = async (fundId: string) => {
    try {
      setActionLoading(fundId);
      await repository.cancel(fundId);
      await fetchFunds();
    } catch (err: unknown) {
      
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? "Error canceling");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error canceling");
      }

      return false;
    } finally {
      setActionLoading(null);
    }
  };

  useEffect(() => {
    fetchFunds();
  }, []);

  return {
    funds,
    loading,
    error,
    actionLoading,
    subscribe,
    cancel,
    refetch: fetchFunds,
  };
};
