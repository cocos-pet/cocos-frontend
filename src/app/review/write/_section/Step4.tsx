import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcDeleteBlack } from "@asset/svg/index";
import Tab from "@common/component/Tab/Tab";
import { Button } from "@common/component/Button";
import * as styles from "./Step3.style.css";
import { useState } from "react";
import FeedbackCategoryContent from "@app/review/write/_component/FeedbackCategoryContent";
import Image from "next/image";
import feedbackImg from "@asset/image/reviewFeedback.png";
import { FEEDBACK_CATEGORIES } from "../constant";
import { useFormContext } from "react-hook-form";
import { ReviewFormData } from "../page";
import ExitConfirmModal from "../_component/ExitConfirmModal";
type CategoryType = "good" | "bad";

interface Step3Props {
  onPrev: () => void;
  onNext: () => void;
}

const Step3 = ({ onPrev, onNext }: Step3Props) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("good");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { watch } = useFormContext<ReviewFormData>();

  const goodReviewIds = watch("goodReviewIds");
  const badReviewIds = watch("badReviewIds");

  const isFromValid = goodReviewIds.length > 0 || badReviewIds.length > 0;

  const handleGoHospitalDetail = () => {
    window.history.go(-2);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      {/* 상단 리뷰 영역 */}
      <HeaderNav
        centerContent="리뷰작성(3/4)"
        leftIcon={<IcDeleteBlack style={{ width: 24, height: 24 }} onClick={handleModalOpen} />}
      />
      <div className={styles.backgroundColor}>
        {/* 타이틀 */}
        <section className={styles.TopLayout}>
          <Image src={feedbackImg} alt="review-feedback img" className={styles.img} />
          <div className={styles.titleBox}>
            <h1 className={styles.title}>진료 경험은 어땠나요?</h1>
            <div>
              <p className={styles.docs}>진료 후기를 하나 이상 골라주세요.</p>
              <p className={styles.docs}>좋아요/아쉬워요 각각 3개까지 선택할 수 있어요.</p>
            </div>
          </div>
        </section>

        {/* 탭 */}
        <section>
          <div className={styles.TapBox}>
            {FEEDBACK_CATEGORIES.map(({ id, label }) => (
              <Tab
                key={id}
                active={selectedCategory === id}
                variant={selectedCategory}
                onClick={() => setSelectedCategory(id as CategoryType)}
              >
                {label}
              </Tab>
            ))}
          </div>

          {/* 3-1. 진료 후기 칩 선택 */}
          <FeedbackCategoryContent category={selectedCategory} />
        </section>

        {/* 하단 버튼 영역 */}
        <section className={styles.btnLayout}>
          <Button label="이전으로" size="large" variant="solidNeutral" onClick={onPrev} />
          <Button label="다음으로" size="large" variant="solidPrimary" onClick={onNext} disabled={!isFromValid} />
        </section>
      </div>

      {/* 이탈 방지 모달 */}
      <ExitConfirmModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleGoHospitalDetail={handleGoHospitalDetail}
      />
    </>
  );
};

export default Step3;
