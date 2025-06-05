import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const container = style({
  margin: "0rem 2rem",
});

export const title = style([
  font.heading02,
  {
    marginBottom: "2rem",
  },
]);

export const highlight = style({
  color: color.primary.blue500,
});

export const listContainer = style({
  display: "flex",
  flexDirection: "column",
});

export const hospitalItem = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `1px solid ${color.gray.gray200}`,
  cursor: "pointer",
  paddingBottom: "1.6rem",
  marginBottom: "1.6rem",
});

export const hospitalInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  flex: 1,
  minWidth: 0,
  marginRight: "1.2rem",
});

export const hospitalName = style([
  font.heading02,
  {
    fontWeight: "600",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
]);

export const hospitalAddress = style([
  font.body01,
  {
    color: color.gray.gray700,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
]);

export const reviewCount = style([
  font.body01,
  {
    color: color.gray.gray700,
  },
]);

export const hospitalImage = style({
  borderRadius: "0.8rem",
  objectFit: "cover",
  flexShrink: 0,
});

export const loadingTrigger = style({
  width: "100%",
  height: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: color.gray.gray700,
});
