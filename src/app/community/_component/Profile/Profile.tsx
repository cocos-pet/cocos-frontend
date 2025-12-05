import { IcBaseProfileImage } from "@asset/svg";
import {
  info,
  infoDetail,
  infoName,
  profileContainer,
  profileImage,
} from "@app/community/_component/Profile/Profile.css.ts";
import LazyImage from "@common/component/LazyImage";
import { formatTime } from "@shared/util/formatTime.ts";

interface propsType {
  handleProfileClick?: () => void;
  profileImageData?: string | undefined;
  nickname?: string;
  breed?: string;
  petAge?: number;
  createdAt: string | undefined;
}

const Profile = (props: propsType) => {
  const { handleProfileClick, profileImageData, nickname, breed, petAge, createdAt } = props;
  return (
    <div className={profileContainer} onClick={handleProfileClick}>
      {profileImageData ? (
        <LazyImage src={profileImageData} alt="userProfile" className={profileImage} width="3.2rem" height="3.2rem" />
      ) : (
        <IcBaseProfileImage width={32} height={32} />
      )}
      <div className={info}>
        <div className={infoName}>{nickname}</div>
        <div className={infoDetail}>
          {breed}·{petAge}살 · {formatTime(createdAt)}
        </div>
      </div>
    </div>
  );
};

export default Profile;
