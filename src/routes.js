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
import DivisionPage from "./pages/DivisionPage";
import MandalPage from "./pages/MandalPage";
import ConstituenciesPage from "./pages/ConstituenciesPage";
import DistrictsPage from "./pages/DistrictsPage";
import StatesPage from "./pages/StatesPage";
import PartsPage from "./pages/PartsPage";
import VillagesPage from "./pages/VillagesPage";
import PartiesPage from "./pages/PartiesPage";
import DesignationPage from "./pages/DesignationPage";
import ViewVoterPage from "./pages/ViewVoterPage";
import UserMappingPage from "./pages/UserMappingPage";
import AbsentTicketPage from "./pages/AbsentTicketPage";
import OpinionPollSurveyPage from "./pages/OpinionPollSurveyPage";
import OptionPollSurveyResultsPage from "./pages/OpinionPollSurveyResultsPage";
import OpinionPollSurveyResultsPage from "./pages/OpinionPollSurveyResultsPage";

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
          <Route path="view-voter" element={<ViewVoterPage />} />
          <Route
            path="voter-registration"
            element={<VoterRegistrationPage />}
          />
          <Route path="add-poll-survey" element={<AddPollSurveyPage />} />
          <Route
            path="opinion-poll-survey"
            element={<OpinionPollSurveyPage />}
          />{" "}
          <Route
            path="opinion-poll-survey-results"
            element={<OpinionPollSurveyResultsPage />}
          />
          <Route path="add-ticket1" element={<AddTicketPage />} />
          <Route path="absent-ticket" element={<AbsentTicketPage />} />
          <Route
            path="voter-and-volunteer-mapping"
            element={<VoterAndVolunteerMappingPage />}
          />
          <Route path="user-mapping" element={<UserMappingPage />} />
          <Route path="divisions" element={<DivisionPage />} />{" "}
          <Route path="mandals" element={<MandalPage />} />
          <Route path="constituencies" element={<ConstituenciesPage />} />
          <Route path="districts" element={<DistrictsPage />} />
          <Route path="states" element={<StatesPage />} />
          <Route path="sachivalayam" element={<Sachivalayam />} />
          <Route path="parts" element={<PartsPage />} />
          <Route path="villages" element={<VillagesPage />} />
          <Route path="parties" element={<PartiesPage />} />
          <Route path="designations" element={<DesignationPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default Router;
