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

function totalStats(name, ofOpen, OfResolved, ofCancelled, ofEscalated) {
  return { name, ofOpen, OfResolved, ofCancelled, ofEscalated };
}

const statsRow = [totalStats("9,999", "10", "100", "5", "10")];

/////////////////////////////////////
const columns = [
  { id: "voterId", label: "Voter ID", minWidth: 170, align: "center" },
  { id: "voterName", label: "Voter Name", minWidth: 100, align: "center" },
  {
    id: "cell",
    label: "Cell #",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "navaratnalu",
    label: "Navaratnalu Name",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "ticketsDetails",
    label: "Tickets Details",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "updateTickets",
    label: "Update Tickets",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  voterId,
  voterName,
  cell,
  navaratnalu,
  ticketsDetails,
  status,
  updateTickets
) {
  return {
    voterId,
    voterName,
    cell,
    navaratnalu,
    ticketsDetails,
    status,
    updateTickets,
  };
}
const top100Films = [
  { title: "Pending" },
  { title: "Processing" },
  { title: "Resolved" },
];

const defaultProps = {
  options: top100Films,
  getOptionLabel: (option) => option.title,
};

const rows = [
  createData(
    "123",
    "John",
    "+94123456789",
    "",
    "",
    <TextField
    sx={{
      border: "none",
    }}
    id="Open"
    label="Open"
    variant="standard"
    InputProps={{
      disableUnderline: true,
    }}
  />,
    <Button variant="outlined">Submit</Button>
  ),
  createData(
    "129",
    "Jane",
    "+94123456589",
    "",
    "",
    <TextField
      sx={{
        border: "none",
      }}
      id="Open"
      label="Open"
      variant="standard"
      InputProps={{
        disableUnderline: true,
      }}
    />,
    <Button variant="outlined">Submit</Button>
  ),
  createData(
    "223",
    "Mary",
    "+94123476789",
    "",
    "",
    <TextField
      sx={{
        border: "none",
      }}
      id="Open"
      label="Open"
      variant="standard"
      InputProps={{
        disableUnderline: true,
      }}
    />,
    <Button variant="outlined">Submit</Button>
  ),
  createData(
    "923",
    "James",
    "+94123459789",
    "",
    "",
    <TextField
    sx={{
      border: "none",
    }}
    id="Open"
    label="Open"
    variant="standard"
    InputProps={{
      disableUnderline: true,
    }}
  />,
    <Button variant="outlined">Submit</Button>
  ),
];

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
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
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
