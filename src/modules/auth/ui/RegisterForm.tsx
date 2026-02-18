import { useState } from "react";

interface Props {
  onSubmit: (
    name: string,
    email: string,
    password: string,
    notificationPreference: string
  ) => void;
  loading: boolean;
  error: string | null;
}

export const RegisterForm = ({
  onSubmit,
  loading,
  error,
}: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notificationPreference, setNotificationPreference] =
    useState("EMAIL");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(name, email, password, notificationPreference);
      }}
      className="space-y-4"
    >
      <input
        className="w-full border p-2 rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="w-full border p-2 rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <select
        className="w-full border p-2 rounded"
        value={notificationPreference}
        onChange={(e) => setNotificationPreference(e.target.value)}
      >
        <option value="EMAIL">Email</option>
        <option value="SMS">SMS</option>
      </select>

      <button
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Creating..." : "Register"}
      </button>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
};
