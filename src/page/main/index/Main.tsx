import Divider from "@common/component/Divider/Divider";
import Spacing from "@common/component/Spacing/Spacing";
import Content from "@common/component/Content/Content.tsx";

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
      <Content
        breed="골든 리트리버"
        age="12살"
        postTitle="강아지 헥헥거림 증상"
        postContent="강아지가 2주 전부dfsfdsfdsfe터 헥헥거림 증상이 심한데..."
        likeCnt={10}
        commentCnt={5}
        timeAgo="1시간 전"
      />
      <Content
        breed="골든 리트리버"
        age="12살"
        postTitle="강아지 헥헥거림 증상"
        postContent="강아지가 2주 전부터 헥헥거림 증상이 심한데..."
        likeCnt={10}
        commentCnt={5}
        timeAgo="1시간 전"
      />
    </div>
  );
};

export default Main;
