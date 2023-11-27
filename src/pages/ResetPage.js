import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Divider,
  Stack,
  Button,
  Card,
} from "@mui/material";
import Logo from "../components/logo";
import { ResetForm } from "../sections/auth/forget";
import Page from "../components/Page";
import { PUBLIC_URL } from "../constants";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const StyledRoot = styled("div")(({ theme }) => ({
  background:
    "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5)) center center / cover no-repeat, url('" +
    PUBLIC_URL +
    "/static/images/crowd.jpg') no-repeat center",
  backgroundSize: "cover",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

export default function ResetPage() {
  return (
    <Page title="Reset Password">
      <StyledRoot>
        <Logo
          sx={{
            position: "fixed",
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        <Container maxWidth="sm">
          <StyledContent>
            <Card sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
              <Typography variant="h4" sx={{ mb: 5 }} gutterBottom>
                <Link
                  to="/login"
                  sx={{
                    mr: 2,
                    cursor: "pointer",
                  }}
                >
                  <ArrowBackIcon
                    sx={{
                      mr: 2,
                    }}
                  />
                </Link>
                Reset Password
              </Typography>

              <Typography sx={{ color: "text.secondary", mb: 5 }}>
                Secure your account by resetting your password
              </Typography>

              <ResetForm />
            </Card>
          </StyledContent>
        </Container>
      </StyledRoot>
    </Page>
  );
}
