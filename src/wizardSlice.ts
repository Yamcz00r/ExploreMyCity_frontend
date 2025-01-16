import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  phoneNumber: string;
  country: string;
  name: string;
  lastName: string;
  countryCode: string;
}

export interface WizardSlice {
  email: string;
  password: string;
  existingUser: boolean;
  userData: UserData;
}

const initialWizardData: WizardSlice = {
  email: "",
  password: "",
  existingUser: false,
  userData: {
    phoneNumber: "",
    country: "",
    name: "",
    lastName: "",
    countryCode: "",
  },
};

export const wizardSlice = createSlice({
  name: "wizard",
  initialState: initialWizardData,
  reducers: {
    setIsUserExisting: (state) => {
      state.existingUser = false;
    },
    loginEmail: (state, action: PayloadAction<string>) => {
      //This funciton works for both acitons also for the creation user account
      state.email = action.payload;
    },
    loginPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setUserCountry: (state, action: PayloadAction<string>) => {
      state.userData.country = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userData.name = action.payload;
    },
    setUserLastName: (state, action: PayloadAction<string>) => {
      state.userData.lastName = action.payload;
    },
    setUserPhoneNumber: (state, action: PayloadAction<string>) => {
      state.userData.phoneNumber = action.payload;
    },
    setUserCountryCode: (state, action: PayloadAction<string>) => {
      state.userData.countryCode = action.payload;
    },
    resetUserData: (state) => {
      state.userData = {
        phoneNumber: "",
        country: "",
        name: "",
        lastName: "",
        countryCode: "",
      };
    },
    resetLoginValues: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const {
  loginEmail,
  loginPassword,
  resetLoginValues,
  setIsUserExisting,
  setUserCountry,
  setUserLastName,
  setUserName,
  setUserCountryCode,
  setUserPhoneNumber,
  resetUserData,
} = wizardSlice.actions;

export default wizardSlice.reducer;
