import Nav from "@common/component/Nav/Nav";
import { useFilterStore } from "@store/filter";

const Mypage = () => {
  const { bears, updateBears, increasePopulation } = useFilterStore();

  return (
    <>
      <div>{bears}</div>
      <Nav />
    </>
  );
};

export default Mypage;
