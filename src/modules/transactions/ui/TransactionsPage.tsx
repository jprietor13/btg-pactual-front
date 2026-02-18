import { useTransactions } from "../application/useTransactions";
import { TransactionsTable } from "./TransactionsTable";
import { useFunds } from "@/modules/funds/application/useFunds";
import { Link } from "react-router-dom";

export const TransactionsPage = () => {
  const { transactions, loading } = useTransactions();
  const { funds } = useFunds();

  const fundMap = funds.reduce<Record<string, string>>((acc, fund) => {
    acc[fund._id] = fund.name;
    return acc;
  }, {});

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Historial de transacciones
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Revisa tus movimientos recientes
          </p>
        </div>

        <Link
          to="/funds"
          className="bg-white border border-red-300 text-red-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition shadow-sm"
        >
          Volver a fondos
        </Link>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <TransactionsTable
          transactions={transactions}
          loading={loading}
          fundMap={fundMap}
        />
      </div>
    </div>

  );
};

