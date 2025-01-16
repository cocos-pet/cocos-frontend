import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import {
  IcClear,
  IcDelete,
  IcDeleteBlack,
  IcLeftarrow,
  IcRight,
  IcTest,
  React,
} from "@asset/svg";
import { writeWrap } from "@page/community/write/Write.css.ts";
import WriteInputSection from "@page/community/component/WriteInputSection/WriteInputSection.tsx";
import { TextField } from "@common/component/TextField";
import { useState } from "react";

interface writeProps {
  category: string;
  title: string;
  content: string;
  image: string[];
}

const Write = () => {
  const onBackClick = () => {};
  const [params, setParams] = useState<writeProps>({
    category: "",
    title: "",
    content: "",
    image: [],
  });

  const onChangeValue = (
    target: string,
    value: string | React.ChangeEvent<HTMLInputElement>
  ) => {
    setParams({
      ...params,
      [target]: value,
    });
  };

  return (
    <div>
      <HeaderNav
        leftIcon={<IcDeleteBlack width={24} />}
        onLeftClick={onBackClick}
        // type={"field"}
        centerContent={"글쓰기"}
      />
      <div className={writeWrap}>
        <WriteInputSection title={"제목"}>
          <TextField
            leftIcon={<IcTest width={20} />}
            placeholder={"게시물 선택하기"}
            icon={<IcRight width={20} />}
            onClick={() => {
              //todo: 게시물 카테고리 선택하기 모달 띄우기
              console.log("click");
            }}
            isDelete={false}
            value={params.category}
          />
        </WriteInputSection>
        <WriteInputSection title={"글 작성"}>
          <TextField
            placeholder={"제목을 입력해주세요"}
            isDelete={true}
            value={params.title}
            onChange={(e) => onChangeValue("title", e.target.value)}
            onClearClick={() => onChangeValue("title", "")}
          />
        </WriteInputSection>
      </div>
    </div>
  );
};

export default Write;
