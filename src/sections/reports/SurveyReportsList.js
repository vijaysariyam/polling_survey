import { useEffect, useState } from "react";
import { Typography, Card, Stack, Grid, Switch, Divider, Box, Chip, TextField } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { connect } from "react-redux";
import { showAlert } from "../../actions/alert";
import { LoadingButton } from "@mui/lab";

const SurveyReportsList = ({ showAlert }) => {
  useEffect(() => {}, []);

  const columns = [
    {
      label: "District Name",
    },
    {
      label: "Constituency Name",
    },
    {
      label: "YCP (Votes)",
    },
    {
      label: "YCP (%)",
    },
    {
      label: "TDP (Votes)",
    },
    {
      label: "TDP (%)",
    },

    {
      label: "JSP (Votes)",
    },
    {
      label: "JSP (%)",
    },
    {
      label: "BJP (Votes)",
    },
    {
      label: "BJP (%)",
    },
    {
      label: "Others (Votes)",
    },
    {
      label: "Others (%)",
    },
  ];

  const options = {
    elevation: 0,
    selectableRows: "none",
    responsive: "standard",
  };

  return (
    <Card elevation={1}>
      <Stack>
        <Box p={3}>
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
        </Box>

        <Divider />

        <MUIDataTable
          title="Survey Analysis"
          columns={columns}
          data={[
            ["District 1", "Constituency 1", "2522", "69%", "888", "24%", "699", "5%", "455", "4%", "230", "2%"],
            ["District 1", "Constituency 1", "1234", "64%", "888", "24%", "-", "-", "-", "-", "-", "-"],
            ["District 2", "Constituency 2", "1422", "49%", "888", "24%", "-", "-", "455", "4%", "230", "2%"],
            ["District 2", "Constituency 2", "2522", "59%", "888", "24%", "-", "-", "455", "4%", "230", "2%"],
          ]}
          options={options}
        />
      </Stack>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    batches: state.common,
    students: state.management,
  };
};

export default connect(mapStateToProps, {
  showAlert,
})(SurveyReportsList);
