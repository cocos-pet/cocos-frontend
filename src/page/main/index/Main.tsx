import FilterBottomSheet from "@shared/component/FilterBottomSheet/FilterBottomSheet";
import { useState } from "react";

const Main = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div style={{ position: "relative" }}>
      <FilterBottomSheet isOpen={isOpen} handleOpen={() => setIsOpen(false)} />
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
    </div>
  );
};

export default Main;
