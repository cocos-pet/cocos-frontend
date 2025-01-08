import { style } from "@vanilla-extract/css";

const createFontStyle = ({
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
}: {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
}) =>
  style({
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
  });

export const font = {
  display01: createFontStyle({
    fontSize: "7.2rem",
    fontWeight: "600",
    lineHeight: "120%",
    letterSpacing: "-0.03rem",
  }),
  title01: createFontStyle({
    fontSize: "3.6rem",
    fontWeight: "600",
    lineHeight: "120%",
    letterSpacing: "-0.03rem",
  }),
  title02: createFontStyle({
    fontSize: "2.8rem",
    fontWeight: "600",
    lineHeight: "120%",
    letterSpacing: "-0.03rem",
  }),
  title03: createFontStyle({
    fontSize: "2.4rem",
    fontWeight: "600",
    lineHeight: "120%",
    letterSpacing: "-0.03rem",
  }),
  heading01: createFontStyle({
    fontSize: "2rem",
    fontWeight: "600",
    lineHeight: "120%",
    letterSpacing: "-0.03rem",
  }),
  heading02: createFontStyle({
    fontSize: "1.8rem",
    fontWeight: "600",
    lineHeight: "140%",
    letterSpacing: "-0.01rem",
  }),
  heading03: createFontStyle({
    fontSize: "1.6rem",
    fontWeight: "600",
    lineHeight: "140%",
    letterSpacing: "-0.02rem",
  }),
  body01: createFontStyle({
    fontSize: "1.4rem",
    fontWeight: "600",
    lineHeight: "140%",
    letterSpacing: "-0.02rem",
  }),
  label01: createFontStyle({
    fontSize: "1.2rem",
    fontWeight: "600",
    lineHeight: "140%",
    letterSpacing: "-0.01rem",
  }),
  caption01: createFontStyle({
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "140%",
    letterSpacing: "-0.01rem",
  }),
};
