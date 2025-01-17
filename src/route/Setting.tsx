import Setting from "@page/setting/index/Setting";
import { PATH } from "./path";
import ProfileEdit from "@page/setting/edit-profile/ProfileEdit";

const SETTING_ROUTES = [
  { path: PATH.SETTING.ROOT, element: <Setting /> },
  { path: PATH.SETTING.EDIT_PROFILE, element: <ProfileEdit /> },
];

export default SETTING_ROUTES;
