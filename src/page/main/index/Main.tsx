import { useState } from "react";
import FloatingBtn from "@common/component/FloatingBtn/Floating";

const Main = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleButtonClick = () => {
    setIsDisabled(true);
  };

  return (
    <div>
      <FloatingBtn disabled={isDisabled} onClick={handleButtonClick} />
    </div>
  );
};

export default Main;
