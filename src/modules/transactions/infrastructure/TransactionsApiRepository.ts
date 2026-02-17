import { httpClient } from "@/core/api/httpClient";
import type { Transaction } from "../domain/Transaction";

export class TransactionsApiRepository {
  async getAll(): Promise<Transaction[]> {
  const { data } = await httpClient.get("/funds/transactions");

  return data.map((tx: any) => ({
    id: tx._id,
    transactionId: tx.transactionId,
    userId: tx.userId,
    fundId: tx.fundId,
    type: tx.type,
    amount: tx.amount,
    createdAt: tx.createdAt,
  }));
}
}
