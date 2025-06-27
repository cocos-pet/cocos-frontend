import { useProtectedRoute } from "@route/useProtectedRoute";
import Nickname from "./component/nickname/Nickname";

const Onboarding = () => {
  const { isWillRedirect } = useProtectedRoute();

  if (isWillRedirect) {
    return null;
  }

  return (
    <>
      <Nickname />
    </>
  );
};
export default Onboarding;
