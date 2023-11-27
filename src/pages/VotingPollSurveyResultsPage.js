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

import BarChartWidget from "../sections/dashboard/BarChartWidget";
import VotingPollSurveyResultsBarChartWidget from "../sections/votingPollSurveyResults/VotingPollSurveyResultsBarChartWidget";
import VotingPollSurveyResultsList from "../sections/reports/VotingPollSurveyResultsList";

function totalStats(
  totalVotes,
  ycpVotes,
  male,
  female,
  neutral,
  tdp,
  jsp,
  bjp,
  others
) {
  return { totalVotes, ycpVotes, male, female, neutral, tdp, jsp, bjp, others };
}

const statsRow = [
  totalStats(
    "3,00,000",
    "8888",
    "4444",
    "4444",
    "666",
    "22",
    "55",
    "11",
    "6666"
  ),
];

const VotingPollSurveyResultsPage = ({ dashboard }) => {
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
          Voting Poll Survey Results
        </Typography>

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
              <VotingPollSurveyResultsBarChartWidget
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
                  YCP Votes
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  Male
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  Female
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  Neutral
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  TDP
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  JSP
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  BJP
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  Others
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
                    {row.ycpVotes}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.male}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.female}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.neutral}
                  </TableCell>{" "}
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.tdp}
                  </TableCell>{" "}
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.jsp}
                  </TableCell>{" "}
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.bjp}
                  </TableCell>{" "}
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.others}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <VotingPollSurveyResultsList />
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

export default connect(mapStateToProps, null)(VotingPollSurveyResultsPage);
