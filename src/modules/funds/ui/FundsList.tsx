import type { Fund } from "../domain/Fund";

interface Props {
  funds: Fund[];
  loading: boolean;
  error: string | null;
  actionLoading: string | null;
  onSubscribe: (fundId: string) => void;
  onCancel: (fundId: string) => void;
}

export const FundsList = ({
  funds,
  loading,
  error,
  actionLoading,
  onSubscribe,
  onCancel,
}: Props) => {
  if (loading) return <div>Loading funds...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {funds.map((fund) => (
        <li key={fund._id}>
          <div>
            {fund.name} - Min: {fund.minimumAmount}
          </div>

          <button
            onClick={() => onSubscribe(fund._id)}
            disabled={actionLoading === fund._id}
          >
            Subscribe
          </button>

          <button
            onClick={() => onCancel(fund._id)}
            disabled={actionLoading === fund._id}
          >
            Cancel
          </button>
        </li>
      ))}
    </ul>
  );
};
