import React from "react";
import * as styles from "../../style/profile.css";
import Divider from "@common/component/Divider/Divider";
import { Disease, MemberInfo, PetInfo } from "../../hooks/useProfileState";

interface ProfileSectionProps {
  member?: MemberInfo;
  petInfo?: PetInfo;
}

const PetProfile = ({ petInfo }: { petInfo?: PetInfo }) => {
  if (!petInfo) return null;

  return (
    <div className={styles.animalProfileWrapper}>
      {petInfo.petImage && <img className={styles.animalImage} alt="펫이미지" src={petInfo.petImage} />}
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
    </div>
  );
};

const ProfileSection = ({ member, petInfo }: ProfileSectionProps) => {
  if (!member) return null;

  return (
    <div className={styles.loginProfile}>
      {member.profileImage && <img className={styles.profileImage} alt="프로필 이미지" src={member.profileImage} />}
      <span className={styles.userProfileText}>{member.nickname}</span>
      <Divider size="small" />

      <PetProfile petInfo={petInfo} />
    </div>
  );
};

export default ProfileSection;
