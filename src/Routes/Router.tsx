import { Route, Routes } from "react-router-dom";
import { DPageLayout } from "../components/DashboardPageLayout/DPageLayout";
import { DashboardData } from "../components/DashboardData/DashboardData";
import { LoginPage } from "../components/LoginPage/LoginPage";


export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route element={<DPageLayout />}>
          <Route path="/" Component={DashboardData} />
        </Route>
      </Routes>
    </>
  );
};
