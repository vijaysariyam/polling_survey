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



const AddTicketPage = ({ dashboard }) => {
  return (
    <Page title="Add Ticket">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Add Ticket
        </Typography>
        <Card sx={{ p: 3 }}>
          <Typography sx={{ pb: 2 }}>Basic Info</Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Navaratnalu ID" fullWidth select />
            </Grid>
          </Grid>
        </Card>
        <Card sx={{ p: 3, mt: 3 }}>
          <Typography sx={{ pb: 2 }}>Reason:</Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={12}>
              <TextField
                label="Write Reason..."
                fullWidth
                multiline
                rows={4}
                rowsMax={8}
              />
            </Grid>
          </Grid>
        </Card>
        <Card sx={{ p: 3, mt: 3 }}>
          <Typography sx={{ pb: 2 }}>Attachements Info</Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Select Attachment *"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CloudUploadRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Attachment Type *" fullWidth select />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField label="Attachment URL" fullWidth />
            </Grid>{" "}
            <Grid item xs={12} md={6} lg={3}>
              <AddCircleRoundedIcon
                sx={{
                  color: "#878F96",

                  marginLeft: "25px",
                  fontSize: "55px",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={9}>
              <TextField
                label="Attachements Description..."
                fullWidth
                multiline
                rows={4}
                rowsMax={8}
              />
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

export default connect(mapStateToProps, null)(AddTicketPage);
