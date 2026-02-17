import { useEffect, useState } from "react";
import type { Transaction } from "../domain/Transaction";
import { TransactionsApiRepository } from "../infrastructure/TransactionsApiRepository";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);

  const repository = new TransactionsApiRepository();

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const data = await repository.getAll();
      setTransactions(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return {
    transactions,
    loading,
    refetch: fetchTransactions,
  };
};
