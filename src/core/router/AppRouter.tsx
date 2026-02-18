import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "@/modules/auth/ui/LoginPage";
import { FundsPage } from "@/modules/funds/ui/FundsPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProtectedLayout } from "../layouts/ProtectedLayout";
import { TransactionsPage } from "@/modules/transactions/ui/TransactionsPage";
import { RegisterPage } from "@/modules/auth/ui/RegisterPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          element={
            <ProtectedRoute>
              <ProtectedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/funds" element={<FundsPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
        </Route>

        <Route path="/" element={<Navigate to="/funds" replace />} />
      </Routes>
    </BrowserRouter>

  );
};
