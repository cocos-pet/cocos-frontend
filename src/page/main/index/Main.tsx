import Spacing from "@common/component/Spacing/Spacing";
import { Button } from "@common/component/Button";
import { IcTest } from "@asset/svg";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet";
import MainFooter from "./mainFooter/MainFooter";
import Divider from "@common/component/Divider/Divider";
import HotPost from "./hotPost/HotPost";
import MainHeader from "./mainHeader/mainHeader";

const postsData = [
  { id: 1, title: "반려동물 건강 관리법" },
  { id: 2, title: "가장 인기 있는 산책 코스" },
  { id: 3, title: "반려동물 먹이 추천" },
  { id: 4, title: "집에서 하는 셀프 미용 팁" },
  { id: 5, title: "반려동물과 함께하는 여행 준비" },
];

const petName = "멍멍이";

const Main = () => {
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

      <div>
        <MainHeader />
        <Divider />
        <HotPost petName={petName} posts={postsData} />
        <Divider />
        <MainFooter />
      </div>
    </>
  );
};

export default Main;
