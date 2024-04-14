import React from "react";
import { Controller, Form } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

type Props = {
  control: any;
  name: string;
  label: string;
  options: { label: string; value: string }[];
};

export const SelectField = ({ control, name, label, options }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel id={name}>{label}</InputLabel>
          <Select {...field} label={label} fullWidth variant="outlined">
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};
