import PetEdit from "@app/mypage/edit-pet/page";
import Mypage from "@app/mypage/index/Mypage";
import { PATH } from "@route/path.ts";

const MYPAGE_ROUTES = [
  { path: PATH.MYPAGE.ROOT, element: <Mypage /> },
  { path: PATH.MYPAGE.EDIT_PET, element: <PetEdit /> },
];

export default MYPAGE_ROUTES;
