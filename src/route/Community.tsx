import Community from "@page/community/index/Community";
import Search from "@page/community/search/Search";
import Write from "@page/community/write/Write";
import { PATH } from "@route/path.ts";
import PostDetail from "@page/community/[postId]/Post.tsx";

const COMMUNITY_ROUTES = [
  { path: PATH.COMMUNITY.ROOT, element: <Community /> },
  { path: PATH.COMMUNITY.POST, element: <PostDetail /> },
  { path: PATH.COMMUNITY.SEARCH, element: <Search /> },
  { path: PATH.COMMUNITY.WRITE, element: <Write /> },
];

export default COMMUNITY_ROUTES;
