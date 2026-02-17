import { httpClient } from "@/core/api/httpClient";
import type { Fund } from "../domain/Fund";
import type { FundsRepository } from "../domain/FundsRepository";

export class FundsApiRepository implements FundsRepository {
  async getAll(): Promise<Fund[]> {
    const { data } = await httpClient.get("/funds");
    return data;
  }

  async subscribe(fundId: string): Promise<void> {
    await httpClient.post(`/funds/subscribe/${fundId}`);
  }

  async cancel(fundId: string): Promise<void> {
    await httpClient.post(`/funds/cancel/${fundId}`);
  }
}
