import { TextField, Box, InputAdornment } from "@mui/material";
import { Email } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { loginEmail } from "../../loginSlice";

export type InputStepProps = {
  isError: boolean;
  onError: React.Dispatch<React.SetStateAction<boolean>>;
};

function EmailStep({ isError, onError }: InputStepProps) {
  const enteredEmail = useAppSelector((state) => state.login.email);
  const dispatch = useAppDispatch();

  const inputBlurHandler = () => {
    if (enteredEmail.length <= 0 || !enteredEmail.includes("@")) {
      onError(true);
      return;
    }
    onError(false);
  };

  return (
    <>
      <Box sx={{ width: "100%", marginY: "1rem" }}>
        <TextField
          autoFocus={true}
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
export default EmailStep;
