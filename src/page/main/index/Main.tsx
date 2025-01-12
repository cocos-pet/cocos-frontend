import Divider from "@common/component/Divider/Divider";
import Spacing from "@common/component/Spacing/Spacing";
import Tab from "@common/component/Tab/Tab";

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
      <Tab active={true}>하이</Tab>
      <Tab active={true}>Label</Tab>
      <Tab active={true}>최신글</Tab>
      <Divider />
    </div>
  );
};

export default Main;
