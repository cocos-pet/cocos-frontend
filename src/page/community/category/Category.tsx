import { useSearchParams, useNavigate } from "react-router-dom";
import * as styles from "./Category.css";
import { postData } from "@shared/constant/postData";
import Content from "@common/component/Content/Content";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { Icfilter, IcLeftarrow, IcSearch, Icfilteron } from "@asset/svg";
import FloatingBtn from "@common/component/FloatingBtn/Floating";
import FilterBottomSheet from "@shared/component/FilterBottomSheet/FilterBottomSheet";
import { useFilterStore } from "@store/filter";
import { PATH } from "@route/path";
import { formatTime } from "@shared/util/formatTime";

export const validTypes = ["symptom", "hospital", "healing", "magazine"];
const categoryMapping: { [key: string]: string } = {
  symptom: "증상·질병",
  hospital: "병원고민",
  healing: "일상·치유",
  magazine: "코코스매거진",
};

const Category = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const navigate = useNavigate();

  const { toggleOpen, selectedChips } = useFilterStore();
  const isFilterOn =
    !!selectedChips.breedId.length || !!selectedChips.diseaseIds.length || !!selectedChips.symptomIds.length;

  const filteredPosts = postData.filter((post) => post.category.toLowerCase() === type);

  const handleGoBack = () => {
    navigate(PATH.COMMUNITY.ROOT);
  };

  // 유효하지 않은 타입 처리
  if (!type || !validTypes.includes(type)) {
    return (
      <div>
        <h1>해당 카테고리는 존재하지 않습니다.</h1>
      </div>
    );
  }

  // 게시글이 없는 경우 처리
  if (filteredPosts.length === 0) {
    return (
      <div>
        <h1>게시글이 없습니다.</h1>
      </div>
    );
  }

  const categoryName = categoryMapping[type] || "알 수 없는 카테고리";

  return (
    <div className={styles.categoryContainer}>
      <HeaderNav
        leftIcon={<IcLeftarrow />}
        centerContent={categoryName}
        rightBtn={<IcSearch />}
        onLeftClick={handleGoBack}
      />

      {/* 코코스매거진이 아닐 때만 필터 아이콘 표시 */}
      {type !== "magazine" && (
        <div className={styles.filterContainer}>
          {isFilterOn ? <Icfilteron onClick={toggleOpen} width={24} /> : <Icfilter onClick={toggleOpen} width={24} />}
          <FilterBottomSheet />
        </div>
      )}

      {/* 게시글 목록 */}
      <div className={styles.postsContainer}>
        {filteredPosts.map((post) => (
          <Content
            key={post.id}
            breed={post.breed}
            petAge={post.petAge}
            postTitle={post.title}
            postContent={post.content}
            likeCnt={post.likeCount}
            commentCnt={post.commentCount}
            postImage={post.image}
            onClick={() => navigate(PATH.COMMUNITY.CATEGORY)}
            timeAgo={formatTime(post.updatedAt)}
            category={post.category}
          />
        ))}
      </div>

      {/* 코코스매거진이 아닐 때만 플로팅 버튼 표시 */}
      {type !== "magazine" && (
        <div className={styles.floatingBtnContainer}>
          <FloatingBtn onClick={() => navigate(`/community/write?category=${type}`)} />
        </div>
      )}
    </div>
  );
};

export default Category;
