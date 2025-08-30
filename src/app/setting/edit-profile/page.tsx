"use client";
import { IcChevronLeft } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { useRouter } from "next/navigation";
import * as styles from "./ProfileEdit.css";
import Divider from "src/design-system/Divider/Divider";
import { Button } from "@common/component/Button";
import { PATH } from "@route/path";
import { useGetMemberInfo } from "@api/domain/mypage/hook";
import { useAuth } from "@providers/AuthProvider";

const ProfileEdit = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const { data: member } = useGetMemberInfo();

  if (!isAuthenticated) {
    router.push(PATH.LOGIN);
  }

  if (!member) return;

  return (
    <div className={styles.profileEditContainer}>
      <HeaderNav
        leftIcon={<IcChevronLeft width={20} height={20} />}
        centerContent={"내 정보 수정"}
        onLeftClick={() => router.push(PATH.SETTING.ROOT)}
      />
      <section className={styles.profileEditWrapper}>
        <img
          className={styles.profile}
          src={member.profileImage}
          alt="프로필 이미지"
        />
        <div className={styles.profileContent}>
          <span className={styles.nicknameText}>닉네임</span>
          <Divider size={"small"} />
          <span className={styles.userNickname}>{member.nickname}</span>
        </div>
      </section>

      <div className={styles.buttonWrapper}>
        <Button
          variant="solidPrimary"
          size="large"
          label="확인하기"
          onClick={() =>
            alert("이스터에그 발견! 수정은 추후 구현될 예정입니다 :)")
          }
        />
      </div>
    </div>
  );
};

export default ProfileEdit;
