import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useAppSelector } from "../hooks";
import WizardModal from "./WizardModal";
function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const token = useAppSelector((state) => state.user.token);
  const user_id = useAppSelector((state) => state.user.user_id);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: "sticky",
          top: 0,
          right: 0,
          minWidth: "100%",
          display: "flex",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          padding: "1rem",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "inherit",
              fontWeight: "800",
              fontSize: "1.4rem",
            }}
          >
            FoodDelivery
          </Typography>
        </Box>
        <Button
          onClick={handleOpenModal}
          sx={{
            backgroundColor: "white",
            paddingX: "1.5rem",
            paddingY: "0.4rem",
            borderRadius: "1.2rem",
          }}
        >
          <Typography sx={{ fontWeight: "600" }}>Login</Typography>
        </Button>
      </Box>
      <WizardModal isOpen={open} handleClose={handleCloseModal} />
    </>
  );
}
export default Navbar;
