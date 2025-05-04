import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";
import { recipe } from "@vanilla-extract/recipes";

export const dimmed = recipe({
  base: {
    position: "fixed",
    zIndex: "99",
    top: 0,
    left: 0,

    width: "100%",
    height: "100%",

    backgroundColor: "rgba(34, 34, 34, 0.2)",
    transition: "opacity 300ms ease-in-out, visibility 300ms ease-in-out",
  },
  variants: {
    active: {
      true: {
        opacity: 1,
        visibility: "visible",
      },
      false: {
        opacity: 0,
        visibility: "hidden",
      },
    },
  },
});

export const wrapper = recipe({
  base: {
    position: "absolute",
    bottom: "0",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: "100%",

    height: "calc(100vh - 8rem)",
    overflow: "hidden",

    borderRadius: "20px 20px 0px 0px",
    backgroundColor: color.gray.gray000,
    transition: "transform 300ms ease-in-out, opacity 300ms ease-in-out",
  },
  variants: {
    active: {
      true: {
        transform: "translateY(0)",
        opacity: "1",
      },
      false: {
        transform: "translateY(100%)",
        opacity: "0",
      },
    },
  },
});

export const bottomSheetHandleBar = style({
  position: "absolute",
  top: "1rem",
  width: "8rem",
});

export const headerContainer = style({
  position: "absolute",
  top: "2.4rem",

  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  width: "100%",
  padding: "1.2rem 2rem",
});

export const titleStyle = style([
  font.body01,
  {
    color: color.gray.gray900,
    textAlign: "center",
  },
]);

export const cardContainer = style({
  position: "absolute",
  top: "12rem",
  bottom: "12.6rem",

  width: "100%",
  height: "auto",
  maxHeight: "calc(100% - 24.6rem)",
  overflowY: "auto",
  paddingBottom: "1rem",

  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

export const lastCard = style({
  borderBottom: `1px solid ${color.gray.gray300}`,
});

export const buttonContainer = style({
  position: "absolute",
  bottom: "0rem",

  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",

  width: "100%",
  height: "12.6rem",
  padding: "0 2rem 3.2rem 2rem",

  backgroundColor: color.gray.gray000,
});
