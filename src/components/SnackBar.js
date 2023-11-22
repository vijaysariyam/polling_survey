import React from "react";
import { connect } from "react-redux";
import { hideAlert } from "../actions/alert";
import { Snackbar, Alert, Typography, Slide } from "@mui/material";

function TransitionUp(props) {
  return <Slide {...props} direction="left" />;
}

const SnackBar = ({ alert, hideAlert }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    hideAlert();
  };

  return (
    <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={alert.open} autoHideDuration={3000} TransitionComponent={TransitionUp} onClose={handleClose}>
      <Alert severity={alert.color} sx={{ width: "100%", margin: "0px 20px" }} onClose={handleClose}>
        <Typography variant="body1">{alert.text}</Typography>
      </Alert>
    </Snackbar>
  );
};

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
  };
};

export default connect(mapStateToProps, { hideAlert })(SnackBar);
