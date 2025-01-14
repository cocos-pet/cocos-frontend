import Complete from "@page/onboarding/complete/Complete";
import Onboarding from "@page/onboarding/index/Onboarding";
import { PATH } from "@route/path.ts";

const ONBOARGING_ROUTES = [
  { path: PATH.ONBOARDING.ROOT, element: <Onboarding /> },
  { path: PATH.ONBOARDING.COMPLETE, element: <Complete /> },
];

export default ONBOARGING_ROUTES;
