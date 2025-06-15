import { style } from "@vanilla-extract/css";
import { font, semanticColor } from "@style/styles.css.ts";
import { recipe } from "@vanilla-extract/recipes";

export const ModalRootStyle = recipe({
  base: {
    backgroundColor: "rgba(34, 34, 34, 0.2)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1000,
  },
  variants: {
    isOpen: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
});

export const ModalBodyStyle = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1001,
  width: "90%",
  maxWidth: "600px",
  maxHeight: "80vh",
  overflowY: "auto",
  backgroundColor: "#fff",
  borderRadius: "1.6rem",
  padding: "2rem",

  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
});

export const ModalContentStyle = style([
  font.body01,
  {
    fontWeight: "500",
  },
]);

export const ModalTitleStyle = style([font.heading03, {}]);

export const ModalBottomStyle = style({
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "row",
  gap: "1.2rem",
});
