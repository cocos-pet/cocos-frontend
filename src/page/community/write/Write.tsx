import Tag from "@page/community/component/Tag/Tag.tsx";
import { useState } from "react";

const Write = () => {
  const [params, setParams] = useState({
    tag: "",
  });

  const setTag = (tag: string) => {
    setParams({ ...params, tag });
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