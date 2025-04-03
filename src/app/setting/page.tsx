"use client";

import { IcChevronLeft, IcEditPen, IcOut } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import * as styles from "./index/Setting.css";
import Divider from "@common/component/Divider/Divider";
import { useRouter } from "next/navigation";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet";
import useSimpleBottomSheet from "@shared/hook/useSimpleBottomSheet";
import { PATH } from "@route/path";
import { useLogout } from "@api/domain/setting/hook";
import { useProtectedRoute } from "@route/useProtectedRoute";

export default function SettingPage() {
  useProtectedRoute();
  const router = useRouter();
  const { isOpen, openBottomSheet, closeBottomSheet } = useSimpleBottomSheet();
  const { mutate: logout } = useLogout();

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
        rightOnClick={() => logout()}
      />
    </>
  );
} 