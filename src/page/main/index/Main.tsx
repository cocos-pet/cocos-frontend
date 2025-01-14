import MainFooter from "./mainFooter/MainFooter";
import MainHeader from "./mainHeader/MainHeader";
import Divider from "@common/component/Divider/Divider";
import HotPost from "./hotPost/hotPost";

const postsData = [
  { id: 1, title: "반려동물 건강 관리법" },
  { id: 2, title: "가장 인기 있는 산책 코스" },
  { id: 3, title: "반려동물 먹이 추천" },
  { id: 4, title: "집에서 하는 셀프 미용 팁" },
  { id: 5, title: "반려동물과 함께하는 여행 준비" },
];

const petName = "멍멍이";

const Main = () => {
  return (
    <div>
      <MainHeader />
      <Divider />
      <HotPost petName={petName} posts={postsData} />
      <Divider />
      <MainFooter />
    </div>
  );
};

export default Main;
