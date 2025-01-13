import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginSlice {
  email: string;
  password: string;
  existingUser: boolean;
}

const initialLoginData: LoginSlice = {
  email: "",
  password: "",
  existingUser: true,
};

export const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginData,
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
} = loginSlice.actions;

export default loginSlice.reducer;
