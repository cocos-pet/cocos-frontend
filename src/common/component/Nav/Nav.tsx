import { useNavigate, useLocation } from "react-router-dom";
import * as styles from "./Nav.css";
import { NAV_CONTENT } from "./constant";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 버튼 클릭시 활성화 및 페이지 이동
  const handleClick = (path: string) => {
    if (path === "/review") {
      alert("추후 구현 예정입니다.");
    } else {
      navigate(path);
    }
  };

  return (
    <div className={styles.container}>
      {NAV_CONTENT.map(({ id, path, svg: SvgComponent, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => handleClick(path)}
          className={styles.navItem({
            state: location.pathname === path,
          })}
        >
          <SvgComponent />
          {label}
        </button>
      ))}
    </div>
  );
};

export default Nav;
