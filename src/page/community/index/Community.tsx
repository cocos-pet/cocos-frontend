import { IcCocos, IcSearch } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import Nav from "@common/component/Nav/Nav";
import { useNavigate } from "react-router-dom";
import Divider from "@common/component/Divider/Divider";
import Banner from "./components/Banner/Banner";
import { NAV_CONTENT } from "@common/component/Nav/constant";
import { COMMUNITY_CONTENT } from "@common/component/Nav/communityConstant";
import SelectPost from "./components/SelectPost/SelectPost";
import FloatingBtn from "@common/component/FloatingBtn/Floating";
import * as styles from "./Community.css";
import { API_PATH } from "@api/constants/apiPath";

const Community = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate(API_PATH.SEARCH);
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
        <FloatingBtn />
      </div>
      <div className={styles.communityFooter}>
        <Nav content={NAV_CONTENT} type="nav" />
      </div>
    </div>
  );
};

export default Community;
