import Image from "next/image";
import {IcBaseProfileImage} from "@asset/svg";
import {formatTime} from "@shared/util/formatTime.ts";
import {
  info,
  infoDetail,
  infoName,
  profileContainer,
  profileImage,
} from "@app/community/_component/Profile/Profile.css.ts";

interface propsType {
  handleProfileClick: () => void;
  profileImageData?: string | undefined;
  nickname?: string;
  breed?: string;
  petAge?: number;
  createdAt: string | undefined;
}

const Profile = (props: propsType) => {
  const {
    handleProfileClick,
    profileImageData,
    nickname,
    breed,
    petAge,
    createdAt,
  } = props;
  return (
    <div className={profileContainer} onClick={handleProfileClick}>
      {profileImageData ? (
        <Image
          src={profileImageData}
          alt="userProfile"
          className={profileImage}
          width={32}
          height={32}
        />
      ) : (
        <IcBaseProfileImage width={32} height={32} />
      )}
      <div className={info}>
        <div className={infoName}>{nickname}</div>
        <div className={infoDetail}>
          {breed}·{petAge}살 · {formatTime(createdAt ?? "")}
        </div>
      </div>
    </div>
  );
};

export default Profile;
