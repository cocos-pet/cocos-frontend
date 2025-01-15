import { IcCocos, IcSearch } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import Nav from "@common/component/Nav/Nav";

const Community = () => {
  return (
    <>
      <HeaderNav leftIcon={<IcCocos />} centerContent="커뮤니티" rightBtn={<IcSearch />} />
      <Nav />
    </>
  );
};

export default Community;
