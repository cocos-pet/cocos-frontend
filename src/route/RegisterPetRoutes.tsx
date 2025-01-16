import Complete from "@page/registerPet/complete/Complete";
import RegisterPet from "@page/registerPet/index/RegisterPEt";
import { PATH } from "@route/path.ts";

const REGISTER_PET_ROUTES = [
  { path: PATH.ONBOARDING.ROOT, element: <RegisterPet /> },
  { path: PATH.ONBOARDING.COMPLETE, element: <Complete /> },
];

export default REGISTER_PET_ROUTES;
