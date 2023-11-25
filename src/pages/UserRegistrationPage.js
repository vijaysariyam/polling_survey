import {
  Grid,
  Container,
  Typography,
  Box,
  TextField,
  Card,
  FormControlLabel,
} from "@mui/material";
import Page from "../components/Page";
import { connect } from "react-redux";
import { LoadingButton } from "@mui/lab";

import { CheckBox } from "@mui/icons-material";

const UserRegistrationPage = ({ dashboard }) => {
  return (
    <Page title="User Registration - New">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          User Registration
        </Typography>

        <Card sx={{ p: 3 }}>
          <Typography sx={{ pb: 2 }}>Basic Info</Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="User Display Name*" fullWidth />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="User Name *" fullWidth />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Password *" fullWidth />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Phone Number" fullWidth />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Office Phone Number" fullWidth />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Age *" fullWidth />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Email" fullWidth />
            </Grid>
          </Grid>
        </Card>

        <Card sx={{ p: 3, mt: 3 }}>
          <Typography sx={{ pb: 2 }}>Assign Authority</Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Designation ID *" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="State ID*" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Consistency ID *" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Mandal ID*" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Division ID *" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Sachivalayam ID *" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Booth ID *" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Village ID *" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Reporting Manager" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <LoadingButton variant="contained">Search</LoadingButton>
            </Grid>
          </Grid>
        </Card>

        <Card sx={{ p: 3, mt: 3 }}>
          <Typography sx={{ pb: 2 }}>Assign Authority</Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={2}>
              <FormControlLabel control={<CheckBox />} label="View" />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <FormControlLabel control={<CheckBox />} label="Add" />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <FormControlLabel control={<CheckBox />} label="Update" />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <FormControlLabel control={<CheckBox />} label="Delete" />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              lg={2}
              sx={{
                marginLeft: "auto",
              }}
            >
              <LoadingButton
                variant="contained"
                sx={{
                  padding: "15px 40px",
                }}
              >
                Submit
              </LoadingButton>
            </Grid>
          </Grid>
        </Card>

        <Box p={3} />
      </Container>
    </Page>
  );
};

const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, null)(UserRegistrationPage);
