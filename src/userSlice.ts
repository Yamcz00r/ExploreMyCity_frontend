import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface UserState {
  user_id: string;
  token: string;
}

const initialState: UserState = {
  user_id: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.user_id = action.payload.user_id;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = "";
      state.user_id = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUserId = (state: RootState) => state.user.user_id;
export const selectUserToken = (state: RootState) => state.user.token;

export default userSlice.reducer;
