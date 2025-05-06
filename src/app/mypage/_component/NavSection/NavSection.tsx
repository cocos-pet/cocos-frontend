import React from "react";
import Nav from "@common/component/Nav/Nav";
import { NAV_CONTENT } from "@common/component/Nav/constant";

const NavSection = () => {
  return (
    <span style={{ position: "fixed", bottom: "0", backgroundColor: "white", width: "100%" }}>
      <Nav content={NAV_CONTENT} type={"nav"} />
    </span>
  );
};

export default NavSection;
