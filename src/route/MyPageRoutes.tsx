import Mypage from "@page/mypage/index/Mypage";
import Modify from "@page/mypage/modify/Modify";

const MYPAGE_ROUTES= [
    { path: "/mypage", element: <Mypage/> },
    { path: "/mypage/modify", element: <Modify/> },
  ];
  
  export default MYPAGE_ROUTES;