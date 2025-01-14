import { Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
interface StepButtonProps {
  onClick: () => void;
  disabled: boolean;
  text?: string;
  isSubmit?: boolean;
}

function StepButton({ onClick, disabled, text, isSubmit }: StepButtonProps) {
  const theme = useTheme();
  return (
    <Box>
      <Button
        type={isSubmit ? "submit" : "button"}
        disabled={disabled}
        onClick={onClick}
        sx={{
          width: "100%",
          marginTop: "1rem",
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.primary.main,
          textAlign: "center",
        }}
      >
        {text ? text : "Next"}
      </Button>
    </Box>
  );
}
export default StepButton;
