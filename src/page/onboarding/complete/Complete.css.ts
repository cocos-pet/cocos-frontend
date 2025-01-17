import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { color } from "@style/styles.css.ts";

export const layout = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "3.2rem",
    margin: "7.2rem 2rem 6rem 2rem",
  },

  variants: {
    type: {
      onboarding: { backgroundColor: color.gray.gray000 },
      //   petRegister: { backgroundColor: "linear-gradient(180deg, #D3D3D3 0%, #333 100%)" }    },
      petRegister: { backgroundColor: "red" },
    },
  },
});

export const topContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3.2rem",
  margin: "7.2rem 2rem 6rem 2rem",
});

export const titleWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "0.8rem",
});

export const btnWrapper = style({
  maxWidth: "76.8rem",
  width: "100%",
  position: "fixed",
  bottom: 0,

  display: "grid",
  gridTemplateColumns: "9.6rem calc(100% - 10.8rem)",
  gap: "1.2rem",
  whiteSpace: "nowrap",
  padding: "1.2rem 2rem 3.2rem 2rem",
});
