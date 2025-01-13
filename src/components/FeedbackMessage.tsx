import {
  Alert,
  Snackbar,
  AlertColor,
  AlertPropsColorOverrides,
} from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
type FeedbackMessageProps = {
  message: string;
  duration?: number;
  severity: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
  open: boolean;
  onClose: () => void;
};

const FeedbackMessage = (props: FeedbackMessageProps) => {
  return (
    <Snackbar
      autoHideDuration={props.duration ? props.duration : 3000}
      open={props.open}
      onClose={props.onClose}
    >
      <Alert onClose={props.onClose} severity={props.severity} variant="filled">
        {props.message}
      </Alert>
    </Snackbar>
  );
};
export default FeedbackMessage;
