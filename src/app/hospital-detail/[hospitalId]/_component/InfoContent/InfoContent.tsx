"use client";

import KakaoMap from "../KakaoMap/KakaoMap";
import * as styles from "./InfoContent.css";
import { IcCopy } from "@asset/svg";

export default function InfoContent() {
//목데이터
  const data = {
    name: "일곡동물병원",
    phoneNumber: "571-9114",
    tags: ["강아지", "심장병"],
    introduction: "병원 이름은 반려동물과 보호자가 안심할 수 있는 공간을 제공합니다. 전문적인 진료 서비스와 최신 의료 장비를 갖추어 정확한 진단과 치료를 보장하며, 반려동물의 건강을 최우선으로 생각합니다. 내과, 외과, 예방의학 등 다양한 진료 과목을 운영하며, 경험 많은 수의사들이 최적의 치료 방법을 제공합니다. 또한, 반려동물의 특성과 라이프스타일을 고려한 맞춤형 건강 상담을 진행하며, 예방 접종과 정기 검진을 통해 건강한 삶을 유지할 수 있도록 돕습니다. 응급 상황에서도 신속한 대응이 가능하도록 응급 진료 시스템을 갖추고 있으며, 필요 시 입원 치료도 가능합니다. 병원 내부는 반려동물과 보호자가 편안함을 느낄 수 있도록 설계되었으며, 따뜻한 분위기 속에서 진료를 받을 수 있습니다. 보호자와의 소통을 중요하게 생각하며, 친절한 상담과 설명을 제공하여 신뢰를 쌓아갑니다. 정직하고 책임감 있는 의료 서비스를 바탕으로 반려동물의 건강을 지키는 것이 우리의 목표입니다. 앞으로도 최상의 진료 환경을 제공하며, 보호자와 반려동물이 행복한 삶을 살 수 있도록 최선을 다하겠습니다. [병원 이름]은 언제나 반려동물의 건강한 삶을 응원합니다. 이 정도가 공백 포함 700자인데 너무 긴가..? 근데 아직 100글자 정도도 남았는데 gpt는 700자쓰라니까 700자도 안 써주고.. 이제 더이상 쓸 말ㄹ이 없는데 어떡하지.. 코코스 화이팅.. 진짜 이런 거 못 하는데.",
    address: "광주광역시 북구 양일로305번길 8 (일곡동)",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(data.address);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {data.tags && data.tags.length > 0 ? (
          data.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              #{tag}
            </span>
          ))
        ) : (
          <span className={styles.noTag}>태그 없음</span>
        )}
      </div>

      <div className={styles.introduction}>
        <div className={styles.introductionText}>{data.introduction || "병원 소개가 없습니다."}</div>
      </div>

      <div className={styles.addressRow}>
        <span className={styles.address}>주소</span>
        <IcCopy className={styles.copyIcon} onClick={handleCopy} />
      </div>

      <div className={styles.mapWrapper}>
        <KakaoMap />
      </div>

      </div>
  );
}