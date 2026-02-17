import type { Fund } from "../domain/Fund";

interface Props {
  funds: Fund[];
  loading: boolean;
  error: string | null;
  actionLoading: string | null;
  subscriptionMap: Record<string, boolean>;
  onSubscribe: (fundId: string) => void;
  onCancel: (fundId: string) => void;
}

export const FundsList = ({
  funds,
  loading,
  error,
  actionLoading,
  onSubscribe,
  subscriptionMap,
  onCancel,
}: Props) => {
  if (loading) return <div>Loading funds...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {funds.map((fund) => {
        const isSubscribed = subscriptionMap[fund._id];

        return (
          <li key={fund._id}>
            <div>
              {fund.name} - Min: {fund.minimumAmount}
            </div>

            <button
              onClick={() =>
                isSubscribed
                  ? onCancel(fund._id)
                  : onSubscribe(fund._id)
              }
              disabled={actionLoading === fund._id}
            >
              {isSubscribed ? "Cancel" : "Subscribe"}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
