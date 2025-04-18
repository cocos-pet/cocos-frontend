import { TextField } from "../../../src/common/component/TextField/index";
import * as styles from "./DirectMyPetInfo.style.css";
import React from "react";

const DirectMyPetInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <span>종</span> <TextField placeholder={"종 선택하기"} state="half"/>
        </div>
        <div>
          <span>성별</span> <TextField placeholder={"성별 선택하기"} state="half"/>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <span>종류</span> <TextField placeholder={"예시: 샴"} state="half"/>
        </div>
        <div>
          <span>몸무게</span> <TextField placeholder={"예시: 5.3kg"} state="half"/>
        </div>
      </div>
    </div>
  );
};

export default DirectMyPetInfo;
