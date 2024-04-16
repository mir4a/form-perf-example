import React from "react";
import { Control, Controller } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, FormHelperText } from "@mui/material";
import { red } from "@mui/material/colors";

type Props = {
  control: Control<any>;
  name: string;
  label: string;
  error?: string;
};

export const CheckboxField = ({ control, error, name, label }: Props) => {
  return (
    <FormControl error={!!error} className="mb-4">
      <FormControlLabel
        label={label}
        control={
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <Checkbox
                {...field}
                sx={{
                  color: error ? red[700] : "inherit",
                }}
              />
            )}
          />
        }
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
