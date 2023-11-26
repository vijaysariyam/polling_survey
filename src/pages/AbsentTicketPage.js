import {
  Grid,
  Container,
  Typography,
  Box,
  TextField,
  Card,
  InputAdornment,
} from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";

import Page from "../components/Page";
import { connect } from "react-redux";
import { LoadingButton } from "@mui/lab";

const AbsentTicketPage = ({ dashboard }) => {
  return (
    <Page title="Add Ticket">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Absent Ticket
        </Typography>

        <Card sx={{ p: 3, mt: 3 }}>
          <Typography sx={{ pb: 2 }}>Voting Absent Reason:</Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={12}>
              <TextField
                label="Write Reason..."
                fullWidth
                multiline
                rows={4}
                rowsMax={8}
              />
            </Grid>{" "}
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

export default connect(mapStateToProps, null)(AbsentTicketPage);
