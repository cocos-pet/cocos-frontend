/*
localhost:5173/main
*/
import { TextField } from "@common/component/TextField";
import React, { ChangeEvent, useState } from "react";
import { IcoIcontest } from "@asset/svg";

const Main = () => {
  const [value, setValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <TextField
        placeholder={"검색어를 입력해주세요."}
        active={true}
        value={value}
        icon={<IcoIcontest />}
      />
      <TextField
        placeholder={"검색어를 입력해주세요."}
        active={false}
        value={value}
      />
      <TextField
        placeholder={"검색어를 입력해주세요."}
        active={true}
        value={value}
        onChange={onChange}
        state={"error"}
      />
    </div>
  );
};

export default Main;
