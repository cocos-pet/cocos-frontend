import Search from "@page/search/index/Search.tsx";
import SearchDone from "@page/search/done/SearchDone.tsx";

const SEARCH_ROUTES = [
  { path: "/search", element: <Search /> },
  { path: "/search/done", element: <SearchDone /> }, // 검색 완료 페이지
];

export default SEARCH_ROUTES;
