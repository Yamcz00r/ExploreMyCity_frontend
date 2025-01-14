import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StepButton from "./StepButton";
type StepProps = {
  children?: React.ReactNode;
  handleStepChange: () => void;
  disabled: boolean;
  isActive: boolean;
  title: string;
  buttonTitle?: string;
  buttonType?: string;
};

function Step({
  children,
  handleStepChange,
  disabled,
  isActive,
  title,
  buttonTitle,
  buttonType,
}: StepProps) {
  const theme = useTheme();
  return (
    <>
      {isActive && (
        <>
          <Box sx={{ width: "100%", marginY: "1rem" }}>
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 700,
                textAlign: "justify",
                fontSize: "1.2rem",
              }}
            >
              {title}
            </Typography>
          </Box>
          {children}
          <StepButton
            disabled={disabled}
            onClick={handleStepChange}
            text={buttonTitle}
            isSubmit={buttonType === "submit"}
          />
        </>
      )}
    </>
  );
}
export default Step;
