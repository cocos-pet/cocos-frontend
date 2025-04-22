import { style } from "@vanilla-extract/css";
import { color, font, semanticColor } from "@style/styles.css.ts";

export const container = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
});

export const profileImage = style({
  borderRadius: "50%",
  objectFit: "cover",
});

export const info = style({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

export const infoName = style([
  font.body01,
  {
    fontWeight: "600",
    color: semanticColor.text.normal,
  },
]);

export const infoDetail = style([
  font.label01,
  {
    color: semanticColor.text.assistive,
  },
]); 