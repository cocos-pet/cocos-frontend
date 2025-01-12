import { useState } from "react";
import FloatingBtn from "@common/component/FloatingBtn/Floating";

const Main = () => {
  // 버튼의 disabled 상태 관리
  const [disabled, setDisabled] = useState(false);

  // 버튼 클릭 시 상태 변경
  const handleClick = () => {
    setDisabled(true); // 버튼 클릭 시 비활성화
  };

  return (
    <div style={{ padding: "2.4rem" }}>
      <FloatingBtn disabled={disabled} onClick={handleClick} />
    </div>
  );
};

export default Main;
