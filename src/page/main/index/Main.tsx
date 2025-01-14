import { useState } from "react";
import { useFilterStore } from "@store/filter";
import Nav from "@common/component/Nav/Nav";

const Main = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { bears, updateBears, increasePopulation } = useFilterStore();

  return (
    <div style={{ position: "relative" }}>
      <button onClick={increasePopulation}>증가</button>
      <div>{bears}</div>
      <Nav />
      {/* <FilterBottomSheet isOpen={isOpen} handleOpen={() => setIsOpen(false)} />
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div>
      <div>ㅋㅋ</div> */}
    </div>
  );
};

export default Main;
