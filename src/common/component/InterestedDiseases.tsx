import { IcPlus } from "@asset/svg";
import * as styles from "../../app/mypage/_style/mypage.css";
import React, { useEffect, useState } from "react";
import LazyImage from "@common/component/LazyImage";
import { useGetPetInfo } from "@api/domain/mypage/hook";
import { useDiseaseSymptomFilterStore } from "../../app/mypage/_component/DiseaseSymptomBottomSheet/_store/categoryFilter";
import DiseasesSymptomBottomSheet from "../../app/mypage/_component/DiseaseSymptomBottomSheet/DiseaseSymptomBottomSheet";
import { useGetBodies, useGetDisease, useGetSymptoms } from "@api/domain/mypage/edit-pet/hook";

interface ConcernBody {
  id?: number;
  name?: string;
  image?: string;
}

interface InterestedDiseasesPropTypes {
  nickname: string;
  isMyPage?: boolean;
}

const InterestedDiseases = ({ nickname, isMyPage = true }: InterestedDiseasesPropTypes) => {
  // 표시용(프로필 주인 기준)
  const { data } = useGetPetInfo(nickname);
  // 패치/수정 기준(내 반려동물 기준)
  const { data: petAllInfo } = useGetPetInfo();

  const concernBodies = (data as { concernBodies?: ConcernBody[] })?.concernBodies ?? [];
  const displayBodies = concernBodies.filter((body) => body.image).slice(0, 2);

  const { setOpen, setSelectedChips, setCategory, setCategoryData } = useDiseaseSymptomFilterStore();

  const [bodyDiseaseIds, setBodyDiseaseIds] = useState<number[]>([]);
  const [bodySymptomsIds, setBodySymptomsIds] = useState<number[]>([]);

  const { data: diseaseBodies } = useGetBodies("DISEASE");
  const { data: symptomBodies } = useGetBodies("SYMPTOM");
  const { data: symptoms } = useGetSymptoms(bodySymptomsIds);
  const { data: disease } = useGetDisease(bodyDiseaseIds);

  // body id 목록 세팅(증상/질병)
  useEffect(() => {
    if (diseaseBodies?.bodies && symptomBodies?.bodies) {
      const diseaseIdArr = diseaseBodies.bodies.map((item) => item.id as number);
      const symptomIdArr = symptomBodies.bodies.map((item) => item.id as number);
      if (diseaseIdArr.length && symptomIdArr.length) {
        setBodyDiseaseIds(diseaseIdArr);
        setBodySymptomsIds(symptomIdArr);
      }
    }
  }, [diseaseBodies, symptomBodies]);

  // store의 categoryData 채우기(edit-pet/page.tsx 패턴)
  useEffect(() => {
    if (symptoms?.bodies) {
      setCategoryData("symptoms", symptoms.bodies);
    }
    if (disease?.bodies) {
      setCategoryData("disease", disease.bodies);
    }
  }, [symptoms, disease, setCategoryData]);

  const handleClickContainer: React.MouseEventHandler<HTMLDivElement> = () => {
    //todo: 기능 명세가 제대로 나오면 연결
    if (!isMyPage) return;

    if (!petAllInfo?.petId) return;
    setCategory("disease"); //항상 질병으로 먼저 열리도록

    if (petAllInfo.symptoms) {
      setSelectedChips({
        ids: petAllInfo.symptoms.map((item) => item.id),
        category: "symptomIds",
      });
    }

    if (petAllInfo.diseases) {
      setSelectedChips({
        ids: petAllInfo.diseases.map((item) => item.id),
        category: "diseaseIds",
      });
    }

    setOpen(true);
  };

  if (!data) return null;

  return (
    <>
      <div className={styles.favoriteHospitalContainer} onClick={handleClickContainer}>
        {displayBodies.length ? (
          <div className={styles.addBox}>
            <div className={styles.bodyImageWrapper({ multiple: displayBodies.length >= 2 })}>
              {displayBodies.map((body, index) => (
                <LazyImage
                  key={body.id ?? index}
                  className={styles.iconCircleFrame}
                  style={{ position: "absolute", left: index === 0 ? 0 : "18px" }}
                  src={body.image as string}
                  alt={body.name ?? "관심 질병"}
                  width="2rem"
                  height="2rem"
                />
              ))}
            </div>
            관심 질병
          </div>
        ) : (
          <div className={styles.addBox}>
            {isMyPage ? (
              <>
                <div className={styles.plusIconButton}>
                  <IcPlus width={20} height={20} />
                </div>
                관심 질병
              </>
            ) : (
              <span className={styles.grayText}>
                관심있는 질병이 없어요
              </span>
            )}
          </div>
        )}
      </div>

      {isMyPage && petAllInfo?.petId ? <DiseasesSymptomBottomSheet petId={petAllInfo.petId} /> : null}
    </>
  );
};

export default InterestedDiseases;
