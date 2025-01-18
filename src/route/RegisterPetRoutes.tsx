import { PATH } from "@route/path.ts";
import RegisterPet from "@page/registerPet/index/RegisterPet";
import Complete from "@page/registerPet/complete/Complete";
const REGISTER_PET_ROUTES = [
  { path: PATH.REGISTER_PET.ROOT, element: <RegisterPet /> },
  { path: PATH.REGISTER_PET.COMPLETE, element: <Complete /> },
];

export default REGISTER_PET_ROUTES;
