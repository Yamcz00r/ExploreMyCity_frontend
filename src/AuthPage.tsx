import { Box } from "@mui/material";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { useTheme } from "@mui/material/styles";

export default function LoginPage() {
  const theme = useTheme();
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          minWidth: "100%",
          minHeight: "95vh",
          overflowY: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Login />
      </Box>
    </>
  );
}
