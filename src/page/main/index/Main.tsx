import Divider from "@common/component/Divider/Divider";
import Spacing from "@common/component/Spacing/Spacing";
import BottomSheet from "@common/component/BottomSheet/BottomSheet";
/*
localhost:5173/main
*/
const Main = () => {
  return (
    <div>
      <span>main</span>
      <BottomSheet />
      <Spacing marginBottom="10" />
      <Divider size="small" />
      <Spacing marginBottom="10" />
      <Divider />
    </div>
  );
};

export default Main;
