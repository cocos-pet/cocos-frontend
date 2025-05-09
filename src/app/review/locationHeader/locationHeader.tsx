import * as styles from "./locationHeader.css";
import { useQuery } from "@tanstack/react-query";
import { IcChevronDown, Icon } from "@asset/svg";

interface LocationResponse {
  code: number;
  message: string;
  data: {
    townId: number;
    townName: string;
  };
}

const mockLocationData: LocationResponse = {
  code: 1073741824,
  message: "success",
  data: {
    townId: 1,
    townName: "반포본동",
  },
};

const getLocationInfo = async (): Promise<LocationResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockLocationData);
    }, 500);
  });
};

export default function LocationHeader() {
  const { data: locationData } = useQuery<LocationResponse>({
    queryKey: ["location"],
    queryFn: getLocationInfo,
  });

  const handleLocationClick = () => {
    console.log("위치 선택 클릭됨");
    // todo: bottomSheet 로직짜기
  };

  return (
    <div className={styles.locationHeader}>
      <div className={styles.locationWrapper} onClick={handleLocationClick}>
        <Icon style={{ width: "2rem", height: "2rem" }} />
        <span className={styles.locationText}>{locationData?.data.townName}</span>
        <IcChevronDown style={{ width: "2rem", height: "2rem" }} />
      </div>
    </div>
  );
}
