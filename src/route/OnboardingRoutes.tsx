import {PATH} from "@route/path.ts";
import Onboarding from "../app/onboarding/page.tsx";
import Complete from "../app/onboarding/complete/page.tsx";

const ONBOARDING_ROUTES = [
  { path: PATH.ONBOARDING.ROOT, element: <Onboarding /> },
  { path: PATH.ONBOARDING.COMPLETE, element: <Complete /> },
];

export default ONBOARDING_ROUTES;
