import React from "react";
import { Control, Controller } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { FormHelperText } from "@mui/material";

type Props = {
  control: Control<any>;
  error?: string;
  name: string;
  label: string;
  options: { id: string; label: string; value: string }[];
};

export const SelectField = ({
  control,
  error,
  name,
  label,
  options,
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth error={!!error} className="mb-4">
          <InputLabel id={name}>{label}</InputLabel>
          <Select {...field} label={label}>
            {options.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};
