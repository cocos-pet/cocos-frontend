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
import Tag from "@page/community/component/Tag/Tag.tsx";


interface writeProps {
  category: string;
  title: string;
  content: string;
  image: string[];
  tag: string;
}

const Write = () => {
  const onBackClick = () => {};
  const [params, setParams] = useState<writeProps>({
    category: "",
    title: "",
    content: "",
    tag: "",
    image: [],
  });
  
  const setTag = (tag: string) => {
    setParams({ ...params, tag });
  };

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
      <Tag label={"#태그1"} value={params.tag} setTag={setTag} />
      <Tag label={"#태그2"} value={params.tag} setTag={setTag} />
      <Tag label={"#태그3"} value={params.tag} setTag={setTag} />
    </div>
  );
};

export default Write