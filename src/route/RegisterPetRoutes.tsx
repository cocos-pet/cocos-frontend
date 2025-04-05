import {PATH} from "@route/path.ts";
import RegisterPet from "../app/register-pet/page.tsx";
import Page from "../app/register-pet/complete/page.tsx";

const REGISTER_PET_ROUTES = [
  { path: PATH.REGISTER_PET.ROOT, element: <RegisterPet /> },
  { path: PATH.REGISTER_PET.COMPLETE, element: <Page /> },
];

export default REGISTER_PET_ROUTES;
