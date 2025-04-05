import { PATH } from "@route/path.ts";
import Community from "../app/community/index/Community.tsx";
import Write from "../app/community/write/page.tsx";
import Category from "../app/community/category/page.tsx";
import SymptomDetail from "../app/community/detail/page.tsx";
import PostDetail from "../app/community/detail/page.tsx";
import SearchPage from "../app/community/search/page.tsx";
import SearchDonePage from "../app/community/search/done/page.tsx";

const COMMUNITY_ROUTES = [
  { path: PATH.COMMUNITY.ROOT, element: <Community /> },
  { path: PATH.COMMUNITY.POST, element: <PostDetail /> },
  { path: PATH.COMMUNITY.SEARCH, element: <SearchPage /> },
  { path: PATH.COMMUNITY.SEARCH_DONE, element: <SearchDonePage /> },
  { path: PATH.COMMUNITY.WRITE, element: <Write /> },
  { path: PATH.COMMUNITY.CATEGORY, element: <Category /> },
  { path: PATH.COMMUNITY.DETAIL, element: <SymptomDetail /> },
];

export default COMMUNITY_ROUTES;
