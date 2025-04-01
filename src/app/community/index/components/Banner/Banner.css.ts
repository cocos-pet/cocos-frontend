import {style} from "@vanilla-extract/css";

export const bannerContainer = style({
  marginTop: "2rem",
  width: "100%",
  height: "10rem",
});

export const bannerImage = style({
  width: "calc(100% - 4rem)",
  height: "10rem",
  borderRadius: "8px",
  margin: "0 2rem", 
});
