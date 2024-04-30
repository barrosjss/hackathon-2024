import { ConfirmPasswordChange, CreateNewPassword, ForgetPassword, Login, Register } from "@pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forget" element={<ForgetPassword />} />
      <Route path="create" element={<CreateNewPassword />} />
      <Route path="confirm" element={<ConfirmPasswordChange />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
