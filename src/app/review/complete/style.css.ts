import { style } from "@vanilla-extract/css";
import { font, color } from "@style/styles.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  background: `linear-gradient(180deg, ${color.primary.blue100} 0%, #FFF 36.13%)`,
  padding: "15.2rem 0 8.3rem",
});

export const title = style([
  font.title03,
  {
    color: color.gray.gray900,
    marginBottom: "6.4rem",
  },
]);

export const docs = style([
  font.body01,
  {
    color: color.gray.gray800,
  },
]);

export const docsTop = style({ marginTop: "6.8rem " });
export const docsBottom = style({ marginBottom: "3.2rem" });

export const btnContainer = style({
  width: "20.3rem",
});
