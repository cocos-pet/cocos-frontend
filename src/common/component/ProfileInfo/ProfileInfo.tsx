import Image from "next/image";
import { IcBaseProfileImage } from "@asset/svg";
import * as styles from "./ProfileInfo.css.ts";
import { formatTime } from "@shared/util/formatTime.ts";

interface ProfileInfoProps {
  profileImage?: string;
  nickname?: string;
  breed?: string;
  petAge?: number;
  createdAt?: string;
  onClick?: () => void;
  showTimeInfo?: boolean;
}

const ProfileInfo = ({
  profileImage,
  nickname,
  breed,
  petAge,
  createdAt,
  onClick,
  showTimeInfo = true,
}: ProfileInfoProps) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {profileImage ? (
        <Image src={profileImage} alt="userProfile" className={styles.profileImage} width={32} height={32} />
      ) : (
        <IcBaseProfileImage width={32} height={32} />
      )}
      <div className={styles.info}>
        <div className={styles.infoName}>{nickname}</div>
        {(breed || petAge || (createdAt && showTimeInfo)) && (
          <div className={styles.infoDetail}>
            {breed && petAge && `${breed}·${petAge}살`}
            {(breed || petAge) && createdAt && showTimeInfo && " · "}
            {createdAt && showTimeInfo && formatTime(createdAt)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
