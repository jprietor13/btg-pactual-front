import { useTransactions } from "../application/useTransactions";
import { TransactionsTable } from "./TransactionsTable";
import { useFunds } from "@/modules/funds/application/useFunds";


export const TransactionsPage = () => {
  const { transactions, loading } = useTransactions();
  const { funds } = useFunds();

  const fundMap = funds.reduce<Record<string, string>>((acc, fund) => {
    acc[fund.id] = fund.name;
    return acc;
  }, {});

  return (
    <div>
      <h1>Transactions</h1>

      <TransactionsTable
        transactions={transactions}
        loading={loading}
        fundMap={fundMap}
      />
    </div>
  );
};

