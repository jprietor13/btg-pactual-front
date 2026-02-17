import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "@/modules/auth/ui/LoginPage";
import FundsPage from "@/modules/funds/ui/FundsPage";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/funds"
          element={
            <ProtectedRoute>
              <FundsPage />
            </ProtectedRoute>   
          }
          />
      </Routes>
    </BrowserRouter>
  );
};
