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

const VoterAndVolunteerMappingList = ({ showAlert }) => {
  useEffect(() => {}, []);

  const columns = [
    {
      label: "Voter ID",
    },
    {
      label: "Voter Name",
    },
    {
      label: "Father Name",
    },

    {
      label: "Cell",
    },

    {
      label: "Select",
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
              "IAX1916410",
              "SAMEEULLA SYED",
              "SILAR SAHEB SYED",
              "",
              renderCheckBox(),
            ],
            [
              "IAX1916378",
              "ZEENAT SYED ",
              "AMEEULLA SYED",
              "",
              renderCheckBox(),
            ],
            ["IAX1897867", "SEEMA S", "CHAN BASHA S", "", renderCheckBox()],
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
})(VoterAndVolunteerMappingList);
