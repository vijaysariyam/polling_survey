import { Box, Container, Typography, Breadcrumbs, Link } from "@mui/material";
import Page from "../components/Page";
import Iconify from "../components/Iconify";
import SurveyReportsList from "../sections/reports/SurveyReportsList";
import VotingSurveyReportsList from "../sections/reports/VotingSurveyReportsList";

export default function VotingSurveyReportsPage() {
  return (
    <Page title="Students">
      <Container maxWidth="xl">
        <Box mb={5}>
          <Typography variant="h4" gutterBottom>
            Voting Survey Reports
          </Typography>
        </Box>

        <VotingSurveyReportsList />
      </Container>
    </Page>
  );
}
