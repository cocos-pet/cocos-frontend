import {ReactNode} from "react";
import {docsStyle, titleStyleVariant} from "./Docs.css";

interface DocsProps {
  text: ReactNode;
}

type CombinedDocsProps = DocsProps & Exclude<titleStyleVariant, undefined>;

const Docs = ({ state = "none", text }: CombinedDocsProps) => {
  return (
    <>
      <div className={docsStyle({ state })}>{text}</div>
    </>
  );
};

export default Docs;
