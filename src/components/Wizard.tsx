import { IconButton, Paper, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowBack, Close } from "@mui/icons-material";
import { useAppDispatch } from "../hooks";
import { resetLoginValues } from "../loginSlice";
import { FormEvent } from "react";
type WizardProps = {
  children?: React.ReactNode;
  currentStep: number;
  handleStepChange: React.Dispatch<React.SetStateAction<number>>;
  handleClose: () => void;
  handleWizardComplete: () => void;
};

function Wizard({
  children,
  handleStepChange,
  currentStep,
  handleClose,
  handleWizardComplete,
}: WizardProps) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const handleBackStep = () => {
    if (currentStep == 0) {
      return;
    }
    handleStepChange((prevStep) => prevStep - 1);
  };

  const handleCloseWizard = () => {
    dispatch(resetLoginValues());
    handleClose();
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleWizardComplete();
    dispatch(resetLoginValues());
  };

  return (
    <Paper
      elevation={3}
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "20px",
        width: "35%",
        paddingX: "1rem",
        paddingY: "2rem",
      }}
    >
      <form onSubmit={handleSubmit}>
        {currentStep === 0 ? (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              onClick={handleCloseWizard}
            >
              <Close />
            </IconButton>
          </Box>
        ) : (
          ""
        )}
        {currentStep !== 0 ? (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              onClick={handleBackStep}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              sx={{
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              onClick={handleCloseWizard}
            >
              <Close />
            </IconButton>
          </Box>
        ) : (
          ""
        )}
        {children}
      </form>
    </Paper>
  );
}

export default Wizard;
