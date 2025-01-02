import { createBrowserRouter } from "react-router-dom";
import ONBOARGING_ROUTES from "./OnboardingRoutes";
import MAIN_ROUTES from "./MainRoutes";
import COMMUNITY_ROUTES from "./Community";
import MYPAGE_ROUTES from "./MyPageRoutes";

//children은 Outlet에서 사용하는 방식 (레이아웃 지정해야할 때)
const router = createBrowserRouter([
    ...ONBOARGING_ROUTES,
    ...MAIN_ROUTES,
    ...COMMUNITY_ROUTES,
    ...MYPAGE_ROUTES
])


export default router;
