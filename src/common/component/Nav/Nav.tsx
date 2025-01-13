import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "./Nav.css";
import { NAV_CONTENT } from "./constant";

const Nav = () => {
  const [activeItem, setActiveItem] = useState<string>("home");
  const navigate = useNavigate();

  const handleClick = (itemId: string, path: string) => {
    setActiveItem(itemId);
    if (itemId !== "review") {
      navigate(path);
    } else {
      alert("추후 구현 예정입니다.");
    }
  };

  return (
    <div className={styles.container}>
      {NAV_CONTENT.map((item) => {
        const SvgComponent = item.svg;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleClick(item.id, item.path)}
            className={`${styles.wrapper} ${activeItem === item.id ? styles.enabled : styles.disabled}`}
          >
            <SvgComponent />
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default Nav;
