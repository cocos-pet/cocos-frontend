import { createGlobalTheme, style } from "@vanilla-extract/css";

//색상
export const color = createGlobalTheme(":root", {
  primary: {
    blue100: "#DEFEFF",
    blue200: "#C8FDFF",
    blue300: "#B0FCFF",
    blue400: "#8EF6FF",
    blue500: "#43D6FF",
    blue600: "#3DC4F5",
    blue700: "#14B5F0",
    blue800: "#00ACEA",
    blue900: "#00ACEA",
  },
  yellow: {
    yellow100: "#FFFCF2",
    yellow200: "#FFFBEB",
    yellow300: "#FFF5D1",
    yellow400: "#FFF0B8",
    yellow500: "#FFEA9E",
    yellow600: "#FFE785",
    yellow700: "#FFE270",
    yellow800: "#FFDC51",
    yellow900: "#FFD22D",
  },
  gray: {
    gray000: "#FFFFFF",
    gray100: "#F8F8F8",
    gray200: "#F0F0F0",
    gray300: "#E4E4E4",
    gray400: "#D8D8D8",
    gray500: "#C6C6C6",
    gray600: "#BEBEBE",
    gray700: "#717171",
    gray800: "#555555",
    gray900: "#222222",
  },
  red: {
    warning_red100: "#FDE9F4",
    warning_red200: "#F53D3D",
  },
});

//시멘틱
export const semanticColor = createGlobalTheme(":root", {
  primary: {
    normal: color.primary.blue500,
    strong: color.primary.blue600,
    heavy: color.primary.blue700,
  },
  neutral: {
    normal: color.gray.gray000,
    strong: color.gray.gray100,
    inverse: color.gray.gray900,
    assistive: "#DBD7C6",
  },
  disable: {
    fill: color.gray.gray300,
    text: color.gray.gray500,
  },
  text: {
    normal: color.gray.gray900,
    strong: color.primary.blue500,
    inverse: color.gray.gray000,
    assistive: color.gray.gray700,
    assistiveLight: color.gray.gray600,
  },
  line: {
    normal: color.gray.gray100,
    strong: color.gray.gray200,
    heavy: color.gray.gray300,
  },
});

//폰트

const createFontStyle = ({
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  fontFamily,
}: {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
  fontFamily: string;
}) =>
  style({
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    fontFamily,
  });

export const font = {
  display01: createFontStyle({
    fontFamily: "Pretendard",
    fontSize: "7.2rem",
    fontWeight: "600",
    lineHeight: "120%",
    letterSpacing: "-0.03rem",
  }),
  title01: createFontStyle({
    fontFamily: "Pretendard",
    fontSize: "3.6rem",
    fontWeight: "600",
    lineHeight: "120%",
    letterSpacing: "-0.03rem",
  }),
  title02: createFontStyle({
    fontFamily: "Pretendard",
    fontSize: "2.8rem",
    fontWeight: "600",
    lineHeight: "120%",
    letterSpacing: "-0.03rem",
  }),
  title03: createFontStyle({
    fontFamily: "Pretendard",
    fontSize: "2.4rem",
    fontWeight: "600",
    lineHeight: "120%",
    letterSpacing: "-0.03rem",
  }),
  heading01: createFontStyle({
    fontFamily: "Pretendard",
    fontSize: "2rem",
    fontWeight: "600",
    lineHeight: "120%",
    letterSpacing: "-0.03rem",
  }),
  heading02: createFontStyle({
    fontFamily: "Pretendard",
    fontSize: "1.8rem",
    fontWeight: "600",
    lineHeight: "140%",
    letterSpacing: "-0.01rem",
  }),
  heading03: createFontStyle({
    fontFamily: "Pretendard",
    fontSize: "1.6rem",
    fontWeight: "600",
    lineHeight: "140%",
    letterSpacing: "-0.02rem",
  }),
  body01: createFontStyle({
    fontFamily: "Pretendard",
    fontSize: "1.4rem",
    fontWeight: "600",
    lineHeight: "140%",
    letterSpacing: "-0.02rem",
  }),
  label01: createFontStyle({
    fontFamily: "Pretendard",
    fontSize: "1.2rem",
    fontWeight: "600",
    lineHeight: "140%",
    letterSpacing: "-0.01rem",
  }),
  caption01: createFontStyle({
    fontFamily: "Pretendard",
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "140%",
    letterSpacing: "-0.01rem",
  }),
};
