import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/core/providers/AuthProvider";

export const ProtectedLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow px-6 py-4 flex items-center">
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/funds" className="hover:text-blue-600">
            Funds
          </Link>
          <Link to="/transactions" className="hover:text-blue-600">
            Transactions
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-4 text-sm">
          <span className="text-gray-600">{user?.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="p-8 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
