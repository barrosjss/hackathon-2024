import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";
import { MainRouter } from "./MainRouter";
import { PublicRoute, PrivateRoute } from "./ProtectionRoutes";

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
          <PrivateRoute>
            <MainRouter />
          </PrivateRoute>
        }
      />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
