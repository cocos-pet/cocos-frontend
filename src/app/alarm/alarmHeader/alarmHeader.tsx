"use client";
import { IcLeftarrow } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { PATH } from "@route/path";
import { useRouter } from "next/navigation";

export default function AlarmHeader() {
  const router = useRouter();

  return (
    <div>
      <HeaderNav
        leftIcon={<IcLeftarrow width={20} height={20} />}
        centerContent="알림"
        onLeftClick={() => router.push(PATH.MAIN)}
      />
    </div>
  );
}
