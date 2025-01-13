import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function PageNotFound() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: "4rem" }}>404</Typography>
      <Typography
        sx={{
          color: theme.palette.text.primary,
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        The page you are trying to access cannot be find.
      </Typography>
    </Box>
  );
}
export default PageNotFound;
