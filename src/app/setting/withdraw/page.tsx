"use client";
import HeaderNav from "src/design-system/HeaderNav/HeaderNav";
import { IcX } from "@asset/svg";
import { useRouter } from "next/navigation";
import * as styles from "./page.css";
import { Button } from "@design-system/Button";
import { PATH } from "@route/path";
import { useWithdraw } from "@api/domain/setting/hook";

export default function Withdraw() {
  const router = useRouter();
  const { mutate: withdraw } = useWithdraw();

  const handleWithdraw = () => {
    withdraw();
  };
  return (
    <div>
      <HeaderNav
        leftIcon={<IcX width={20} height={20} />}
        centerContent={"회원 탈퇴"}
        onLeftClick={() => router.push(PATH.SETTING.ROOT)}
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
          <Button
            width="9.6rem"
            variant="solidNeutral"
            size="large"
            label="이전으로"
            onClick={() => router.push(PATH.SETTING.ROOT)}
          />
          <Button width="22.7rem" variant="solidPrimary" size="large" label="탈퇴하기" onClick={handleWithdraw} />
        </div>
      </div>
    </div>
  );
}
