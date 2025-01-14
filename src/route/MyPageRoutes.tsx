import Mypage from "@page/mypage/index/Mypage";
import Modify from "@page/mypage/modify/Modify";
import { PATH } from "@route/path.ts";

const MYPAGE_ROUTES = [
  { path: PATH.MYPAGE.ROOT, element: <Mypage /> },
  { path: PATH.MYPAGE.MODIFY, element: <Modify /> },
];

export default MYPAGE_ROUTES;
