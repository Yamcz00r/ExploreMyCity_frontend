import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#00A8E8",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF6B35",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#DC3545",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFC107",
      contrastText: "#333333",
    },
    success: {
      main: "#28A745",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      secondary: "#6C757D",
    },
    background: {
      default: "#F4F4F9",
      paper: "#FFFFFF",
    },
    divider: "#E0E0E0",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          backgroundColor: "#00A8E8",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid #E0E0E0",
        },
      },
    },
  },
});
export default theme;
