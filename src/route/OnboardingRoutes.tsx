import Complete from "@page/onboarding/complete/Complete";
import Onboarding from "@page/onboarding/index/Onboarding";

const ONBOARGING_ROUTES = [
    { path: "/onboarding", element: <Onboarding /> },
    { path: "/onboarding/complete", element: <Complete/> },
  ];
  
  export default ONBOARGING_ROUTES;