import Divider from "@common/component/Divider/Divider";
import Spacing from "@common/component/Spacing/Spacing";

/*
localhost:5173/main
*/
import React, { ChangeEvent, useState } from "react";
import { Button } from "@common/component/Button";
import { IcTest } from "@asset/svg";

const Main = () => {

  return (
    <>
      <div style={{ margin: "3rem", display: "flex", gap: "1rem" }}>
        <Button
          label="Button"
          size="small"
          variant="solidPrimary"
          disabled={true}
        />
        <Button
          label="Button"
          size="small"
          variant="solidPrimary"
          disabled={false}
        />
        <Button
          label="Button"
          size="medium"
          variant="solidPrimary"
          disabled={false}
        />
        <Button
          label="Button"
          size="large"
          variant="solidPrimary"
          disabled={false}
        />
      </div>
      <div style={{ margin: "3rem", display: "flex", gap: "1rem" }}>
        <Button
          label="Button"
          size="small"
          variant="solidNeutral"
          disabled={true}
        />
        <Button
          label="Button"
          size="small"
          variant="solidNeutral"
          disabled={false}
        />
        <Button
          label="Button"
          size="medium"
          variant="solidNeutral"
          disabled={false}
        />
        <Button
          label="Button"
          size="large"
          variant="solidNeutral"
          disabled={false}
        />
      </div>
      <div style={{ margin: "3rem", display: "flex", gap: "1rem" }}>
        <Button
          label="Button"
          size="small"
          variant="outlinePrimary"
          disabled={true}
        />
        <Button
          label="Button"
          size="small"
          variant="outlinePrimary"
          disabled={false}
        />
        <Button
          label="Button"
          size="medium"
          variant="outlinePrimary"
          disabled={false}
        />
        <Button
          label="Button"
          size="large"
          variant="outlinePrimary"
          disabled={false}
        />
      </div>
      <div style={{ margin: "3rem", display: "flex", gap: "1rem" }}>
        <Button
          label="Button"
          leftIcon={<IcTest />}
          size="medium"
          variant="solidPrimary"
          disabled={false}
        />
        <Button
          label="Button"
          rightIcon={<IcTest />}
          size="medium"
          variant="solidPrimary"
          disabled={false}
        />
        <Button
          label="Button"
          leftIcon={<IcTest />}
          rightIcon={<IcTest />}
          size="medium"
          variant="solidPrimary"
          disabled={false}
        />
      </div>
      <span>main</span>
      <Spacing marginBottom="10" />
      <Divider size="small" />
      <Spacing marginBottom="10" />
      <Divider />
    </>

  );
};

export default Main;
