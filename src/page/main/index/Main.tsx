import Divider from "@common/component/Divider/Divider";
import Spacing from "@common/component/Spacing/Spacing";

/*
localhost:5173/main
*/
import React, { ChangeEvent, useState } from "react";
import { Button } from "@common/component/Button";
import { IcTest } from "@asset/svg";
import { Toast } from "@common/component/Toast/Toast.tsx";

const Main = () => {
  return (
    <>
      <Toast message={"내용을 입력하세요."} />
      <span>main</span>
      <Spacing marginBottom="10" />
      <Divider size="small" />
      <Spacing marginBottom="10" />
      <Divider />
    </>
  );
};

export default Main;
