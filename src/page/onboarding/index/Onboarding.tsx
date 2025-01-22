import { useState } from "react";
import Nickname from "./component/nickname/Nickname";
import Complete from "@page/onboarding/complete/Complete";

const Onboarding = () => {
  const [step, setStep] = useState(1);

  const getComponent = () => {
    switch (step) {
      case 1:
        return <Nickname setStep={setStep} />;
      case 2:
        return <Complete />;
    }
  };

  return <>{getComponent()}</>;
};
export default Onboarding;
