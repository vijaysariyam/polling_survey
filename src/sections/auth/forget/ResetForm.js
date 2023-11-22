import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormProvider, RHFTextField } from "../../../components/hook-form";
import { connect } from "react-redux";
import { showAlert } from "../../../actions/alert";

const ResetForm = ({ showAlert }) => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
  });

  const defaultValues = {
    username: "",
    password: "",
    cpassword: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    setLoading(true);
    navigate("/login");
    setLoading(false);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack my={3} spacing={3}>
        <RHFTextField name="username" label="Username" />

        <RHFTextField name="password" label="Password" type="password" />

        <RHFTextField name="cpassword" label="Confirm Password" />
      </Stack>

      <LoadingButton fullWidth loading={isLoading} size="large" type="submit" variant="contained">
        Submit
      </LoadingButton>
    </FormProvider>
  );
};

export default connect(null, { showAlert })(ResetForm);
