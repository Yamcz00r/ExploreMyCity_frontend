import { Button, Box } from "@mui/material";
import { Facebook } from "@mui/icons-material";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";
import { useTheme } from "@mui/material/styles";
import { login } from "../../userSlice";
import { useAppDispatch } from "../../hooks";
import { AuthProviderProps } from "./GoogleRedirect";
function FacebookRedirect({ closeWizard }: AuthProviderProps) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const handleLogin = async () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(user);
        dispatch(login({ user_id: user.uid, token: token }));
        closeWizard();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Button
      onClick={handleLogin}
      sx={{
        marginY: "1rem",
        width: "100%",
        borderRadius: "10px",
        backgroundColor: "#1877F2",
        display: "flex",
        alignItems: "center",
        padding: "0.7rem",
        color: theme.palette.primary.contrastText,
        justifyContent: "space-between",
        fontSize: "1rem",
        gap: "0.5rem",
      }}
    >
      <Facebook sx={{ alignSelf: "flex-start" }} />
      Go with Facebook
      <Box></Box>
    </Button>
  );
}
export default FacebookRedirect;
