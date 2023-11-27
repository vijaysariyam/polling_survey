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
import ViewTicketsList from "../sections/reports/ViewTicketsList";

function totalStats(name, ofOpen, OfResolved, ofCancelled, ofEscalated) {
  return { name, ofOpen, OfResolved, ofCancelled, ofEscalated };
}

const statsRow = [totalStats("9,999", "10", "100", "5", "10")];

const TicketsPage = ({ dashboard }) => {
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
          View Tickets
        </Typography>

        <Card sx={{ p: 3 }}>
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

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Select Navaratnalu" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Ticket Status" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <LoadingButton variant="contained">Search</LoadingButton>
            </Grid>
          </Grid>
        </Card>

        <TableContainer
          component={Paper}
          sx={{
            mt: 4,
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
                  Total
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  # Of Open
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  # Of Resolved
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  # Of Cancelled
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  # Of Escalated
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {statsRow.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    align="center"
                    component="th"
                    scope="row"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {" "}
                    {row.ofOpen}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.OfResolved}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.ofCancelled}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "blue",
                      fontSize: "1.2rem",
                    }}
                  >
                    {row.ofEscalated}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box p={3} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <ViewTicketsList />
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

export default connect(mapStateToProps, null)(TicketsPage);
