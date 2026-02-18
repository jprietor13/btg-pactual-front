import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/core/providers/AuthProvider";

export const ProtectedLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  console.log("ProtectedLayout render");
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b shadow-sm px-8 py-4 flex items-center">
        <div className="flex gap-8 text-sm font-medium text-gray-700">
          <Link to="/funds" className="hover:text-red-600 transition">
            Fondos
          </Link>

          <Link to="/transactions" className="hover:text-red-600 transition">
            Transacciones
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-6">
          <div className="text-right">
            <p className="text-xs text-gray-500">Saldo disponible</p>
            <p className="text-sm font-semibold text-gray-800">
              ${user?.balance?.toLocaleString("es-CO")}
            </p>
          </div>

          <div className="h-8 w-px bg-gray-200" />

          <span className="text-sm text-gray-600">{user?.email}</span>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="py-12 px-6 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
