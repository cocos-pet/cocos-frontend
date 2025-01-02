import Community from "@page/community/index/Community";
import Post from "@page/community/post/Post";
import Search from "@page/community/search/Search";
import Write from "@page/community/write/Write";

const COMMUNITY_ROUTES = [
    { path: "/community", element: <Community /> },
    {path: "community/post", element: <Post/>},
    {path: "community/search", element: <Search/>},
    {path: "community/write", element: <Write/>},
  ];
  
  export default COMMUNITY_ROUTES;