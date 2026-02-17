import type { Fund } from "../domain/Fund";

interface Props {
  funds: Fund[];
  loading: boolean;
  error: string | null;
}

export const FundsList = ({ funds, loading, error }: Props) => {
  if (loading) return <div>Loading funds...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {funds.map((fund) => (
        <li key={fund._id}>
          {fund.name} - Min: {fund.minimumAmount}
        </li>
      ))}
    </ul>
  );
};
