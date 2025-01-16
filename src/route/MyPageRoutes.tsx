import PetEdit from "@page/mypage/edit-pet/PetEdit";
import ProfileEdit from "@page/mypage/edit-profile/ProfileEdit";
import Mypage from "@page/mypage/index/Mypage";
import { PATH } from "@route/path.ts";

const MYPAGE_ROUTES = [
  { path: PATH.MYPAGE.ROOT, element: <Mypage /> },
  { path: PATH.MYPAGE.EDIT_PROFILE, element: <ProfileEdit /> },
  { path: PATH.MYPAGE.EDIT_PET, element: <PetEdit /> },
];

export default MYPAGE_ROUTES;
