"use client";

import * as style from "./style.css";
import { useState } from "react";
import { useAgreeReviewMutation } from "@app/api/review/agree/hook";
import { TITLE, CHECKBOX_TEXTS } from "@app/review/agree/constant";
import Image from "next/image";

import { IcLeftarrow } from "@asset/svg";
import reviewAgreeImg from "@asset/image/review-agree.png";
import danger from "@asset/image/danger.png";
import { IcCheckbox } from "@asset/svg";
import { useRouter } from "next/navigation";

import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import Divider from "@common/component/Divider/Divider";
import { Button } from "@common/component/Button";

const page = () => {
  const CHECKBOX_COUNT = CHECKBOX_TEXTS.length;
  const [checkedBoxes, setCheckedBoxes] = useState<boolean[]>(Array(CHECKBOX_COUNT).fill(false));

  const mutation = useAgreeReviewMutation();
  const router = useRouter();

  const handleClickBtn = () => {
    mutation.mutate(undefined, {
      // ⚠️ 추후 /review/write 합쳐지면 수정 예정, 현재 확인용으로 /main, path 활용하기
      onSuccess: () => {
        router.push("/main");
      },
    });
  };

  const allChecked = checkedBoxes.every((v, i) => i === 0 || v);
  const ALL_CHECKBOX_INDEX = 0;
  const DIVIDER_AFTER_CHECKBOX_INDEX = 1;

  const handleToggleAll = () => {
    const newValue = !allChecked;
    setCheckedBoxes(Array(CHECKBOX_COUNT).fill(newValue));
  };

  const handleToggleItem = (id: number) => {
    const updated = [...checkedBoxes];
    updated[id] = !updated[id];

    const subChecks = updated.slice(ALL_CHECKBOX_INDEX + 1);
    updated[0] = subChecks.every(Boolean);

    setCheckedBoxes(updated);
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

        <Image src={reviewAgreeImg} alt="리뷰작성 유의사항 이미지" priority className={style.mainImg} />

        <section className={style.bottomLayout}>
          {CHECKBOX_TEXTS.map((text, idx) => (
            <div key={idx}>
              {idx === DIVIDER_AFTER_CHECKBOX_INDEX && (
                <div className={style.dividerWrapper}>
                  <Divider size="small" />
                </div>
              )}
              <div
                className={style.checkbox}
                onClick={() => (idx === ALL_CHECKBOX_INDEX ? handleToggleAll() : handleToggleItem(idx))}
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
