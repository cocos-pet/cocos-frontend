import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as styles from "./Nav.css";
import { NAV_CONTENT } from "./constant";
import { COMMUNITY_CONTENT } from "./communityConstant";

type Props = {
  content: typeof NAV_CONTENT | typeof COMMUNITY_CONTENT;
  type: "nav" | "community";
};

const Nav = ({ content }: Props) => {
  const location = useLocation();

  const extractFirstPath = (): string => {
    const pathName = location.pathname;
    const parts = pathName.split("/");
    const basePath = `/${parts[1]}`;

    return basePath;
  };

  const [activeItem, setActiveItem] = useState<string>(extractFirstPath());
  const navigate = useNavigate();

  const handleClick = (itemId: string, path: string) => {
    setActiveItem(itemId);
    if (itemId !== "/review") {
      navigate(path);
    } else {
      alert("추후 구현 예정입니다.");
    }
  };

  return (
    <div className={styles.container}>
      {content.map((item) => {
        const SvgComponent = item.svg;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleClick(item.id, item.path)}
            className={styles.navItem({
              state: activeItem === item.id,
            })}
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
