import { Navigate, useRoutes, Routes, Route } from "react-router-dom";

// layouts
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import ProtectedRoute from "./layouts/ProtectedRoute";

import NotFound from "./pages/Page404";
import LoginPage from "./pages/LoginPage";
import ForgetPage from "./pages/ForgetPage";
import ResetPage from "./pages/ResetPage";
import DashboardPage from "./pages/DashboardPage";
import SurveyReportsPage from "./pages/SurveyReportsPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/404" element={<NotFound />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/forget-password" element={<ForgetPage />} />
      <Route path="/reset-password" element={<ResetPage />} />

      <Route path="/" element={<ProtectedRoute />}>
        <Route path="" element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />

          <Route path="reports/survey" element={<SurveyReportsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default Router;
