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

const ForgetForm = ({ showAlert }) => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
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
    showAlert({ text: "We will sent reset password link to your email.", color: "success" });
    navigate("/reset-password");
    setLoading(false);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack my={3} spacing={3}>
        <RHFTextField name="username" label="Username" />
      </Stack>

      <LoadingButton fullWidth loading={isLoading} size="large" type="submit" variant="contained">
        Verify
      </LoadingButton>
    </FormProvider>
  );
};

export default connect(null, { showAlert })(ForgetForm);
