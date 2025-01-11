/*
localhost:5173/main
*/
import { TextField } from "@common/component/TextField";
import React, { ChangeEvent, useState } from "react";
import { IcoIcontest } from "@asset/svg";
import { Button } from "@common/component/Button";

const Main = () => {
  const [value, setValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ padding: "3rem" }}>
      <Button label="Button" />
    </div>
  );
};

export default Main;
