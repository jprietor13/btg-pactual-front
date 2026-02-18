import { useNavigate, Link } from "react-router-dom";
import { useRegister } from "../application/useRegister";
import { RegisterForm } from "./RegisterForm";

export const RegisterPage = () => {
  const { register, loading, error } = useRegister();
  const navigate = useNavigate();

  const handleRegister = async (
    name: string,
    email: string,
    password: string,
    notificationPreference: string
  ) => {
    const success = await register(
      name,
      email,
      password,
      notificationPreference
    );

    if (success) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 shadow rounded w-full max-w-md">
        <h1 className="text-xl font-semibold mb-6">Registro</h1>

        <RegisterForm
          onSubmit={handleRegister}
          loading={loading}
          error={error}
        />

        <p className="text-sm text-center mt-6 text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/login"
            className="text-red-600 font-medium hover:underline ml-2"
          >
            Ingresar
          </Link>
        </p>
      </div>
    </div>
  );
};
