import Community from "@page/community/index/Community";
import Write from "@page/community/write/Write";
import { PATH } from "@route/path.ts";
import PostDetail from "@page/community/[postId]/Post.tsx";
import SearchDone from "@page/community/search/done/SearchDone.tsx";
import Search from "@page/community/search/index/Search.tsx";

const COMMUNITY_ROUTES = [
  { path: PATH.COMMUNITY.ROOT, element: <Community /> },
  { path: PATH.COMMUNITY.POST, element: <PostDetail /> },
  { path: PATH.COMMUNITY.SEARCH, element: <Search /> },
  { path: PATH.COMMUNITY.SEARCHDONE, element: <SearchDone /> },
  { path: PATH.COMMUNITY.WRITE, element: <Write /> },
];

export default COMMUNITY_ROUTES;
