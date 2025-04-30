"use client";

import * as style from "./style.css";
import { useState } from "react";
import { useAgreeReviewMutation } from "@app/api/review/agree/hook";
import { TITLE, CHECKBOX_TEXTS } from "@app/review/agree/constant";
import Image from "next/image";

import { IcLeftarrow } from "@asset/svg";
import reviewNoticeFrame from "@asset/image/reviewNoticeFrame.png";
import danger from "@asset/image/danger.png";
import { IcCheckbox } from "@asset/svg";

import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import Divider from "@common/component/Divider/Divider";
import { Button } from "@common/component/Button";

const page = () => {
  const [checkedBoxes, setCheckedBoxes] = useState<boolean[]>(Array(4).fill(false));
  const mutation = useAgreeReviewMutation();
  // const router = useRouter();

  const handleClickBtn = () => {
    
    mutation.mutate();
    // mutation.mutate(undefined, {
    //   onSuccess: () => {
    //     router.push("/review/write");
    //   },
    // });
  };

  const allChecked = checkedBoxes.every((v, i) => i === 0 || v);

  const handleCheckboxToggle = (id: number | "all") => {
    if (id === "all") {
      const newValue = !allChecked;
      setCheckedBoxes(Array(4).fill(newValue));
    } else {
      const updated = [...checkedBoxes];
      updated[id] = !updated[id];

      const subChecks = updated.slice(1);
      updated[0] = subChecks.every(Boolean);

      setCheckedBoxes(updated);
    }
  };

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
          <h2>{TITLE.main}</h2>
          <h2 className={style.title}>{TITLE.sub}</h2>
          <p className={style.docs}>{TITLE.descriptions[0]}</p>
          <p className={style.docs}>{TITLE.descriptions[1]}</p>
        </section>

        <Image src={reviewNoticeFrame} alt="리뷰작성 유의사항 이미지" priority className={style.mainImg} />

        <section className={style.bottomLayout}>
          {CHECKBOX_TEXTS.map((text, idx) => (
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
        <Button label="다음으로" disabled={!allChecked} onClick={handleClickBtn} />
      </section>
    </div>
  );
};

export default page;
