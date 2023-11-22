import { useState } from "react";
import { alpha } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from "@mui/material";
import { connect } from "react-redux";
import { authLogout } from "../../../actions/auth";

const AccountPopover = ({ account, authLogout }) => {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = () => {
    authLogout();
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar sx={{ bgcolor: "primary.main" }}>A</Avatar>
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {"Admin"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {"Admin"}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem to={"/login"} component={RouterLink} onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.auth,
  };
};

export default connect(mapStateToProps, { authLogout })(AccountPopover);
