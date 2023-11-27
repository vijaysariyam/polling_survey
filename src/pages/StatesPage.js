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
  import StatesList from "../sections/reports/StatesList";
  
  const StatesPage = ({ dashboard }) => {
    return (
      <Page title="View User">
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 5 }}>
         States
          </Typography>
  
          <Card sx={{ p: 3 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6} lg={9}>
                <StatesList />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
               
                <TextField label="State Name" fullWidth />
                <LoadingButton
                  variant="contained"
                  sx={{
                    padding: "15px",
                  }}
                >
                  Add
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
  
  export default connect(mapStateToProps, null)(StatesPage);
  