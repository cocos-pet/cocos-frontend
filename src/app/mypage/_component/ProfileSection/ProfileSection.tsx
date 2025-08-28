import React from "react";
import * as styles from "../../_style/mypage.css";
import Divider from "@common/component/Divider/Divider";
import { Button } from "@common/component/Button";
import { IcChevronRight, IcPlus } from "@asset/svg";
import AddFavoriteHospital from "../AddFavoriteHospital";
import { Disease, MemberInfo } from "../../_hooks/useMypageState";
import { PetInfo, useProfileSectionState } from "@app/mypage/_hooks/useProfileSectionState";
import { useMypageMemberInfo } from "@app/mypage/_store/mypageStore";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";
import { useAuth } from "@providers/AuthProvider";
import LazyImage from "@common/component/LazyImage";

interface ProfileSectionProps {
  onNavigateToEditPet: () => void;
  onNavigateToRegisterPet: () => void;
}

const ProfileSection = ({ onNavigateToEditPet, onNavigateToRegisterPet }: ProfileSectionProps) => {
  const navigate = useRouter();
  const { isAuthenticated } = useAuth();
  const member = useMypageMemberInfo((s) => s.member);
  const { isRegister, petInfo } = useProfileSectionState();

  const onLogin = () => {
    navigate.push(PATH.LOGIN);
  };

  if (!isAuthenticated) {
    return <UnloggedProfile onLogin={onLogin} />;
  }

  if (!member) {
    return null;
  }

  return (
    <LoggedProfile
      member={member}
      isRegister={isRegister}
      petInfo={petInfo}
      onNavigateToEditPet={onNavigateToEditPet}
      onNavigateToRegisterPet={onNavigateToRegisterPet}
    />
  );
};

/*
  아래는 사용되는 ProfileSection에서만 사용되는 컴포넌트들
*/
const UnloggedProfile = ({ onLogin }: { onLogin: () => void }) => (
  <div className={styles.unloginProfile}>
    <span className={styles.pleaseLoginText}>
      {"로그인 후"}
      <br />
      {"고민을 공유해보세요!"}
    </span>
    <Button label={"로그인"} onClick={onLogin} />
  </div>
);

const LoggedProfile = ({
  member,
  isRegister,
  petInfo,
  onNavigateToEditPet,
  onNavigateToRegisterPet,
}: {
  member: MemberInfo;
  isRegister: boolean;
  petInfo?: PetInfo;
  onNavigateToEditPet: () => void;
  onNavigateToRegisterPet: () => void;
}) => (
  <div className={styles.loginProfile}>
    {member.profileImage && (
      <LazyImage
        className={styles.profileImage}
        alt="프로필 이미지"
        src={member.profileImage}
        width="4.8rem"
        height="4.8rem"
      />
    )}
    <span className={styles.userProfileText}>{member.nickname}</span>
    <Divider size="small" />

    <PetProfile
      petInfo={petInfo}
      isRegister={isRegister}
      onNavigateToEditPet={onNavigateToEditPet}
      onNavigateToRegisterPet={onNavigateToRegisterPet}
    />

    <Divider size="small" />
    {member.nickname && <AddFavoriteHospital nickname={member.nickname} />}
  </div>
);

const PetProfile = ({
  petInfo,
  isRegister,
  onNavigateToEditPet,
  onNavigateToRegisterPet,
}: {
  petInfo?: PetInfo;
  isRegister: boolean;
  onNavigateToEditPet: () => void;
  onNavigateToRegisterPet: () => void;
}) => {
  if (isRegister && petInfo) {
    return (
      <div className={styles.animalProfileWrapper}>
        {petInfo.petImage && (
          <LazyImage
            className={styles.animalImage}
            alt="프로필이미지"
            src={petInfo.petImage}
            width="5.2rem"
            height="5.2rem"
          />
        )}
        <div className={styles.animalProfileTextWrapper}>
          <span className={styles.animalMainText}>
            {`${petInfo.breed} `}
            <span className={styles.textDivider}>|</span>
            {` ${petInfo.petAge} `}
            <span className={styles.textDivider}>|</span>
          </span>
          <span className={styles.animalSubText}>
            {"앓고있는 병 "}
            {petInfo.diseases?.map((disease: Disease) => (
              <span className={styles.spanNoWrap} key={`hash-disease-${disease.id}`}>
                {`#${disease.name}`}&nbsp;
              </span>
            ))}
          </span>
        </div>
        <IcChevronRight width={28} height={28} style={{ cursor: "pointer" }} onClick={onNavigateToEditPet} />
      </div>
    );
  }

  return (
    <span style={{ width: "15.3rem" }}>
      <Button
        variant={"solidNeutral"}
        rightIcon={<IcPlus width={20} height={20} />}
        size={"small"}
        label="반려동물 추가하기"
        onClick={onNavigateToRegisterPet}
      />
    </span>
  );
};

export default ProfileSection;
