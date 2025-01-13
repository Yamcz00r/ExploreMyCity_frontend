import { Typography } from "@mui/material";
import type { StepProps } from "./EmailStep";
function CreateAccountStep({ nextStep, currentStep }: StepProps) {
  return (
    <>
      {currentStep === 1 ? (
        <>
          <Typography>Create Account Step</Typography>
        </>
      ) : null}
    </>
  );
}
export default CreateAccountStep;
