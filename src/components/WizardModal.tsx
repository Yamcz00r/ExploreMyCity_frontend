import { useState } from "react";
import { Modal } from "@mui/material";
import Wizard from "./Wizard";
import EmailStep from "./Steps/EmailStep";
import PasswordStep from "./Steps/PasswordStep";
import CreateAccountStep from "./Steps/CreateAccountStep";
import { useAppSelector } from "../hooks";
type WizardModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

function WizardModal({ isOpen, handleClose }: WizardModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const isUserExisting = useAppSelector((state) => state.login.existingUser);
  const STEPS = [0, 1, 2, 3];
  console.log(currentStep, isUserExisting);
  const handleNextStep = () => {
    // if (currentStep > STEPS.length - 1) {
    //   setCurrentStep(0);
    //   return;
    // }
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Wizard
        currentStep={currentStep}
        handleClose={handleClose}
        handleStepChange={setCurrentStep}
      >
        <EmailStep nextStep={handleNextStep} currentStep={currentStep} />
        {isUserExisting ? (
          <PasswordStep nextStep={handleNextStep} currentStep={currentStep} />
        ) : (
          <CreateAccountStep
            nextStep={handleNextStep}
            currentStep={currentStep}
          />
        )}
      </Wizard>
    </Modal>
  );
}
export default WizardModal;
