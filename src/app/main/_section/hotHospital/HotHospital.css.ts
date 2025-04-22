import { color, font, semanticColor } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";

export const hotHospitalContainer = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  padding: "3.2rem 2rem 3.2rem 2rem",
});

export const titleContainer = style({
  display: "flex",
  gap: "0.4rem",
  flexDirection: "column",
});

export const subTitle = style([
  font.label01,
  {
    color: semanticColor.text.normal,
    fontWeight: "500",
  },
]);

export const title = style([
  { marginBottom: "1.2rem" },
  font.heading02,
  {
    color: semanticColor.text.normal,
  },
]);

export const blue = style([
  font.heading02,
  {
    fontWeight: "600",
    color: color.primary.blue700,
  },
]);

export const hotHospitalListContainer = style({
  display: "flex",
  flexDirection: "column",
});

export const hotHospital = style({
  padding: "1.6rem 0",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  gap: "1.2rem",
  width: "100%",
  overflow: "hidden",
});

export const hotHospitalContent = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.4rem",
  flexGrow: 1,
  width: "calc(100% - 8.8rem)",
});

export const hotHospitalContentTop = style({
  display: "flex",
  flexDirection: "row",
  gap: "1.2rem",
  width: "100%",
});

export const hotHospitalId = style([
  font.heading02,
  {
    color: color.primary.blue700,
  },
]);

export const hotHospitalName = style([
  font.heading02,
  {
    color: semanticColor.text.normal,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
    maxWidth: "calc(100% - 5rem)",
    "@media": {
      "(max-width: 768px)": {
        maxWidth: "calc(100% - 4rem)",
      },
      "(max-width: 480px)": {
        maxWidth: "calc(100% - 3rem)",
      }
    }
  },
]);

export const hotHospitalSub = style([
  font.body01,
  {
    color: semanticColor.text.assistive,
    fontWeight: "500",
  },
]);

export const hotHospitalImage = style({
  width: "7.6rem",
  height: "7.6rem",
  borderRadius: "0.8rem",
});
