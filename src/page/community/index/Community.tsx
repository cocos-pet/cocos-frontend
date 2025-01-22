import { IcCocos, IcSearch } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import Nav from "@common/component/Nav/Nav";
import { useNavigate, useSearchParams } from "react-router-dom";
import Divider from "@common/component/Divider/Divider";
import Banner from "./components/Banner/Banner";
import SelectPost from "./components/SelectPost/SelectPost";
import FloatingBtn from "@common/component/FloatingBtn/Floating";
import * as styles from "./Community.css";
import { PATH } from "@route/path";
import { NAV_CONTENT } from "@common/component/Nav/constant";
import { useQueryGetCategory } from "@api/domain/community/category/hook";

const Community = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const handleSearchClick = () => {
    navigate(PATH.COMMUNITY.SEARCH);
  };

  const extractTypeFromName = (name: string) => {
    if (name === "증상·질병") {
      return "symptom";
    }

    if (name === "병원고민") {
      return "hospital";
    }

    if (name === "일상·치유") {
      return "healing";
    }

    if (name === "코코스매거진") {
      return "magazine";
    }

    return "null";
  };

  const { data: categories } = useQueryGetCategory();
  const categoryList = categories?.data?.categories || [];

  const communityContent = categoryList.map((category) => ({
    id: String(category.id),
    name: category.name || "Unnamed",
    image: category.image || "default-image-url",
    type: extractTypeFromName(category.name as string),
  }));

  return (
    <div className={styles.communityContainer}>
      <div className={styles.communityHeader}>
        <HeaderNav
          leftIcon={<IcCocos />}
          centerContent="커뮤니티"
          rightBtn={<IcSearch onClick={handleSearchClick} />}
        />
      </div>
      <div className={styles.bannerContainer}>
        <Banner />
      </div>
      <div className={styles.categoryContainer}>
        <Nav content={communityContent} type="community" />
      </div>
      <Divider />
      <div className={styles.postContainer}>
        <SelectPost />
      </div>
      <div className={styles.btnContainer}>
        <FloatingBtn onClick={() => navigate(`/community/write?category=${type}`)} />
      </div>
      <div className={styles.communityFooter}>
        <Nav content={NAV_CONTENT} />
      </div>
    </div>
  );
};

export default Community;
