import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface BaseInputProps {
  onChange: (value: any) => void;
  value: string;
  variant?: "outlined" | "filled" | "standard";
  label: string;
}

export default function BaseInput({
  value,
  variant,
  label,
  onChange,
}: BaseInputProps) {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant={variant || "outlined"}
      sx={{ width: "100%" }}
      value={value}
      onChange={onChange}
    />
  );
}
