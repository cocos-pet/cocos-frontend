import * as styles from "./Nickname.css";
import {ChangeEvent, useState} from "react";
import {useRouter} from "next/navigation";
import {ONBOARDING_GUIDE} from "@page/onboarding/index/constant/onboardingGuide";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import {validateNickname} from "@shared/util/validateNickname";
import {Button} from "@common/component/Button";
import {TextField} from "@common/component/TextField";
import nicknameCoco from "@asset/image/nicknameCoco.png";
import {useCheckNicknameGet} from "@api/domain/onboarding/nicknameDuplicate/hook";
import {usePatchNickname} from "@api/domain/onboarding/nickname/hook";
import {PATH} from "@route/path";
import Loading from "@common/component/Loading/Loading.tsx";
import Image from "next/image";

const Nickname = () => {
  // 상태 하나로 관리
  const [nickname, setNickname] = useState("");

  // api 참 거짓을 반환
  const { data: isExistNickname } = useCheckNicknameGet(nickname);

  const { mutate: patchNickname, mutateAsync, isPending } = usePatchNickname();

  // 닉네임 입력 처리
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  // 유효성 검사 결과
  const validationMessages = nickname ? validateNickname(nickname) : [];

  // 중복 검사 메시지 추가
  if (isExistNickname?.isExistNickname) {
    validationMessages.push("이 닉네임은 이미 사용 중이에요.");
  }

  const isValid = nickname && validationMessages.length === 0;

  // TextField 상태
  const textFieldState =
    nickname === "" || validationMessages.length === 0 ? "default" : "error";

  // 뒤로 가기
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  // 다음 버튼
  const patchingNickname = async () => {
    await mutateAsync(nickname);
    router.push(PATH.ONBOARDING.COMPLETE);
  };

  if (isPending) return <Loading height={40} />;

  const handleNext = () => {
    // patchNickname(nickname);
    // router.push(PATH.ONBOARDING.COMPLETE);
    patchingNickname();
  };

  return (
    <>
      {/* 상단 영역 */}
      <div className={styles.layout}>
        <div>
          <Image src={nicknameCoco} alt="onboarding-character" className={styles.imgStyle} width={276} height={155} />
          <Title text={ONBOARDING_GUIDE.nickname.title} />
          <Docs text={ONBOARDING_GUIDE.nickname.docs} />
        </div>

        {/* 닉네임 입력 영역 */}
        <div>
          <TextField
            state={textFieldState}
            value={nickname}
            onChange={handleChange}
            placeholder="닉네임을 입력해주세요."
            isDelete={false}
          />
          <div className={styles.errorLayout}>
            {validationMessages.map((message) => (
              <Docs key={`error-${message}`} state="lError" text={message} />
            ))}
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={!isValid} onClick={handleNext} />
      </div>
    </>
  );
};

export default Nickname;
