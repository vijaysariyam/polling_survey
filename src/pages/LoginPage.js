import { styled } from "@mui/material/styles";
import { Link, Container, Typography, Divider, Box, Button, Card } from "@mui/material";
import Logo from "../components/logo";
import { LoginForm } from "../sections/auth/login";
import Page from "../components/Page";

const StyledRoot = styled("div")(({ theme }) => ({
  background: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5)) center center / cover no-repeat, url('static/assets/overlay_1.jpg')",
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

export default function LoginPage() {
  return (
    <Page title="Login">
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
              <Box sx={{ pb: 2, display: "flex", justifyContent: "center" }}>
                <Box component="img" src="/static/assets/users.png" sx={{ width: 100, height: 100 }} />
              </Box>

              <Typography variant="h4" gutterBottom>
                Sign in
              </Typography>

              <Typography sx={{ color: "text.secondary", mb: 5 }}>Enter your credentials to continue</Typography>

              <LoginForm />
            </Card>
          </StyledContent>
        </Container>
      </StyledRoot>
    </Page>
  );
}
