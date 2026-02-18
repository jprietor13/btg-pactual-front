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
      <li
        key={fund._id}
        className="bg-white shadow rounded p-4 flex justify-between items-center"
      >
        <div>
          <p className="font-semibold">{fund.name}</p>
          <p className="text-sm text-gray-500">
            Min: ${fund.minimumAmount.toLocaleString()}
          </p>
        </div>

        <button
          onClick={() =>
            isSubscribed
              ? onCancel(fund._id)
              : onSubscribe(fund._id)
          }
          disabled={actionLoading === fund._id}
          className={`px-4 py-2 rounded text-sm font-medium transition ${
            isSubscribed
              ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isSubscribed ? "Cancel" : "Subscribe"}
        </button>
      </li>
    );
      })}
    </ul>
  );
};
