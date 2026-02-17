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
    <div>
      <nav >
        <Link to="/funds">Funds</Link>
        <Link to="/transactions">Transactions</Link>

        <div style={{ marginLeft: "auto" }}>
          <span>{user?.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
