import Complete from "@page/registerPet/complete/Complete";
import { PATH } from "@route/path.ts";
import RegisterPEt from "@page/registerPet/index/RegisterPEt";
const REGISTER_PET_ROUTES = [
  { path: PATH.ONBOARDING.ROOT, element: <RegisterPEt /> },
  { path: PATH.ONBOARDING.COMPLETE, element: <Complete /> },
];

export default REGISTER_PET_ROUTES;
