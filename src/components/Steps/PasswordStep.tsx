import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import type { StepProps } from "./EmailStep";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { loginPassword } from "../../loginSlice";
import StepButton from "./StepButton";
function PasswordStep({ nextStep, currentStep }: StepProps) {
  const theme = useTheme();
  const enteredPassword = useAppSelector((state) => state.login.password);
  const [password, setPassword] = useState(enteredPassword);
  const [isPasswordVisibile, setIsPasswordVisibile] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useAppDispatch();

  const passwordBlurHandler = () => {
    if (password.length <= 0) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const changePasswordVisibility = () => {
    setIsPasswordVisibile(!isPasswordVisibile);
  };

  return (
    <>
      {currentStep === 1 ? (
        <>
          <Box sx={{ width: "100%", marginY: "1rem" }}>
            <Typography
              sx={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: theme.palette.text.primary,
                textAlign: "justify",
              }}
            >
              Write your password
            </Typography>
          </Box>
          <Box sx={{ width: "100%", marginY: "1rem" }}>
            <TextField
              autoFocus={true}
              label="Password"
              fullWidth={true}
              value={password}
              error={passwordError}
              type={isPasswordVisibile ? "text" : "password"}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={changePasswordVisibility}>
                        {isPasswordVisibile ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              helperText={
                passwordError ? "You need to write a valid password" : ""
              }
              onChange={(event) => setPassword(event.target.value)}
              onBlur={passwordBlurHandler}
            />
          </Box>
          <StepButton
            onClick={() => console.log("log")}
            disabled={passwordError}
            text="Login"
          />
        </>
      ) : null}
    </>
  );
}
export default PasswordStep;
