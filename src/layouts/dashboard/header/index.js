import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { bgBlur } from "../../../utils/cssStyles";
import Iconify from "../../../components/Iconify";
import AccountPopover from "./AccountPopover";
import { PUBLIC_URL } from "../../../constants";

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: "text.primary",
            display: { lg: "none" },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <Box component="img" src={PUBLIC_URL + "/static/images/imgs-1.png"} sx={{ width: 60, height: 60 }} />

          <Box component="img" src={PUBLIC_URL + "/static/images/imgs-2.png"} sx={{ width: 60, height: 60 }} />

          <Box component="img" src={PUBLIC_URL + "/static/images/imgs-3.png"} sx={{ width: 60, height: 60 }} />

          <Box p={0.5} />

          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
