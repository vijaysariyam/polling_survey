import { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Box,
  TextField,
  Card,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Page from "../components/Page";
import { connect } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { PieChartWidget } from "../sections/dashboard";
import BarChartWidget from "../sections/dashboard/BarChartWidget";
import {
  Age1Color,
  Age2Color,
  Age3Color,
  Age4Color,
  Age5Color,
  Age6Color,
  BJPColor,
  CONGRESSColor,
  CancelColor,
  EscalatedColor,
  FemaleColor,
  JSPColor,
  MaleColor,
  NETURALColor,
  NotStartedColor,
  OTHERColor,
  OpenColor,
  ResolvedColor,
  StartedColor,
  TDPColor,
  TransgenderColor,
  YSRCPColor,
  completedColor,
  pendingColor,
} from "../utils/constants";

// Define custom styles
const useStyles = makeStyles({
  textField: {
    "& .MuiInputBase-input": {
      height: "10px", // Adjust the height as per your requirement
      fontSize: "3px",
      width: "110px",
    },
  },
});

const DashboardApp = ({ dashboard }) => {
  const classes = useStyles();
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Opinion Dashboard
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
            </Grid>{" "}
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Select Age" fullWidth />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Select User" fullWidth select />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Select Next Level User" fullWidth select />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <LoadingButton variant="contained">Search</LoadingButton>
            </Grid>
          </Grid>
        </Card>

        <Box p={3} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <PieChartWidget
              title="Total Voters"
              chartData={[
                { label: "Male", value: 4344 },
                { label: "Female", value: 5435 },
                { label: "Transgender", value: 1443 },
              ]}
              chartColors={[MaleColor, FemaleColor, TransgenderColor]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <PieChartWidget
              title="Voters Pulse"
              chartData={[
                { label: "YSRCP", value: 4344 },
                { label: "NETURAL", value: 5435 },
                { label: "TDP", value: 1443 },
                { label: "JANASENA", value: 1443 },
                { label: "BJP", value: 1443 },
                { label: "CONGRESS", value: 1443 },
              ]}
              chartColors={[
                YSRCPColor,
                NETURALColor,
                TDPColor,
                JSPColor,
                BJPColor,
                CONGRESSColor,
                OTHERColor,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <PieChartWidget
              title="Survey Status"
              chartData={[
                { label: "Started", value: 6966 },
                { label: "Not Started", value: 2542 },
              ]}
              chartColors={[StartedColor, NotStartedColor]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <PieChartWidget
              title="Ticket Status"
              type="donut"
              chartData={[
                { label: "Open", value: 6966 },
                { label: "Resolved", value: 456 },
                { label: "Cancel", value: 876 },
                { label: "Escalated", value: 2542 },
              ]}
              chartColors={[OpenColor, ResolvedColor, CancelColor, EscalatedColor]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <BarChartWidget
              title="Ticktes"
              sx={{ height: "100%" }}
              chartLabels={[
                "Pakala",
                "Ramchandrapuram",
                "Chinnagottigallu",
                "Chandragiri",
                "Yerravanipalem",
                "Tirupathi (Rural)",
              ]}
              chartColors={[completedColor, pendingColor]}
              chartData={[
                {
                  name: "Completed",
                  data: [21, 7, 25, 13, 22, 8],
                },
                {
                  name: "Pending",
                  data: [7, 7, 5, 13, 7, 3],
                },
              ]}
            />{" "}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <PieChartWidget
              title="Age Wise Voters"
              chartData={[
                { label: "18-25", value: 4344 },
                { label: "25-35", value: 5435 },
                { label: "35-45", value: 2452 },
                { label: "45-55", value: 1443 },
                { label: "55-65", value: 2415 },
                { label: "65+", value: 1443 },
              ]}
              chartColors={[Age1Color, Age2Color, Age3Color, Age4Color, Age5Color, Age6Color]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <PieChartWidget
              title="New Voter Registrations"
              chartData={[
                { label: "New Registrations", value: 9582 },
                { label: "Pending", value: 2542 },
                { label: "Resolved", value: 3698 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <PieChartWidget
              title="Residental Status"
              chartData={[
                { label: "Residental", value: 9582 },
                { label: "Non Residental", value: 2542 },
              ]}
            />
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

export default connect(mapStateToProps, null)(DashboardApp);
