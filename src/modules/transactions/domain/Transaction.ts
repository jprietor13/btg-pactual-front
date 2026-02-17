export type TransactionType = "SUBSCRIBE" | "CANCEL";

export interface Transaction {
  transactionId: string;
  userId: string;
  fundId: string;
  type: TransactionType;
  amount: number;
  createdAt: string;
}
