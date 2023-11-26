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

const ViewUserPage = ({ dashboard }) => {
  return (
    <Page title="View User">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          User List
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
              <TextField label="User Type" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Voter ID" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Voter Name" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <LoadingButton variant="contained">Search</LoadingButton>
            </Grid>
          </Grid>
        </Card>

        <Box p={3} />
        <ViewUsersList />
        <Card sx={{ p: 3, marginTop: "10px" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={6}>
              <Button
                variant="outlined"
                sx={{
                  color: "#EF8F50",
                  borderColor: "#EF8F50",
                  padding: "10px 35px",
                }}
              >
                Send Login Credentials
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              sx={{
                display: "flex",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  marginRight: "10px",
                  padding: "10px 35px",
                }}
              >
                Add
              </Button>
              <Button variant="outlined">Upload</Button>
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

export default connect(mapStateToProps, null)(ViewUserPage);
