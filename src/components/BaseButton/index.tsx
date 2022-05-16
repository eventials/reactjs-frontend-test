import Button from "@mui/material/Button";

export interface BaseButtonProps {
  onClick: () => void;
  text: string;
  variant?: "text" | "contained" | "outlined";
}

export default function BaseButton({
  text,
  variant,
  onClick,
}: BaseButtonProps) {
  return (
    <Button variant={variant || "contained"} onClick={onClick}>
      {text}
    </Button>
  );
}
