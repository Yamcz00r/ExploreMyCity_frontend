import { useState } from "react";
import { Modal } from "@mui/material";
import Wizard from "./Wizard";
import EmailStep from "./Steps/EmailStep";
import PasswordStep from "./Steps/PasswordStep";
import Step from "./Steps/Step";
import CreateAccountStep from "./Steps/CreateAccountStep";
import { useAppSelector } from "../hooks";
type WizardModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

function WizardModal({ isOpen, handleClose }: WizardModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [userDataError, setUserDataError] = useState(false);

  const isUserExisting = useAppSelector((state) => state.wizard.existingUser);
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const onWizardSubmit = () => {
    if (emailError || passwordError) {
      return;
      //Going to be replaced with the toast notifications system for now it will suffice
    }
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Wizard
        currentStep={currentStep}
        handleClose={handleClose}
        handleStepChange={setCurrentStep}
        handleWizardComplete={() => {}}
      >
        <Step
          handleStepChange={handleNextStep}
          title="Write your email"
          isActive={currentStep === 0}
          disabled={emailError}
        >
          <EmailStep isError={emailError} onError={setEmailError} />
        </Step>
        {isUserExisting ? (
          <Step
            handleStepChange={handleNextStep}
            title="Write your password"
            isActive={currentStep === 1}
            disabled={passwordError}
            buttonTitle="Login"
            buttonType="submit"
          >
            <PasswordStep isError={passwordError} onError={setPasswordError} />
          </Step>
        ) : (
          <Step
            handleStepChange={handleNextStep}
            title="Create account"
            isActive={currentStep === 1}
            disabled={userDataError}
            buttonTitle="Create"
            buttonType="submit"
          >
            <CreateAccountStep
              isError={userDataError}
              onError={setUserDataError}
            />
          </Step>
        )}
      </Wizard>
    </Modal>
  );
}
export default WizardModal;
