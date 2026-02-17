import type { Transaction } from "../domain/Transaction";

interface Props {
  transactions: Transaction[];
  loading: boolean;
  fundMap: Record<string, string>;
}

export const TransactionsTable = ({
  transactions,
  loading,
  fundMap
}: Props) => {
  if (loading) return <div>Loading transactions...</div>;

  if (!transactions.length) {
    return <div>No transactions yet</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Fund</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx) => (
          <tr key={tx.transactionId}>
            <td>{fundMap[tx.fundId] ?? tx.fundId}</td>
            <td>{tx.type}</td>
            <td>{tx.amount}</td>
            <td>{new Date(tx.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
