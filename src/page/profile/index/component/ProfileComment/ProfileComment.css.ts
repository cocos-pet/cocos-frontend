import { font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const commentWrapper = style({
  display: "flex",
  width: "100%",
  padding: "1.2rem 0rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.4rem",
  borderBottom: `1px solid ${semanticColor.line.heavy}`,

  wordWrap: "break-word", // 긴 단어가 줄 바꿈되도록 설정
  whiteSpace: "pre-wrap", // 공백과 줄 바꿈을 유지하면서 렌더링
});

export const timeText = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  alignSelf: "stretch",
});

export const contentText = style([
  font.heading03,
  {
    color: semanticColor.text.normal,
    display: "flex",
    flexDirection: "row",
    //alignItems: "flex-start",
    gap: "1rem",
    alignSelf: "stretch",
  },
]);

export const mentionedNickname = style([
  font.heading03,
  {
    color: semanticColor.text.heavy,
    flexShrink: 0,
  },
]);

export const wherePostText = style([
  font.label01,
  {
    display: "flex",
    //justifyContent: "space-between",
    width: "33.5rem",
    height: "1.6rem",
    alignSelf: "stretch",
    color: semanticColor.text.assistiveLight,
  },
]);

export const whereText = style({
  display: "inline-block", //이거 있어야 ellipsis 적용 가능

  maxWidth: "26.8rem",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});
