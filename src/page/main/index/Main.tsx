import MainFooter from "./mainFooter/MainFooter";
import Divider from "@common/component/Divider/Divider";
import HotPost from "./hotPost/HotPost";
import MainHeader from "./mainHeader/mainHeader";
import Symptom from "./symptom/Symptom";
import { TextField } from "@common/component/TextField";
import { useNavigate } from "react-router-dom";
import { IcSearch } from "@asset/svg";
import * as styles from "./Main.css";
import Nav from "@common/component/Nav/Nav";

const postsData = [
  { id: 1, title: "실시간 심장병 질문 1위" },
  { id: 2, title: "가장 인기 있는 산책 코스" },
  { id: 3, title: "반려동물 먹이 추천" },
  { id: 4, title: "집에서 하는 셀프 미용 팁" },
  { id: 5, title: "반려동물과 함께하는 여행 준비" },
];

const petName = "모모";
const Main = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <TextField
          state="search"
          placeholder="심장병, 백내장"
          onClick={handleSearchClick}
          value=""
          icon={<IcSearch />}
        />
      </div>
      <MainHeader />
      <Symptom />
      <Divider />
      <HotPost petName={petName} posts={postsData} />
      <Divider />
      <MainFooter />
      <Nav />
    </div>
  );
};

export default Main;
