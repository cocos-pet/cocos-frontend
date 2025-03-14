import {useProtectedRoute} from "@route/useProtectedRoute";
import Nickname from "./component/nickname/Nickname";

const Onboarding = () => {
  useProtectedRoute();
  return (
    <>
      <Nickname />
    </>
  );
};
export default Onboarding;
