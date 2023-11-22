import { useEffect, useState } from "react";
import { Grid, Container, Typography, CircularProgress, Box, TextField, Card, CardHeader, Button } from "@mui/material";
import Page from "../components/Page";
import AppWidgetSummary from "../components/AppWidgetSummary";
import CardTileWidget from "../components/CardTileWidget";
import { connect } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { PieChartWidget } from "../sections/dashboard";
import BarChartWidget from "../sections/dashboard/BarChartWidget";

const DashboardApp = ({ dashboard }) => {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Card sx={{ p: 3 }}>
          <Typography sx={{ pb: 2 }}>Search by filter</Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Select Mandal" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Select Dvision" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Select Sachivalayam" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Select Part No" fullWidth select />
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
            />
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
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <PieChartWidget
              title="Survey Status"
              chartData={[
                { label: "Started", value: 6966 },
                { label: "Not Started", value: 2542 },
                { label: "Completed", value: 1443 },
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

          <Grid item xs={12} md={6} lg={4}>
            <BarChartWidget
              title="Ticktes"
              sx={{ height: "100%" }}
              chartData={[
                { label: "Pakala", value: 400 },
                { label: "Ramchandrapuram", value: 430 },
                { label: "Chinnagottigallu", value: 448 },
                { label: "Chandragiri", value: 470 },
                { label: "Yerravanipalem", value: 540 },
                { label: "Tirupathi (Rural)", value: 580 },
              ]}
            />{" "}
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
