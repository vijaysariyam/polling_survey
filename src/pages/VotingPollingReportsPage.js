import {
  Grid,
  Container,
  Typography,
  Box,
  TextField,
  Card,
} from "@mui/material";
import Page from "../components/Page";
import { connect } from "react-redux";
import { LoadingButton } from "@mui/lab";

import ViewUsersList from "../sections/reports/ViewUsersList";
import Button from "@mui/material/Button";
import VotingPollingReportsList from "../sections/reports/VotingPollingReportsList";
import PollResultsBarChartWidget from "../sections/opinionPollSurveyResults/PollResultsBarChartWidget";

const VotingPollingReportsPage = ({ dashboard }) => {
  return (
    <Page title="View User">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Voting Polling Reports
        </Typography>

        <Card sx={{ p: 3, mb:3}}>
          <Typography sx={{ pb: 2 }}>Search by filter</Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Select Mandal" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Select Division" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Select Sachivalayam" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Select Part No" fullWidth select />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              sx={{
                marginLeft: "auto",
              }}
            >
              <LoadingButton variant="contained">Search</LoadingButton>
            </Grid>
          </Grid>
        </Card>
        <PollResultsBarChartWidget
                title=""
                sx={{ height: "100%" }}
                chartLabels={["YCP", "TDP", "JSP", "BJP", "Others"]}
                chartData={[
                  {
                    name: "Total",
                    data: ["150", 120, 100, 80, 50],
                  },
                ]}
              />

        <Box p={3} />
        <VotingPollingReportsList />
      </Container>
    </Page>
  );
};

const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, null)(VotingPollingReportsPage);
