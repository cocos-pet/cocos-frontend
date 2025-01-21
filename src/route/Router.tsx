import { createBrowserRouter } from "react-router-dom";
import COMMUNITY_ROUTES from "./Community";
import MAIN_ROUTES from "./MainRoutes";
import MYPAGE_ROUTES from "./MyPageRoutes";
import ONBOARDING_ROUTES from "./OnboardingRoutes";
import REGISTER_PET_ROUTES from "./RegisterPetRoutes";
import PROFILE_ROUTES from "./ProfileRoutes";
import Test from "@page/test/Test";
import SETTING_ROUTES from "./Setting";
import NotFound from "@page/notFound/NotFound";

//children은 Outlet에서 사용하는 방식 (레이아웃 지정해야할 때)
const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },

  { path: "/", element: <>just home</> },
  ...ONBOARDING_ROUTES,
  ...MAIN_ROUTES,
  ...COMMUNITY_ROUTES,
  ...MYPAGE_ROUTES,
  ...REGISTER_PET_ROUTES,
  ...PROFILE_ROUTES,
  ...SETTING_ROUTES,
  { path: "/test", element: <Test /> },
]);

export default router;
