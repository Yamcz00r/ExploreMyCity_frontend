import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./store";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@mui/material";

import theme from "../theme.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route index={true} element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
