import Setting from "@app/setting/page";
import { PATH } from "@route/path.ts";
import ProfileEdit from "@app/setting/edit-profile/page";

const SETTING_ROUTES = [
  { path: PATH.SETTING.ROOT, element: <Setting /> },
  { path: PATH.SETTING.EDIT_PROFILE, element: <ProfileEdit /> },
];

export default SETTING_ROUTES;
