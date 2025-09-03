"use client";

import {IcChevronLeft, IcEditPen} from "@asset/svg";
import HeaderNav from "@design-system/HeaderNav/HeaderNav";
import * as styles from "./page.css";
import Divider from "@design-system/Divider/Divider";
import {useRouter} from "next/navigation";
import SimpleBottomSheet from "@design-system/Button/SimpleBottomSheet/SimpleBottomSheet";
import useSimpleBottomSheet from "@shared/hook/useSimpleBottomSheet";
import {PATH} from "@route/path";
import {useLogout} from "@api/domain/setting/hook";
import {useAuth} from "@providers/AuthProvider";
import {useEffect} from "react";

export default function Setting() {
  const router = useRouter();
  const { isOpen, openBottomSheet, closeBottomSheet } = useSimpleBottomSheet();
  const { mutate: logout } = useLogout();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(PATH.LOGIN);
    }
  }, [isAuthenticated, router]);

  const handleMoveWithdraw = () => {
    router.push(PATH.SETTING.WITHDRAW);
  };

  return (
    <>
      <HeaderNav
        leftIcon={<IcChevronLeft width={20} height={20} />}
        centerContent={"설정"}
        onLeftClick={() => router.push("/mypage")}
      />

      <div className={styles.settingWrapper}>
        <div className={styles.myprofileSettingWrapper}>
          <span className={styles.myprofileText}>마이 프로필</span>
          <Divider size={"small"} />
          <div className={styles.editMyProfile}>
            <span className={styles.myProfileSpan} onClick={() => router.push(PATH.SETTING.EDIT_PROFILE)}>
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
              <span className={styles.myProfileSpanText}>로그아웃</span>
            </span>
          </div>

          <div className={styles.editMyProfile}>
            <span className={styles.myProfileSpan} onClick={handleMoveWithdraw}>
              <span className={styles.myProfileSpanText}>회원탈퇴</span>
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
        rightOnClick={() => logout()}
      />
    </>
  );
}
