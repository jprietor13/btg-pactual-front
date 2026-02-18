import { useFunds } from "../application/useFunds";
import { FundsList } from "./FundsList";
import { Link } from "react-router-dom";

export const FundsPage = () => {
  const {
    funds,
    loading,
    error,
    actionLoading,
    subscribe,
    cancel,
    subscriptionMap
  } = useFunds();
  console.log("FundsPage render");
  return (
    <div className="max-w-4xl mx-auto">
  <div className="flex items-center justify-between mb-8">
    <div>
      <h1 className="text-3xl font-bold text-gray-800">
        Fondos disponibles
      </h1>
      <p className="text-gray-500 text-sm mt-1">
        Explora y gestiona tus inversiones
      </p>
    </div>

    <Link
      to="/transactions"
      className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition shadow-sm"
    >
      Ver transacciones
    </Link>
  </div>

  <div className="bg-gray-50 p-6 rounded-2xl shadow-inner">
    <FundsList
      funds={funds}
      loading={loading}
      error={error}
      actionLoading={actionLoading}
      subscriptionMap={subscriptionMap}
      onSubscribe={subscribe}
      onCancel={cancel}
    />
  </div>
</div>

  );
};


