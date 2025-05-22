import {font, semanticColor} from "@style/styles.css";
import {style} from "@vanilla-extract/css";

export const nothingContent = style([
  font.body01,
  {
    display: "flex",
    width: "33.5rem",
    height: "32rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    color: semanticColor.disable.text,
    textAlign: "center",
  },
]);

export const mypagecontent = style({
  width: "100%",
  marginTop: "1.6rem",
});

export const contentWrapper = style({
  margin: "0 0 8rem 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const commentcontentWrap = style({
  width: "100%",
});
