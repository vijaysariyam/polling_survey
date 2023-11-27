import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Iconify from "../../../components/Iconify";
import { FormProvider, RHFTextField } from "../../../components/hook-form";
import { connect } from "react-redux";
import { showAlert } from "../../../actions/alert";
import { isOtpValid } from "../../../constants";

const ForgetForm = ({ showAlert }) => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);

  const [otpSent, setOtpSent] = useState(null);
  const [otp, setOtp] = useState(null);
  const [otpError, setOtpError] = useState();

  const [formValues, setFormValues] = useState(null);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Phone Number is required"),
  });

  const defaultValues = {
    username: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    setLoading(true);
    // showAlert({ text: "We will sent reset password link to your email.", color: "success" });
    // navigate("/reset-password");

    setOtpSent("123456");
    setFormValues(data);
    setLoading(false);
  };

  const onOtpSubmit = async () => {
    setOtpError(null);

    if (!isOtpValid(otp)) {
      setOtpError("OTP must be 6 characters");
      return;
    }

    if (otp != otpSent) {
      setOtpError("Invalid OTP");
      return;
    }

    setLoading(true);
    navigate("/reset-password", { replace: true });
    setLoading(false);
  };

  if (!!otpSent) {
    return (
      <Stack spacing={3}>
        <Typography gutterBottom variant="body2" sx={{ color: "text.secondary" }}>
          Enter the OTP sent to +91 - 1234567890
        </Typography>

        <TextField name="otp" label="OTP" fullWidth error={!!otpError} helperText={otpError} onChange={(e) => setOtp(e.target.value)} />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isLoading} onClick={onOtpSubmit}>
          Verify
        </LoadingButton>
      </Stack>
    );
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack my={3} spacing={3}>
        <RHFTextField name="username" label="Phone" />
      </Stack>

      <LoadingButton fullWidth loading={isLoading} size="large" type="submit" variant="contained">
        Verify
      </LoadingButton>
    </FormProvider>
  );
};

export default connect(null, { showAlert })(ForgetForm);
