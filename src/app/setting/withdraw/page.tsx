"use client";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcX } from "@asset/svg";
import { useRouter } from "next/navigation";
import * as styles from "./page.css";
import { Button } from "@common/component/Button";
import { PATH } from "@route/path";
export default function Withdraw() {
  const router = useRouter();

  const handleWithdraw = () => {
    alert("탈퇴 처리 중입니다. - 아직 구현 안됐어요.");
    router.push(PATH.LOGIN);
  };
  return (
    <div>
      <HeaderNav
        leftIcon={<IcX width={20} height={20} />}
        centerContent={"탈퇴하기"}
        onLeftClick={() => router.back()}
      />
      <div className={styles.withdrawBodyWrapper}>
        <div className={styles.withdrawTitleWrapper}>
          <span className={styles.withdrawTitle}>정말 탈퇴하시겠습니까?</span>
          <span className={styles.withdrawSubTitle}>
            회원 탈퇴 시 계정 정보 및 작성하신 모든 게시글이 삭제되어
            <br />
            복구가 불가능합니다.
          </span>
        </div>
        <div className={styles.withdrawButtonWrapper}>
          <Button width="9.6rem" variant="solidNeutral" size="large" label="이전으로" onClick={() => router.back()} />
          <Button width="22.7rem" variant="solidPrimary" size="large" label="탈퇴하기" onClick={handleWithdraw} />
        </div>
      </div>
    </div>
  );
}
