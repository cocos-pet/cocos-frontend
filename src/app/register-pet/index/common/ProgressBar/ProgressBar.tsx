import {barStyle, itemStyle, progressSizeVar} from "./ProgressBar.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";

interface ProgressBarProps {
  max: number;
  current: number;
}

const ProgressBar = ({ max, current }: ProgressBarProps) => {
  // 각 단계마다 비율을 나누어 진행
  const progress = ((current + 1) / max) * 100; // 진행 비율 계산 (0~100% 사이)

  // `progress` 값을 동적으로 전달
  const inlineStyle = assignInlineVars({
    [progressSizeVar]: `${progress}%`, // % 단위로 전달
  });

  return (
    <div className={barStyle}>
      <div className={itemStyle} style={inlineStyle} />
    </div>
  );
};

export default ProgressBar;
