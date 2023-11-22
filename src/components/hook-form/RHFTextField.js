import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

RHFTextField.propTypes = {
  name: PropTypes.string,
};

export default function RHFTextField({ name, onChange, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          onChange={(e) => {
            field.onChange(e.target.value);
            onChange && onChange(e);
          }}
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
