import { httpClient } from "@/core/api/httpClient";
import type { Transaction } from "../domain/Transaction";

export class TransactionsApiRepository {
  async getAll(): Promise<Transaction[]> {
    const { data } = await httpClient.get("/funds/transactions");
    return data;
  }
}
