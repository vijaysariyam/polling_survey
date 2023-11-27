import { useState } from "react";
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

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import TablePagination from "@mui/material/TablePagination";

import Button from "@mui/material/Button";

import VotingPollingResultsbyStateList from "../sections/reports/VotingPollingResultsbyStateList";
import VotingPollingResultsbyStateBarChartWidget from "../sections/votingPollingResultsbyState/VotingPollingResultsbyStateBarChartWidget";
import { PUBLIC_URL } from "../constants";

function totalStats(
  totalVotes,
  UrveyVotes,
  ycp,
  percentage1,
  others,
  percentage2
) {
  return { totalVotes, UrveyVotes, ycp, percentage1, others, percentage2 };
}

const statsRow = [
  totalStats("99999999", "8888", "4444", "60%", "99000", "40%"),
];

const VotingPollingResultsbyStatePage = ({ dashboard }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Page title="View Tickets">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Polling Result by State
        </Typography>

        <Card sx={{ p: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={5}>
              <Box
                component="img"
                src={PUBLIC_URL + "/static/images/andhrapradesh.png"}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <VotingPollingResultsbyStateBarChartWidget
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
            </Grid>
          </Grid>
        </Card>

        <Box p={3} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <VotingPollingResultsbyStateList />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, null)(VotingPollingResultsbyStatePage);
