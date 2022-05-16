import Button from "@mui/material/Button";
export interface BaseButtonProps {
  onClick: () => void;
  text: string;
  variant?: "text" | "contained" | "outlined";
  endIcon?: React.ReactNode;
}

export default function BaseButton({
  text,
  variant,
  onClick,
  endIcon,
  ...props
}: BaseButtonProps) {
  return (
    <Button
      variant={variant || "contained"}
      onClick={onClick}
      {...props}
      endIcon={endIcon && endIcon}
    >
      {text}
    </Button>
  );
}
