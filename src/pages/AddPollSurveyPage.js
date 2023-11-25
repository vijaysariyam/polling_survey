import {
  Grid,
  Container,
  Typography,
  Box,
  TextField,
  Card,
  FormControlLabel,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Page from "../components/Page";
import { connect } from "react-redux";
import { LoadingButton } from "@mui/lab";

import { CheckBox } from "@mui/icons-material";

const AddPollSurveyPage = ({ dashboard }) => {
  return (
    <Page title="Voter Registration">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Add Poll Survey
        </Typography>

        <Card sx={{ p: 3, mt: 3 }}>
          <Typography sx={{ pb: 2 }}>Basic Info</Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Volunteer Name" fullWidth />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Voter List *" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Interested Party" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Voted Party" fullWidth select />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              sx={{
                marginLeft: "auto",
                marginTop: "55px",
              }}
            >
              <LoadingButton
                variant="contained"
                sx={{
                  padding: "15px 45px",
                  margin: "0px 0px 0px 0px",
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

export default connect(mapStateToProps, null)(AddPollSurveyPage);
