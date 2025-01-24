import {
  TextField,
  Box,
  InputAdornment,
  Divider,
  Typography,
} from "@mui/material";
import { Email } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { loginEmail } from "../../wizardSlice";
import { useTheme } from "@mui/material/styles";
import GoogleRedirect from "./GoogleRedirect";
import FacebookRedirect from "./FacebookRedirect";
export type InputStepProps = {
  isError: boolean;
  onError: React.Dispatch<React.SetStateAction<boolean>>;
};

interface SpecialStepProps extends InputStepProps {
  closeWizard: () => void;
}

function WelcomeStep({ isError, onError, closeWizard }: SpecialStepProps) {
  const enteredEmail = useAppSelector((state) => state.wizard.email);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const inputBlurHandler = () => {
    if (enteredEmail.length <= 0 || !enteredEmail.includes("@")) {
      onError(true);
      return;
    }
    onError(false);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <GoogleRedirect closeWizard={closeWizard} />
        <FacebookRedirect closeWizard={closeWizard} />
      </Box>
      <Divider sx={{ marginY: "2rem" }}>
        <Typography color={theme.palette.text.secondary}>
          Login with your email
        </Typography>
      </Divider>
      <Box sx={{ width: "100%", marginY: "1rem" }}>
        <TextField
          fullWidth
          value={enteredEmail}
          error={isError}
          label="Email"
          onBlur={inputBlurHandler}
          placeholder="Write your email"
          helperText={isError ? "You must enter a valid email address" : ""}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Email />
                </InputAdornment>
              ),
            },
          }}
          onChange={(event) => {
            dispatch(loginEmail(event.target.value));
          }}
        />
      </Box>
    </>
  );
}
export default WelcomeStep;
