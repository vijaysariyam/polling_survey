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
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const VotingPollSurveyResultsList = ({ showAlert }) => {
  useEffect(() => {}, []);

  const columns = [
    {
      label: "Mandal Name",
    },
    {
      label: "Division Name",
    },
    {
      label: "Sachivalayam Name",
    },
    {
      label: "Part No",
    },
    {
      label: "Village Name",
    },
    {
      label: "Total Votes",
    },
    {
      label: "YCP",
    },
    {
      label: "TDP",
    },
    {
      label: "JSP",
    },
    {
      label: "Congress",
    },
    {
      label: "BJP",
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

  const renderCheckBox = () => {
    return <CheckBox />;
  };
  const renderSubmitButton = () => {
    return <Button variant="outlined">Submit</Button>;
  };

  const renderStatusButton = () => {
    return (
      <TextField
        sx={{
          border: "none",
        }}
        id="Open"
        label="Open"
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
        select
      />
    );
  };

  const renderEditButton = () => {
    return <EditNoteIcon />;
  };

  const NeutralRadio = styled(Radio)({
    color: "grey",
    "&.Mui-checked": {
      color: "grey",
    },
  });

  const YCPRadio = styled(Radio)({
    color: "green",
    "&.Mui-checked": {
      color: "green",
    },
  });

  const TDPRadio = styled(Radio)({
    color: "yellow",
    "&.Mui-checked": {
      color: "yellow",
    },
  });

  const JSPRadio = styled(Radio)({
    color: "red",
    "&.Mui-checked": {
      color: "red",
    },
  });

  const BJPRadio = styled(Radio)({
    color: "orange",
    "&.Mui-checked": {
      color: "orange",
    },
  });

  const CongressRadio = styled(Radio)({
    color: "violet",
    "&.Mui-checked": {
      color: "violet",
    },
  });

  const OthersRadio = styled(Radio)({
    color: "black",
    "&.Mui-checked": {
      color: "black",
    },
  });

  const renderNeutralRadio = () => {
    return <NeutralRadio />;
  };

  const renderYCPRadio = () => {
    return <YCPRadio />;
  };

  const renderTDPRadio = () => {
    return <TDPRadio />;
  };
  const renderJSPRadio = () => {
    return <JSPRadio />;
  };
  const renderBJPRadio = () => {
    return <BJPRadio />;
  };

  const renderCongressRadio = () => {
    return <CongressRadio />;
  };
  const renderOthersRadio = () => {
    return <OthersRadio />;
  };

  const renderHighVote = () => {
    return (
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        45445{" "}
        {
          <KeyboardDoubleArrowUpIcon
            sx={{
              color: "red",
              fontSize: "30px",
            }}
          />
        }
      </Typography>
    );
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
              "Manadal 1",
              "Division 1",
              "Sachivalayam 1",
              "1",
              "Village 1",
              "24,22,082",

              "12115",
              renderHighVote(),
              "4545",
              "454",
              "4545",
              "45878",
            ],
            [
              "Manadal 2",
              "Division 2",
              "Sachivalayam 2",
              "2",
              "Village 2",

              "23,22,082",
              "2354545",
              "12115",
              "4545",
              "454",
              "4545",
              "45878",
            ],
            [
              "Manadal 3",
              "Division 3",
              "Sachivalayam 3",
              "3",
              "Village 3",

              "19,22,082",
              "2354545",
              "12115",
              "4545",
              "454",
              "4545",
              "45878",
            ],
            [
              "Manadal 4  ",
              "Division 4",
              "Sachivalayam 4",
              "4",
              "Village 4",
              "21,22,082",
              "2354545",
              "12115",
              "4545",
              "454",
              renderHighVote(),

              "45878",
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
})(VotingPollSurveyResultsList);
