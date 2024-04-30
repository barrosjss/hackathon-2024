import { Main } from "@pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/*" element={<Navigate to="/dashboard/" />} />
    </Routes>
  );
};
