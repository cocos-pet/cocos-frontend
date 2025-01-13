import { useState } from "react";
import { Link } from "react-router-dom";
import { IcShape } from "@asset/svg/index";
import * as styles from "./Nav.css";
import { NAV_CONTENT } from "./constant";

const Nav = () => {
  const [activeItem, setActiveItem] = useState<string>("home");

  const handleClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  return (
    <div className={styles.container}>
      {NAV_CONTENT.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          onClick={() => handleClick(item.id)}
          className={`${styles.wrapper} ${activeItem === item.id ? styles.enabled : styles.disabled}`}
        >
          <IcShape />
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
