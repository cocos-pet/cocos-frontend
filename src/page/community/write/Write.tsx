import TextArea from "@page/community/component/TextArea/TextArea.tsx";
import React, { useState } from "react";

const Write = () => {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <TextArea
        value={value}
        onChange={onChange}
        placeholder={
          "커뮤니티에 올릴 게시글 내용을 작성해 주세요." +
          "\n\n" +
          "(예시: ~한 증상은 어디로 가야 하나요?)"
        }
      />
    </div>
  );
};

export default Write;
