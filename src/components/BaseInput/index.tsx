import { SxProps } from "@mui/material";
import TextField from "@mui/material/TextField";

export interface BaseInputProps {
  onChange: (value: any) => void;
  value: string;
  variant?: "outlined" | "filled" | "standard";
  label: string;
  sx: SxProps;
  type?: string;
}

export default function BaseInput({
  value,
  variant,
  label,
  onChange,
  sx,
  ...props
}: BaseInputProps) {
  return (
    <TextField
      label={label}
      variant={variant || "outlined"}
      sx={{ width: "100%", ...sx }}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
