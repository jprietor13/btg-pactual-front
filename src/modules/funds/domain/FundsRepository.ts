import type { Fund } from "./Fund";

export interface FundsRepository {
  getAll(): Promise<Fund[]>
}
