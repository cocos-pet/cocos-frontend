import React, { useEffect, useState } from "react";
import { Toast } from "@common/component/Toast/Toast.tsx";
import { toastAnimation, toastExitAnimation } from "@common/component/WarnningToastWrap/WarningToastWrap.css";

type Props = {
  errorMessage: string;
  setErrorMessage?: (value: string) => void;
};

const WarningToastWrap: React.FC<Props> = (props) => {
  const { errorMessage, setErrorMessage } = props;
  const [showError, setShowError] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      setShowError(true);
      setIsExiting(false);
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setShowError(false);
          if (setErrorMessage) {
            setErrorMessage("");
          }
        }, 500);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage, setErrorMessage]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowError(false);
      if (setErrorMessage) {
        setErrorMessage("");
      }
    }, 500);
  };

  if (!showError) return null;

  return (
    <>
      {errorMessage && showError && (
        <div className={isExiting ? toastExitAnimation : toastAnimation}>
          <Toast message={errorMessage} iconColor={"black"} variant={"error"} onClick={handleClose} />
        </div>
      )}
    </>
  );
};

export default WarningToastWrap;
