import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import type { InputStepProps } from "./EmailStep";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { loginPassword } from "../../loginSlice";
function PasswordStep({ isError, onError }: InputStepProps) {
  const enteredPassword = useAppSelector((state) => state.login.password);
  const [isPasswordVisibile, setIsPasswordVisibile] = useState(false);
  const dispatch = useAppDispatch();

  const inputBlurHandler = () => {
    if (enteredPassword.length === 0) {
      onError(true);
      return;
    }
    onError(false);
  };

  const changePasswordVisibility = () => {
    setIsPasswordVisibile(!isPasswordVisibile);
  };

  return (
    <>
      <Box sx={{ width: "100%", marginY: "1rem" }}>
        <TextField
          autoFocus={true}
          label="Password"
          fullWidth={true}
          value={enteredPassword}
          error={isError}
          type={isPasswordVisibile ? "text" : "password"}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={changePasswordVisibility}>
                    {isPasswordVisibile ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          helperText={isError ? "You need to write a valid password" : ""}
          onChange={(event) => dispatch(loginPassword(event.target.value))}
          onBlur={inputBlurHandler}
        />
      </Box>
    </>
  );
}
export default PasswordStep;
