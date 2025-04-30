"use client";

import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcLeftarrow } from "@asset/svg";
import reviewNoticeFrame from "@asset/image/reviewNoticeFrame.png";
import danger from "@asset/image/danger.png";
import Image from "next/image";
import Divider from "@common/component/Divider/Divider";
import { Button } from "@common/component/Button";
import * as style from "./style.css";
import { IcCheckbox } from "@asset/svg";
import { useState } from "react";

const page = () => {
  const [checkedBoxes, setCheckedBoxes] = useState<boolean[]>(Array(4).fill(false));

  const allChecked = checkedBoxes.every((v, i) => i === 0 || v);

  const handleCheckboxToggle = (id: number | "all") => {
    if (id === "all") {
      const newValue = !allChecked;
      setCheckedBoxes(Array(4).fill(newValue));
    } else {
      const updated = [...checkedBoxes];
      updated[id] = !updated[id];

      const subChecks = updated.slice(1); // 1~3
      updated[0] = subChecks.every(Boolean);

      setCheckedBoxes(updated);
    }
  };

  const checkboxTexts = [
    "전체 동의하기",
    "모든 내용을 이해했어요",
    "해당 병원에 직접 방문하여 시술을 받았어요",
    "위 내용을 위반한 후기는 사전공지 없이 블라인드 처리됩니다",
  ];
  return (
    <div className={style.backgroundColor}>
      <HeaderNav
        centerContent="후기 작성 유의사항"
        type="noBackground"
        leftIcon={<IcLeftarrow style={{ width: 24, height: 24 }} />}
      />
      <div className={style.wrapper}>
        <section className={style.topLayout}>
          <Image src={danger} alt="주의 표시" className={style.dangerImg} />
          <h2>대가성 리뷰는</h2>
          <h2 className={style.title}>의료법 위반 행위에 해당해요</h2>
          <p className={style.docs}>후기 권유, 내용 강요 등은 부당한 후기 요구예요.</p>
          <p className={style.docs}>부당한 후기 요청은 정당하게 거절해 주세요.</p>
        </section>

        <Image src={reviewNoticeFrame} alt="리뷰작성 유의사항 이미지" priority className={style.mainImg} />

        <section className={style.bottomLayout}>
          {checkboxTexts.map((text, idx) => (
            <div key={idx}>
              {idx === 1 && <Divider size="small" />}
              <div
                className={style.checkbox}
                onClick={() => (idx === 0 ? handleCheckboxToggle("all") : handleCheckboxToggle(idx))}
              >
                <IcCheckbox checked={checkedBoxes[idx]} className={style.check} />
                <span>
                  <span className={style.red}>(필수)</span> {text}
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>

      <section className={style.buttonLayout}>
        <Button label="다음으로" disabled={!allChecked} />
      </section>
    </div>
  );
};

export default page;
