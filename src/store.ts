import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import wizardReducer from "./wizardSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    wizard: wizardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
