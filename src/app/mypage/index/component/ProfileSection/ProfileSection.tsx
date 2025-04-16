import React from "react";
import * as styles from "../../style/mypage.css";
import Divider from "@common/component/Divider/Divider";
import { Button } from "@common/component/Button";
import { IcChevronRight, IcPlus } from "@asset/svg";
import Image from "next/image";
import AddFavoriteHospital from "../AddFavoriteHospital";
import { Disease, MemberInfo, PetInfo } from "../../hooks/useMypageState";

interface ProfileSectionProps {
  isLogin: boolean;
  isRegister: boolean;
  member?: MemberInfo;
  petInfo?: PetInfo;
  onLogin: () => void;
  onNavigateToEditPet: () => void;
  onNavigateToRegisterPet: () => void;
}

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
          <Image className={styles.animalImage} alt="프로필이미지" src={petInfo.petImage} width={52} height={52} />
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
      <Image className={styles.profileImage} alt="프로필 이미지" src={member.profileImage} width={68} height={68} />
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
    <AddFavoriteHospital isAdded={false} />
  </div>
);

const ProfileSection = ({
  isLogin,
  isRegister,
  member,
  petInfo,
  onLogin,
  onNavigateToEditPet,
  onNavigateToRegisterPet,
}: ProfileSectionProps) => {
  if (!isLogin) {
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

export default ProfileSection;
