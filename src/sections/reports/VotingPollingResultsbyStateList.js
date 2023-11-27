import { useEffect, useState } from "react";
import "@fontsource/inter";
import {
  Typography,
  Card,
  Stack,
  Grid,
  Switch,
  Divider,
  Box,
  Chip,
  Radio,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import { CheckBox } from "@mui/icons-material";
import Button from "@mui/material/Button";
import MUIDataTable from "mui-datatables";
import { connect } from "react-redux";
import { showAlert } from "../../actions/alert";
import { LoadingButton } from "@mui/lab";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const VotingPollingResultsbyStateList = ({ showAlert }) => {
  useEffect(() => {}, []);

  const columns = [
    {
      label: "Distract Name",
    },
    {
      label: "Constituency Name",
    },
    {
      label: "MLA Name",
    },
    {
      label: "Constituency Votes",
    },
    {
      label: "YCP Survey",
    },
    {
      label: "Voting",
    },
    {
      label: "% of Votes",
    },
    {
      label: "% of Polling",
    },

    {
      label: "Others",
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
          title=""
          columns={columns}
          data={[
            [
              "Distract Name",
              "Constituency Name",
              "MLA Name",
              "Constituency Votes",
              "YCP Survey",
              "Voting",
              "% of Votes",
              "% of Polling",
              "Others",
            ],
            [
              "Distract Name",
              "Constituency Name",
              "MLA Name",
              "Constituency Votes",
              "YCP Survey",
              "Voting",
              "% of Votes",
              "% of Polling",
              "Others",
            ],
            [
              "Distract Name",
              "Constituency Name",
              "MLA Name",
              "Constituency Votes",
              "YCP Survey",
              "Voting",
              "% of Votes",
              "% of Polling",
              "Others",
            ],
            [
              "Distract Name",
              "Constituency Name",
              "MLA Name",
              "Constituency Votes",
              "YCP Survey",
              "Voting",
              "% of Votes",
              "% of Polling",
              "Others",
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
})(VotingPollingResultsbyStateList);
