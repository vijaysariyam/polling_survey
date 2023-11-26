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
import TicketsPage from "./pages/TicketsPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import VoterRegistrationPage from "./pages/VoterRegistrationPage";
import AddPollSurveyPage from "./pages/AddPollSurveyPage";
import AddTicketPage from "./pages/AddTicketPage";
import ViewUserPage from "./pages/ViewUserPage";
import VoterAndVolunteerMappingPage from "./pages/VoterAndVolunteerMappingPage";
import Sachivalayam from "./pages/Sachivalayam";

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
          <Route path="tickets" element={<TicketsPage />} />
          <Route path="user-registration" element={<UserRegistrationPage />} />
          <Route path="view-user" element={<ViewUserPage />} />
          <Route
            path="voter-registration"
            element={<VoterRegistrationPage />}
          />
          <Route path="add-poll-survey" element={<AddPollSurveyPage />} />
          <Route path="add-ticket" element={<AddTicketPage />} />
          <Route
            path="voter-and-volunteer-mapping"
            element={<VoterAndVolunteerMappingPage />}
          />
          <Route path="sachivalayam" element={<Sachivalayam />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default Router;
