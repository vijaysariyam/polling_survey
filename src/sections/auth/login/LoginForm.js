import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Iconify from "../../../components/Iconify";
import { FormProvider, RHFTextField } from "../../../components/hook-form";
import { connect } from "react-redux";
import { authSuccess } from "../../../actions/auth";
import { showAlert } from "../../../actions/alert";

const LoginForm = ({ showAlert, authSuccess }) => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const defaultValues = {
    username: "",
    password: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    setLoading(true);
    alert("New user? Secure your account by resetting your password.");
    showAlert({
      text: "New user? Secure your account by resetting your password.",
      color: "success",
    });

    if(data.username === "admin" && data.password === "admin123") {
      navigate("/dashboard");
      return;
    }
    navigate("/reset-password");
    setLoading(false);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <RHFTextField
          name="username"
          label="Mobile number"
          onChange={() => {
            setUserDetails({
              ...userDetails,
              username: methods.getValues("username"),
            });
          }}
        />

        <RHFTextField
          name="password"
          label="Password"
          onChange={() => {
            setUserDetails({
              ...userDetails,
              password: methods.getValues("password"),
            });
          }}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <img
          className="captcha-image"
          src="https://miro.medium.com/v2/resize:fit:1024/0*obnHri9w__4Cmhbj.jpg"
          alt="captcha"
        />

        <RHFTextField name="captcha" label="Enter Captcha" />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="end"
        sx={{ my: 2 }}
      >
        <Link to="/forget-password" variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        loading={isLoading}
        size="large"
        type="submit"
        variant="contained"
      >
        Login
      </LoadingButton>
    </FormProvider>
  );
};

export default connect(null, { showAlert, authSuccess })(LoginForm);
