import { assignInlineVars } from "@vanilla-extract/dynamic";
import { container, marginBottomVar } from "./Spacing.css";

interface SpacingPropTypes {
  marginBottom?: string;
}

const Spacing = ({ marginBottom = "1" }: SpacingPropTypes) => {
  return (
    <div
      className={container}
      style={assignInlineVars({
        [marginBottomVar]: `${marginBottom}rem`, //변수값 조정은 여기서 !
      })}
    />
  );
};

export default Spacing;
