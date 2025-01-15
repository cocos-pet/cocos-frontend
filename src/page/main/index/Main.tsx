import Divider from "@common/component/Divider/Divider";
import Spacing from "@common/component/Spacing/Spacing";
import { Button } from "@common/component/Button";
import { IcTest } from "@asset/svg";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet";
import CommentList from "@common/component/Comment/CommentList";
import { mockComments } from "../../../shared/constant/mockComment";
const Main = () => {
  // const { category, categoryData, setOpen, toggleOpen } = useFilterStore();

  return (
    <>
      <div style={{ margin: "3rem", display: "flex", gap: "1rem" }}>
        <Button label="Button" size="small" variant="solidPrimary" disabled={true} />
        <Button label="Button" size="small" variant="solidPrimary" disabled={false} />
        <Button label="Button" size="medium" variant="solidPrimary" disabled={false} />
        <Button label="Button" size="large" variant="solidPrimary" disabled={false} />
      </div>
      <div style={{ margin: "3rem", display: "flex", gap: "1rem" }}>
        <Button label="Button" size="small" variant="solidNeutral" disabled={true} />
        <Button label="Button" size="small" variant="solidNeutral" disabled={false} />
        <Button label="Button" size="medium" variant="solidNeutral" disabled={false} />
        <Button label="Button" size="large" variant="solidNeutral" disabled={false} />
      </div>
      <div style={{ margin: "3rem", display: "flex", gap: "1rem" }}>
        <Button label="Button" size="small" variant="outlinePrimary" disabled={true} />
        <Button label="Button" size="small" variant="outlinePrimary" disabled={false} />
        <Button label="Button" size="medium" variant="outlinePrimary" disabled={false} />
        <Button label="Button" size="large" variant="outlinePrimary" disabled={false} />
      </div>

      <div style={{ margin: "3rem", display: "flex", gap: "1rem" }}>
        <Button label="Button" leftIcon={<IcTest />} size="medium" variant="solidPrimary" disabled={false} />
        <Button label="Button" rightIcon={<IcTest />} size="medium" variant="solidPrimary" disabled={false} />
        <Button
          label="Button"
          leftIcon={<IcTest />}
          rightIcon={<IcTest />}
          size="medium"
          variant="solidPrimary"
          disabled={false}
        />
      </div>

      <span>main</span>
      <SimpleBottomSheet />
      <Spacing marginBottom="10" />
      <Divider size="small" />
      <Spacing marginBottom="10" />
      <Divider />
      <CommentList comments={mockComments} />
    </>
  );
};

export default Main;
