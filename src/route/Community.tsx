import { PATH } from "./path";
import CommunityPage from "@app/community/page";
import CommunityPost from "@app/community/[postId]/page";
import CommunityCategory from "@app/community/category/page";
import CommunitySearch from "@app/community/search/page";
import CommunitySearchDone from "@app/community/search/done/page";
import CommunityWrite from "@app/community/write/page";
import CommunityDetail from "@app/community/detail/page";

const COMMUNITY_ROUTES = [
  { path: PATH.COMMUNITY.ROOT, element: <CommunityPage /> },
  { path: PATH.COMMUNITY.POST, element: <CommunityPost /> },
  { path: PATH.COMMUNITY.CATEGORY, element: <CommunityCategory /> },
  { path: PATH.COMMUNITY.SEARCH, element: <CommunitySearch /> },
  { path: PATH.COMMUNITY.SEARCH_DONE, element: <CommunitySearchDone /> },
  { path: PATH.COMMUNITY.WRITE, element: <CommunityWrite /> },
  { path: PATH.COMMUNITY.DETAIL, element: <CommunityDetail /> },
];

export default COMMUNITY_ROUTES;

