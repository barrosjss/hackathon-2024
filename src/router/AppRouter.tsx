import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";
import { MainRouter } from "./MainRouter";
import { PublicRoute, PrivateRoute } from "./ProtectionRoutes";
import { CreateArticle } from "@components";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
          <PublicRoute>
            <AuthRoutes />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard/*"
        element={
          <PublicRoute>
            <MainRouter />
          </PublicRoute>
        }
      />
      <Route
        path="/article/*"
        element={<CreateArticle />}
      />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
