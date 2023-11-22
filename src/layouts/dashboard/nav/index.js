import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from "@mui/material";
import useResponsive from "../../../hooks/useResponsive";
import Logo from "../../../components/logo";
import Scrollbar from "../../../components/Scrollbar";
import NavSection from "../../../components/NavSection";
import navConfig from "./config";
import { connect } from "react-redux";

const NAV_WIDTH = 280;

const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

const Nav = ({ account, openNav, onCloseNav }) => {
  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar>
      <Box sx={{ px: 2.5, py: 3, display: "flex", justifyContent: "center" }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar>A</Avatar>

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                {"Admin"}
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {"Admin"}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <NavSection data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        bgcolor: "black",
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.auth,
  };
};

export default connect(mapStateToProps)(Nav);
