import TextField from "@mui/material/TextField";
import { Control, Controller } from "react-hook-form";

type Props = {
  control: Control<any>;
  error?: string;
  name: string;
  label: string;
};
export const TextInput = ({ control, error, name, label }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          error={!!error}
          helperText={error}
          label={label}
          fullWidth
          margin="normal"
          variant="outlined"
          className="mb-4"
        />
      )}
    />
  );
};
