import { useEffect, useState } from "react";
import {
  Typography,
  Card,
  Stack,
  Grid,
  Switch,
  Divider,
  Box,
  Chip,
  TextField,
} from "@mui/material";

import MUIDataTable from "mui-datatables";
import { connect } from "react-redux";
import { showAlert } from "../../actions/alert";
import { LoadingButton } from "@mui/lab";

const VotingPollingReportsList = ({ showAlert }) => {
  useEffect(() => {}, []);

  const columns = [
    {
      label: "District Name",
    },
    {
      label: "Constituency Name",
    },
    {
      label: "MLA Candidate Votes",
    },
    {
      label: "Constituency Votes",
    },
    {
      label: "Polled Votes",
    },

    {
      label: "%",
    },
    {
      label: "Others",
    },
    {
      label: "%",
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
        <Divider />

        <MUIDataTable
          title="Voting Polling Reports"
          columns={columns}
          data={[
            [
              "District 1",
              "Constituency 1",
              "MLA Candidate Votes",
              "Constituency Votes",
              "Polled Votes",
              "%",
              "Others",
              "%",
            ],
            [
              "District 1",
              "Constituency 1",
              "MLA Candidate Votes",
              "Constituency Votes",
              "Polled Votes",
              "%",
              "Others",
              "%",
            ],
            [
              "District 1",
              "Constituency 1",
              "MLA Candidate Votes",
              "Constituency Votes",
              "Polled Votes",
              "%",
              "Others",
              "%",
            ],
            [
              "District 1",
              "Constituency 1",
              "MLA Candidate Votes",
              "Constituency Votes",
              "Polled Votes",
              "%",
              "Others",
              "%",
            ],
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
})(VotingPollingReportsList);
