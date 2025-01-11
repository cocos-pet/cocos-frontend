/*
localhost:5173/main
*/
import React, { ChangeEvent, useState } from "react";

const Main = () => {
  const [value, setValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <></>;
};

export default Main;
