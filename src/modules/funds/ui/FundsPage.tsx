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

  return (
    <div>
      <h1>Funds</h1>
      <Link to="/transactions">View Transactions</Link>
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
  );
};


