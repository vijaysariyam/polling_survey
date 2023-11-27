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
  FormControlLabel,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import MUIDataTable from "mui-datatables";
import { connect } from "react-redux";
import { showAlert } from "../../actions/alert";
import { LoadingButton } from "@mui/lab";
import ViewUserPage from "../../pages/ViewUserPage";

const UserMappingList = ({ showAlert }) => {
  useEffect(() => {}, []);

  const columns = [
    {
      label: "Select",
    },
    {
      label: "User ID",
    },
    {
      label: "User Name",
    },
    {
      label: "Email",
    },

    {
      label: "Phone",
    },
  ];

  const options = {
    elevation: 0,
    selectableRows: "none",
    responsive: "standard",
  };
  const renderCheckBox = () => {
    return <CheckBox />;
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
              renderCheckBox(),
              "IAX1916410",
              "SAMEEULLA SYED",
              "user123@gmail.com",
              "912345678",
            ],
            [
              renderCheckBox(),
              "IAX1916378",
              "ZEENAT SYED ",
              "user123@gmail.com",
              "912345678",
            ],
            [
              renderCheckBox(),
              "IAX1897867",
              "SEEMA S",
              "user123@gmail.com",
              "912345678",
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
})(UserMappingList);
