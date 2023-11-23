import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";
import { PUBLIC_URL } from "../../constants";

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Box
      component="img"
      src={PUBLIC_URL + "/static/logo.png"}
      sx={{ width: 60, height: 60, ...sx }}
    />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
