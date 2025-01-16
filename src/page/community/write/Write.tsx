import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import {
  IcClear,
  IcDelete,
  IcDeleteBlack,
  IcLeftarrow,
  React,
} from "@asset/svg";
import { writeWrap } from "@page/community/write/Write.css.ts";

const Write = () => {
  const onBackClick = () => {};

  return (
    <div>
      <HeaderNav
        leftIcon={<IcDeleteBlack width={24} />}
        onLeftClick={onBackClick}
        // type={"field"}
        centerContent={"글쓰기"}
      />
      <div className={writeWrap}></div>
    </div>
  );
};

export default Write;
