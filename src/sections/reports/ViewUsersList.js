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
import ViewUserPage from "../../pages/ViewUserPage";

const ViewUsersList = ({ showAlert }) => {
  useEffect(() => {}, []);

  const columns = [
    {
      label: "Constituency Name",
    },
    {
      label: "User Name",
    },
    {
      label: "User Login Name",
    },
    {
      label: "Mandal Name",
    },
    {
      label: "Cell",
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

  return (
    <Card elevation={1}>
      <Stack>
        <Divider />

        <MUIDataTable
          title="Users List Table"
          columns={columns}
          data={[
            [
              "Constituency 1",
              "User 1",
              "user1",
              "Mandal 1",
              "Cell 1",
              "user1@example.com",
              "Edit",
            ],
            [
              "Constituency 1",
              "User 1",
              "user1",
              "Mandal 1",
              "Cell 1",
              "user1@example.com",
              "Edit",
            ],
            [
              "Constituency 1",
              "User 1",
              "user1",
              "Mandal 1",
              "Cell 1",
              "user1@example.com",
              "Edit",
            ],
            [
              "Constituency 1",
              "User 1",
              "user1",
              "Mandal 1",
              "Cell 1",
              "user1@example.com",
              "Edit",
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
})(ViewUsersList);
