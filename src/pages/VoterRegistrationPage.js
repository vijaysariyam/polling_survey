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

const VoterRegistrationPage = ({ dashboard }) => {
  return (
    <Page title="Voter Registration">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Add Voter
        </Typography>

        <Card sx={{ p: 3 }}>
          <Typography sx={{ pb: 2 }}>Basic Info</Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              lg={2}
              sx={{
                marginLeft: "14px",
              }}
            >
              <FormControlLabel
                control={<CheckBox />}
                label={
                  <Typography style={{ marginLeft: "10px" }}>
                    Is New Voter?
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Voter Name *" fullWidth />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Guardian:
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="father"
                  name="radio-buttons-group"
                  row
                >
                  <FormControlLabel
                    value="father"
                    control={<Radio />}
                    label="Father"
                  />
                  <FormControlLabel
                    value="mother"
                    control={<Radio />}
                    label="Mother"
                  />
                  <FormControlLabel
                    value="husband"
                    control={<Radio />}
                    label="Husband"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Guardian Name *" fullWidth />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Voter ID *" fullWidth />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Gender" fullWidth select />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Age *" fullWidth />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Volunteer ID *" fullWidth select />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Gruhasaradhi ID *" fullWidth select />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Phone Number *" fullWidth select />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              sx={{
                marginLeft: "14px",
              }}
            >
              <FormControlLabel
                control={<CheckBox />}
                label={
                  <Typography style={{ marginLeft: "10px" }}>
                    Resident
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                label="Permenent Address 1 *"
                fullWidth
                multiline
                rows={4}
                rowsMax={8}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                label="Current Address 1 *"
                fullWidth
                multiline
                rows={4}
                rowsMax={8}
              />
            </Grid>
          </Grid>
        </Card>

        <Card sx={{ p: 3, mt: 3 }}>
          <Typography sx={{ pb: 2 }}>Assign Authority</Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="State ID *" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Consistency ID *" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Mandal ID *" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Division ID*" fullWidth select />
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
              <TextField label="Part No *" fullWidth select />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Part SL No" fullWidth />
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

export default connect(mapStateToProps, null)(VoterRegistrationPage);
