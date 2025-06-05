"use client";
import * as styles from "../../_style/profile.css";
import * as favoriteHospitalStyles from "./FavoriteHospital.css";
import Divider from "@common/component/Divider/Divider";
import { Disease, MemberInfo, PetInfo } from "../../_hooks/useProfileState";
import { useRouter } from "next/router";
import { useGetFavoriteHospital } from "@api/shared/hook";

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

      {member.nickname && <FavoriteHospital nickname={member.nickname} />}
    </div>
  );
};

export default ProfileSection;

const FavoriteHospital = ({ nickname }: { nickname: string }) => {
  //리다이렉팅 url 연결하기
  const { data } = useGetFavoriteHospital(nickname);
  const router = useRouter();
  if (!data) return null;

  //todo: 병원 상세 페이지 URL 확정되면 상수값으로 대체하기 (현재는 임시)
  const handleClickContainer = () => {
    router.push(`/hospital-detail/${data.id}`);
  };

  return (
    <>
      <Divider size="small" />
      <div className={favoriteHospitalStyles.favoriteHospitalContainer} onClick={handleClickContainer}>
        <div className={favoriteHospitalStyles.redirectBox}>
          <div className={favoriteHospitalStyles.leftContentBox}>
            <span className={favoriteHospitalStyles.leftTopText}>즐겨찾는 병원</span>
            <span className={favoriteHospitalStyles.leftMiddleText}>{data.name}</span>
            <span className={favoriteHospitalStyles.leftBottomText}>
              {data.address}
              {/* {`· 리뷰 ${selectedHospital?.reviewCount}`} */}
            </span>
          </div>
          {/* <Image src={data.image ?? nocategory} alt="병원이미지" className={favoriteHospitalStyles.rightContentBox} /> */}
        </div>
      </div>
    </>
  );
};
