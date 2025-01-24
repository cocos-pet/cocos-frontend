import { divider } from "./Divider.css";

interface DividerProps {
  size?: "large" | "small" | "popular";
}

const Divider = ({ size = "large" }: DividerProps) => {
  return <div className={divider({ size })} />;
};

export default Divider;
