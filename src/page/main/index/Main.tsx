import Nav from "@common/component/Nav/Nav";
import FilterBottomSheet from "@shared/component/FilterBottomSheet/FilterBottomSheet";
import { useFilterStore } from "@store/filter";

const Main = () => {
  const { setOpen, toggleOpen } = useFilterStore();

  return (
    <div style={{ position: "relative" }}>
      <Nav />
      <button onClick={toggleOpen} style={{ width: "4rem", height: "4rem", backgroundColor: "aliceblue" }}>
        open
      </button>

      <FilterBottomSheet />
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
