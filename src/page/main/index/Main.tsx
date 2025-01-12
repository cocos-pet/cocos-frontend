import Divider from "@common/component/Divider/Divider";
import Spacing from "@common/component/Spacing/Spacing";

/*
localhost:5173/main
*/
const Main = () => {
  return (
    <div>
      <span>main</span>
      <Spacing marginBottom="10" />
      <Divider size="small" />
      <Spacing marginBottom="10" />
      <Divider />
    </div>
  );
};

export default Main;
