import { useFunds } from "../application/useFunds";
import { FundsList } from "./FundsList";

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


