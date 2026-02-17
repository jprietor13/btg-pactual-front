import { useState } from "react";

interface Props {
  onSubmit: (email: string, password: string) => void;
  loading: boolean;
  error: string | null;
}

export const LoginForm = ({ onSubmit, loading, error }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(email, password);
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
};
