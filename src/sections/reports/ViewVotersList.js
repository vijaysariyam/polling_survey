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
import { CheckBox } from "@mui/icons-material";
import MUIDataTable from "mui-datatables";
import { connect } from "react-redux";
import { showAlert } from "../../actions/alert";
import { LoadingButton } from "@mui/lab";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ViewVotersList = ({ showAlert }) => {
  useEffect(() => {}, []);

  const columns = [
    {
      label: "Voter ID",
    },
    {
      label: "Voter Name",
    },
    {
      label: "Father/Mother/Husband",
    },
    {
      label: "Is Resident",
    },
    {
      label: "Phone",
    },

    {
      label: "Email",
    },
    {
      label: "Edit/Delete",
    },
  ];

  const options = {
    elevation: 0,
    selectableRows: "none",
    responsive: "standard",
  };

  const renderEditAndDelete = () => {
    return (
      <Box>
        <EditNoteIcon
          sx={{
            color: "#1976d2",
          }}
        />
        <DeleteForeverIcon
          sx={{
            color: "#f44336",
            marginLeft: "10px",
          }}
        />
      </Box>
    );
  };

  return (
    <Card elevation={1}>
      <Stack>
        <Divider />

        <MUIDataTable
          title="Voter List"
          columns={columns}
          data={[
            [
              "5454",
              "Voter 1",
              "Rama",
              "Yes",
              "Cell 1",
              "user1@example.com",
              renderEditAndDelete(),
            ],
            [
              "656456",
              "Voter 1",
              "Sita",
              "Yes",
              "Cell 1",
              "user1@example.com",
              renderEditAndDelete(),
            ],
            [
              "654646",
              "Voter 1",
              "laxman",
              "No",
              "Cell 1",
              "user1@example.com",
              renderEditAndDelete(),
            ],
            [
              "656456456",
              "Voter 1",
              "Bharath",
              "No",
              "Cell 1",
              "user1@example.com",
              renderEditAndDelete(),
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
})(ViewVotersList);
