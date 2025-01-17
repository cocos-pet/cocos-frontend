import { IcChevronLeft, IcEditPen, IcOut } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import * as styles from "./Setting.css";
import Divider from "@common/component/Divider/Divider";
import { useNavigate } from "react-router-dom";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet";
import useSimpleBottomSheet from "@shared/hook/useSimpleBottomSheet";

//todo: 로그아웃 api 연결 필요
const Setting = () => {
  const navigate = useNavigate();
  const { isOpen, openBottomSheet, closeBottomSheet } = useSimpleBottomSheet();

  return (
    <>
      <HeaderNav
        leftIcon={<IcChevronLeft width={20} height={20} />}
        centerContent={"설정"}
        onLeftClick={() => navigate("/mypage")}
      />

      <div className={styles.settingWrapper}>
        <div className={styles.myprofileSettingWrapper}>
          <span className={styles.myprofileText}>마이 프로필</span>
          <Divider size={"small"} />
          <div className={styles.editMyProfile}>
            <span className={styles.myProfileSpan} onClick={() => navigate("/setting/edit-profile")}>
              <IcEditPen width={20} height={20} />
              <span className={styles.myProfileSpanText}>내 정보수정</span>
            </span>
          </div>
        </div>

        <div className={styles.accountWrapper}>
          <span className={styles.myprofileText}>계정</span>
          <Divider size={"small"} />
          <div className={styles.editMyProfile}>
            <span className={styles.myProfileSpan} onClick={() => openBottomSheet()}>
              <IcOut width={20} height={20} />
              <span className={styles.myProfileSpanText}>로그아웃</span>
            </span>
          </div>
        </div>
      </div>

      <SimpleBottomSheet
        isOpen={isOpen}
        handleClose={closeBottomSheet}
        content="로그아웃 하시겠어요?"
        subContent="언제든 다시 오시면 기다리고 있을게요!"
        leftText="취소"
        rightText="로그아웃"
        leftOnClick={() => closeBottomSheet()}
        rightOnClick={() => alert("로그아웃 구현 예정")}
      />
    </>
  );
};

export default Setting;
