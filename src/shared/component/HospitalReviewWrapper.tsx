import React, { useState } from "react";
import * as styles from "./HospitalReviewWrapper.css";
import { IcEllipses } from "@asset/svg";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet";
import ReviewItem from "./ReviewItem/ReviewItem";
import { mockReviews } from "@shared/constant/HospitalReviewConstant";
import { isLoggedIn } from "@api/index";
interface HospitalReviewWrapperProps {
  isMypage?: boolean;
}

const HospitalReviewWrapper = ({ isMypage = false }: HospitalReviewWrapperProps) => {
  const [isDeleteReviewModalOpen, setIsDeleteReviewModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isBlurred = !isLoggedIn();

  const handleDropdownClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDeleteReviewModal = () => {
    setIsDeleteReviewModalOpen(false);
  };

  const openDeleteReviewModal = () => {
    setIsDeleteReviewModalOpen(true);
    handleDropdownClick();
  };

  const handleProfileClick = () => {
    alert("프로필 클릭");
  };

  const handleHospitalDetailClick = () => {
    alert("병원 상세 클릭");
  };

  if (!mockReviews.length) return <div className={styles.nothingContent}>{"아직 작성한 후기가 없어요."}</div>;

  return (
    <>
      {mockReviews.map((review) => (
        <section key={review.id} className={styles.reviewContainer}>
          <div className={styles.visitWrapper}>
            <span className={styles.visitDate}>{review.vistitedAt} 방문</span>
            {isMypage && <IcEllipses width={20} height={20} onClick={handleDropdownClick} />}
            {isDropdownOpen && (
              <div className={styles.dropdownContainer}>
                <div className={styles.dropdownItem} onClick={openDeleteReviewModal}>
                  삭제하기
                </div>
              </div>
            )}
          </div>

          <ReviewItem
            handleProfileClick={handleProfileClick}
            handleHospitalDetailClick={handleHospitalDetailClick}
            reviewData={review}
            isBlurred={isBlurred}
            isNoProfile={true}
          />
        </section>
      ))}

      <SimpleBottomSheet
        isOpen={isDeleteReviewModalOpen}
        handleClose={closeDeleteReviewModal}
        content="리뷰를 정말 삭제할까요?"
        leftText="취소"
        rightText="삭제할게요"
        leftOnClick={() => closeDeleteReviewModal()}
        rightOnClick={() => alert("Todo")}
      />
    </>
  );
};

export default HospitalReviewWrapper;
