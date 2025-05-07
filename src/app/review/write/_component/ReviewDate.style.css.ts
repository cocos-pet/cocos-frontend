import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const questionStyle = style([
  font.body01,
  {
    color: color.gray.gray900,
  },
]);

export const starStyle = style([
  font.body01,
  {
    color: color.red.warning_red200,
  },
]);

export const calenderWrapper = style({
  backgroundColor: color.gray.gray000,
  borderRadius: "9.795px",
});

export const calenderLayout = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2.4rem",

  width: "fit-content",
  height: "auto",
  margin: "0 auto",
  padding: "2rem 0.3rem",
});

export const hidden = style({
  display: "none",
});

export const weekdayHeader = style([
  font.body01,
  {
    fontSize: "1.17rem",
    fontWeight: "600",
    color: "#4A4A4A",
    selectors: {
      "&:nth-child(1)": {
        color: "#FF6228",
      },
    },
  },
]);

export const day = style([
  font.body01,
  {
    fontWeight: "500",
    color: color.gray.gray800,
    opacity: "1 !important",
  },
]);

// 이번달이 아니면서 지난날짜
export const pastOutside = style({
  opacity: "1 !important",
});

export const disabled = style({
  opacity: "0.5 !important",
});

export const today = style({
  color: color.gray.gray800,
});

export const daySelected = style([
  font.body01,
  {
    fontWeight: "500",
    color: color.gray.gray000,

    borderRadius: "100%",
    backgroundColor: color.primary.blue500,
  },
]);
