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
import { FormProvider, RHFTextField } from "../../../components/hook-form";
import { connect } from "react-redux";
import { showAlert } from "../../../actions/alert";

const ResetForm = ({ showAlert }) => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    opassword: Yup.string().required("Old Password is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    cpassword: Yup.string().required("Confirm Password is required"),
  });

  const defaultValues = {
    opassword: "",
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

    // check if user already change there old auto genarated password or not

    navigate("/login", { replace: true });
    setLoading(false);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack my={3} spacing={3}>
        <RHFTextField name="opassword" label="Old Password" />

        <RHFTextField name="password" label="Password" type="password" />

        <RHFTextField name="cpassword" label="Confirm Password" />
      </Stack>

      <LoadingButton
        fullWidth
        loading={isLoading}
        size="large"
        type="submit"
        variant="contained"
      >
        Submit
      </LoadingButton>
    </FormProvider>
  );
};

export default connect(null, { showAlert })(ResetForm);
