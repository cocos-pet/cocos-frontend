import { IcCocos, IcSearch } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import Nav from "@common/component/Nav/Nav";
import { useNavigate } from "react-router-dom";
import Divider from "@common/component/Divider/Divider";
import Banner from "./components/Banner/Banner";
import { NAV_CONTENT } from "@common/component/Nav/constant";
import { COMMUNITY_CONTENT } from "@common/component/Nav/communityConstant";

const Community = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div style={{ width: "37.5rem" }}>
      <HeaderNav leftIcon={<IcCocos />} centerContent="커뮤니티" rightBtn={<IcSearch onClick={handleSearchClick} />} />
      <Divider size="small" />
      <Banner />
      <Nav content={COMMUNITY_CONTENT} type="community" />
      
      <Divider />
      <Nav content={NAV_CONTENT} type="nav" />
    </div>
  );
};

export default Community;
