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
    <div className="bg-white shadow rounded overflow-hidden">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-4 py-3 text-left">Fund</th>
            <th className="px-4 py-3 text-left">Type</th>
            <th className="px-4 py-3 text-left">Amount</th>
            <th className="px-4 py-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-t">
              <td className="px-4 py-3">{fundMap[tx.fundId]}</td>

              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${tx.type === "SUBSCRIBE"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                    }`}
                >
                  {tx.type}
                </span>
              </td>

              <td className="px-4 py-3">
                ${tx.amount.toLocaleString()}
              </td>

              <td className="px-4 py-3">
                {new Date(tx.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};
