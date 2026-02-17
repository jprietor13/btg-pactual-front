import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "@/modules/auth/ui/LoginPage";
import { FundsPage } from "@/modules/funds/ui/FundsPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProtectedLayout } from "../layouts/ProtectedLayout";
import { TransactionsPage } from "@/modules/transactions/ui/TransactionsPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          element={
            <ProtectedRoute>
              <ProtectedLayout />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/funds"
          element={
            <ProtectedRoute>
              <FundsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <TransactionsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
