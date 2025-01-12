import {
  category,
  container,
  contents,
  subContents,
  title,
} from "./Content.css.ts";

type ContentPropTypes = Exclude<ContentVariants, undefined>;

const Content = ({}: ContentPropTypes) => {
  return (
    <div className={container}>
      <div className={category}>골든 리트리버 · 12살 </div>
      <div className={title}>강아직 헥헥거림 증상 </div>
      <div className={contents}>
        강아지가 2주전부터 헥헥거림 증상이 심한데...{" "}
      </div>
      <div className={subContents}></div>
    </div>
  );
};

export default Content;
