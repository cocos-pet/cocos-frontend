import Community from "@page/community/index/Community";
import Post from "@page/community/post/Post";
import Search from "@page/community/search/Search";
import Write from "@page/community/write/Write";
import { PATH } from "@route/path.ts";

const COMMUNITY_ROUTES = [
  { path: PATH.COMMUNITY.ROOT, element: <Community /> },
  { path: PATH.COMMUNITY.POST, element: <Post /> },
  { path: PATH.COMMUNITY.SEARCH, element: <Search /> },
  { path: PATH.COMMUNITY.WRITE, element: <Write /> },
];

export default COMMUNITY_ROUTES;
