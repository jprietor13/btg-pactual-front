import { useLogin } from "../application/useLogin";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  const { login, loading, error } = useLogin();

  return (
    <LoginForm
      onSubmit={login}
      loading={loading}
      error={error}
    />
  );
};
