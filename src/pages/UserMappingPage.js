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

import UserMappingList from "../sections/reports/UserMappingList";
import Button from "@mui/material/Button";
import VoterAndVolunteerMappingList from "../sections/reports/VoterAndVolunteerMappingList";

const UserMappingPage = ({ dashboard }) => {
  return (
    <Page title="View User">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          User Mapping
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

        <Box p={3} />
        <UserMappingList />
        <Card sx={{ p: 3, marginTop: "10px" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Select Designation" fullWidth select />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Button
                variant="outlined"
                sx={{
                  padding: "15px 45px",
                }}
              >
                Assign Designation
              </Button>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Select Reporting Manager" fullWidth select />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Button
                variant="outlined"
                sx={{
                  padding: "15px 45px",
                }}
              >
                Assign Reporting Manager
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Page>
  );
};

const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, null)(UserMappingPage);
