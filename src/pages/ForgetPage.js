import { styled } from "@mui/material/styles";
import { Link, Container, Typography, Divider, Stack, Button, Card } from "@mui/material";
import Logo from "../components/logo";
import { ForgetForm } from "../sections/auth/forget";
import Page from "../components/Page";
import { PUBLIC_URL } from "../constants";

const StyledRoot = styled("div")(({ theme }) => ({
  background: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5)) center center / cover no-repeat, url('" + PUBLIC_URL + "/static/images/crowd.jpg') no-repeat center",
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

export default function ForgetPage() {
  return (
    <Page title="Forget Password">
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
              <Typography variant="h4" gutterBottom>
                Forget Password
              </Typography>

              <Typography sx={{ color: "text.secondary", mb: 5 }}>Enter your details below to forget password</Typography>

              <ForgetForm />
            </Card>
          </StyledContent>
        </Container>
      </StyledRoot>
    </Page>
  );
}
