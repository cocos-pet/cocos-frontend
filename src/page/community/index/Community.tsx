import { IcCocos, IcSearch } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import Nav from "@common/component/Nav/Nav";
import { useNavigate, useSearchParams } from "react-router-dom";
import Divider from "@common/component/Divider/Divider";
import Banner from "./components/Banner/Banner";
import { COMMUNITY_CONTENT } from "@common/component/Nav/communityConstant";
import SelectPost from "./components/SelectPost/SelectPost";
import FloatingBtn from "@common/component/FloatingBtn/Floating";
import * as styles from "./Community.css";
import { PATH } from "@route/path";
import { NAV_CONTENT } from "@common/component/Nav/constant";

const Community = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const handleSearchClick = () => {
    navigate(PATH.SEARCH.ROOT);
  };

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
      <Nav content={COMMUNITY_CONTENT} type="community" />
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
