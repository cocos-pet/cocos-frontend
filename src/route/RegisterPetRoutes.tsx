import { PATH } from "@route/path.ts";
import RegisterPet from "@page/registerPetss/index/RegisterPet";
import Complete from "@page/registerPetss/complete/Complete";
const REGISTER_PET_ROUTES = [
  { path: PATH.ONBOARDING.ROOT, element: <RegisterPet /> },
  { path: PATH.ONBOARDING.COMPLETE, element: <Complete /> },
];

export default REGISTER_PET_ROUTES;
