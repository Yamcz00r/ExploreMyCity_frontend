import { IconButton, Paper, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowBack, Close } from "@mui/icons-material";
import { useAppDispatch } from "../hooks";
import { resetLoginValues } from "../loginSlice";
type StepProps = {
  children?: React.ReactNode;
  currentStep: number;
  handleStepChange: React.Dispatch<React.SetStateAction<number>>;
  handleClose: () => void;
};

function Wizard({
  children,
  handleStepChange,
  currentStep,
  handleClose,
}: StepProps) {
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
            onClick={handleBackStep}
          >
            <ArrowBack />
          </IconButton>
        </Box>
      ) : (
        ""
      )}
      {children}
    </Paper>
  );
}

export default Wizard;
