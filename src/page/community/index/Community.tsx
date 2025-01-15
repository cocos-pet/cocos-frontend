import { IcCocos, IcSearch } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import Nav from "@common/component/Nav/Nav";
import { useNavigate } from "react-router-dom"; 

const Community = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <>
      <HeaderNav leftIcon={<IcCocos />} centerContent="커뮤니티" rightBtn={<IcSearch onClick={handleSearchClick} />} />
      <Nav />
    </>
  );
};

export default Community;
