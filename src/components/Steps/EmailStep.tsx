import { TextField, Typography, Box, InputAdornment } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Email } from "@mui/icons-material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { loginEmail } from "../../loginSlice";
import StepButton from "../Steps/StepButton";
export type StepProps = {
  nextStep: () => void;
  currentStep: number;
};

function EmailStep({ nextStep, currentStep }: StepProps) {
  const theme = useTheme();
  const enteredEmail = useAppSelector((state) => state.login.email);
  const [email, setEmail] = useState(enteredEmail);
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();

  const inputBlurHandler = () => {
    if (email.length == 0 || !email.includes("@")) {
      setError(true);
      return;
    }
    setError(false);
  };

  const nextStepChange = () => {
    if (error) {
      return;
    }
    dispatch(loginEmail(email));
    nextStep();
  };

  return (
    <>
      {currentStep === 0 ? (
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
              Create account or login
            </Typography>
          </Box>
          <Box sx={{ width: "100%", marginY: "1rem" }}>
            <TextField
              autoFocus={true}
              fullWidth
              value={email}
              error={error}
              label="Email"
              onBlur={inputBlurHandler}
              placeholder="Write your email"
              helperText={error ? "You must enter a valid email address" : ""}
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
                setEmail(event.currentTarget.value);
              }}
            />
          </Box>
          <StepButton onClick={nextStepChange} disabled={error} text="Next" />
        </>
      ) : null}
    </>
  );
}
export default EmailStep;
