import { useProtectedRoute } from "@route/useProtectedRoute";
import Nickname from "./component/nickname/Nickname";

const Onboarding = () => {
  const { isNeedRedirect } = useProtectedRoute();

  if (isNeedRedirect) {
    return null;
  }

  return (
    <>
      <Nickname />
    </>
  );
};
export default Onboarding;
