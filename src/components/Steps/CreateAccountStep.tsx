import {
  Box,
  Select,
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import type { InputStepProps } from "./WelcomeStep";
import { ChangeEvent, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  setUserCountry,
  setUserName,
  setUserLastName,
  setUserPhoneNumber,
  setUserCountryCode,
} from "../../wizardSlice";
function CreateAccountStep({ onError }: InputStepProps) {
  const enteredPhoneNumber = useAppSelector(
    (state) => state.wizard.userData.phoneNumber
  );
  const enteredName = useAppSelector((state) => state.wizard.userData.name);
  const enteredLastName = useAppSelector(
    (state) => state.wizard.userData.lastName
  );
  const enteredCountry = useAppSelector(
    (state) => state.wizard.userData.country
  );
  const enteredCountryCode = useAppSelector(
    (state) => state.wizard.userData.countryCode
  );
  const dispatch = useAppDispatch();
  const [phoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const handleChangeCountryCode = (event: SelectChangeEvent) => {
    dispatch(setUserCountryCode(event.target.value));
  };
  const handleChangePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserPhoneNumber(event.target.value));
  };

  const handlePhoneBlur = () => {
    if (enteredCountryCode.length <= 0) {
      setPhoneError(true);
      onError(true);
      return;
    }
    setPhoneError(false);
    onError(false);
  };
  const handleCodeBlur = () => {
    if (enteredPhoneNumber.slice(0, 3).length <= 0) {
      setCodeError(true);
      onError(true);
      return;
    }
    setCodeError(false);
    onError(false);
  };
  const handleCountryBlur = () => {
    if (enteredCountry.length === 0) {
      setCountryError(true);
      onError(true);
      return;
    }
    setCountryError(false);
    onError(false);
  };
  const handleNameBlur = () => {
    if (enteredName.length === 0) {
      setNameError(true);
      onError(true);
      return;
    }
    setNameError(false);
    onError(false);
  };
  const handleLastNameBlur = () => {
    if (enteredLastName.length === 0) {
      setLastNameError(true);
      onError(true);
      return;
    }
    setLastNameError(false);
    onError(false);
  };
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="country-dropdown">Country</InputLabel>
        <Select
          autoFocus={true}
          labelId="country-dropdown"
          label="Country"
          onBlur={handleCountryBlur}
          error={countryError}
          fullWidth
          value={enteredCountry}
          onChange={(event) => dispatch(setUserCountry(event.target.value))}
        >
          <MenuItem value="Poland">Poland</MenuItem>
          <MenuItem value="Hungary">Hungary</MenuItem>
          <MenuItem value="Germany">Germany</MenuItem>
          <MenuItem value="Austria">Austria</MenuItem>
        </Select>
      </FormControl>
      <Box
        sx={{ marginY: "1rem", width: "100%", display: "flex", gap: "10px" }}
      >
        <TextField
          label="Name"
          value={enteredName}
          fullWidth
          onBlur={handleNameBlur}
          error={nameError}
          helperText={nameError ? "Write valid name" : ""}
          onChange={(event) => {
            dispatch(setUserName(event.target.value));
          }}
        />
        <TextField
          label="Last name"
          value={enteredLastName}
          fullWidth
          onBlur={handleLastNameBlur}
          error={lastNameError}
          helperText={lastNameError ? "Write valid last name" : ""}
          onChange={(event) => {
            dispatch(setUserLastName(event.target.value));
          }}
        />
      </Box>
      <Box
        sx={{ marginY: "1rem", width: "100%", display: "flex", gap: "10px" }}
      >
        <FormControl sx={{ width: "30%" }} fullWidth>
          <InputLabel id="code-dropdown">Code</InputLabel>
          <Select
            labelId="code-dropdown"
            label="Code"
            error={codeError}
            onBlur={handleCodeBlur}
            value={enteredCountryCode}
            onChange={handleChangeCountryCode}
            fullWidth
          >
            <MenuItem value="+48">+48</MenuItem>
            <MenuItem value="+36">+36</MenuItem>
            <MenuItem value="+49">+49</MenuItem>
            <MenuItem value="+43">+43</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Phone number"
          fullWidth={true}
          value={enteredPhoneNumber}
          onChange={handleChangePhoneNumber}
          error={phoneError}
          onBlur={handlePhoneBlur}
          helperText={phoneError ? "Write a valid phone number" : ""}
        />
      </Box>
    </Box>
  );
}
export default CreateAccountStep;
