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

import OpinionPollSurveyResultsList from "../sections/reports/OpinionPollSurveyResultsList";

import VotingPollResultsBarChartWidget from "../sections/votingPollResults/VotingPollResultsBarChartWidget";
import VotingPollResultsList from "../sections/reports/VotingPollResultsList";

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

const VotingPollingResultsPage = ({ dashboard }) => {
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
          Voting Polling Results
        </Typography>
        <Card sx={{ p: 3, mb: 3 }}>
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
        <Card sx={{ p: 3 }}>
          <Typography sx={{ pb: 2 }}>Survey %</Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={4}>
              <LoadingButton
                variant="outlined"
                sx={{
                  padding: "15px 40px",
                  fontSize: "1.2rem",
                  marginRight: "10px",
                }}
              >
                50 %
              </LoadingButton>{" "}
              <LoadingButton
                variant="contained"
                sx={{
                  padding: "15px 40px",
                  fontSize: "1.2rem",
                }}
              >
                Search
              </LoadingButton>
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <VotingPollResultsBarChartWidget
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

        <TableContainer
          component={Paper}
          sx={{
            mt: 4,
            mb: 5,
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  Total Votes
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  Urvey Votes
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  YCP
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  %
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  Others
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  %
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {statsRow.map((row) => (
                <TableRow key={row.totalVotes}>
                  <TableCell
                    align="center"
                    component="th"
                    scope="row"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.totalVotes}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.UrveyVotes}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.ycp}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.percentage1}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.others}
                  </TableCell>{" "}
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.percentage2}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <VotingPollResultsList />
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

export default connect(mapStateToProps, null)(VotingPollingResultsPage);
