import { style } from "@vanilla-extract/css";
import { contentMaxWidth, media } from "./breakpoints";

/** Centers fixed/sticky elements against the body's content width at each breakpoint. */
export const fixedContentWidth = style({
  width: "100%",
  maxWidth: contentMaxWidth.mobile,
  margin: "0 auto",
  left: 0,
  right: 0,
  "@media": {
    [media.tablet]: { maxWidth: contentMaxWidth.tablet },
    [media.laptop]: { maxWidth: contentMaxWidth.laptop },
  },
});
