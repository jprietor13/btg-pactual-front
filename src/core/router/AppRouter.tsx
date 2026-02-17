import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "@/modules/auth/ui/LoginPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
