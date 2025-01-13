import { divider, DividerVariants } from "./Divider.css";

type DividerPropTypes = Exclude<DividerVariants, undefined>;

const Divider = ({ size = "large" }: DividerPropTypes) => {
  return <div className={divider({ size: size })} />;
};

export default Divider;
