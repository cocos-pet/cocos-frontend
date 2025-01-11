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
    <>
      <div style={{ padding: "2rem", display: "flex", gap: "1rem" }}>
        <Button label="Button" size={"large"} />
        <Button label="Button" size={"medium"} />
        <Button label="Button" size={"small"} />
        <Button label="Button" size={"small"} disabled />
      </div>
      <div style={{ padding: "2rem", display: "flex", gap: "1rem" }}>
        <Button label="Button" size={"large"} variant={"solidNeutral"} />
        <Button label="Button" size={"medium"} variant={"solidNeutral"} />
        <Button label="Button" size={"small"} variant={"solidNeutral"} />
        <Button
          label="Button"
          size={"small"}
          variant={"solidNeutral"}
          disabled
        />
      </div>
      <div style={{ padding: "2rem", display: "flex", gap: "1rem" }}>
        <Button label="Button" size={"large"} variant={"outlinePrimary"} />
        <Button label="Button" size={"medium"} variant={"outlinePrimary"} />
        <Button label="Button" size={"small"} variant={"outlinePrimary"} />
        <Button
          label="Button"
          size={"small"}
          variant={"outlinePrimary"}
          disabled
        />
      </div>
    </>
  );
};

export default Main;
