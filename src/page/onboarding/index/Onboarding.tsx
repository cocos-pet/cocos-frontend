import { useState } from "react";
import Login from "./component/Login/Login";
import Nickname from "./component/nickname/Nickname";
import Complete from "@page/onboarding/complete/Complete";

const Onboarding = () => {
  const [step, setStep] = useState(0);

  const getComponent = () => {
    switch (step) {
      case 0:
        return <Login setStep={setStep} />;
      case 1:
        return <Nickname setStep={setStep}/>;
      case 2:
        return <Complete />;
    }
  };

  return <>{getComponent()}</>;
};
export default Onboarding;
