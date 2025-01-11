import { style, styleVariants } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

export const styles = {
  button: style([
    font.body01,
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s",
      ":focus": {
        outline: "none",
      },
    },
  ]),
  small: style({
    height: "3.2rem",

    padding: "0.6rem 1.4rem",
  }),
  medium: style({
    height: "3.6rem",

    padding: "0.8rem 2rem",
  }),
  large: style({
    height: "4.4rem",
    padding: "1.2rem 2.8rem",
  }),
  disabled: style({
    background: color.gray.gray300,
    color: color.gray.gray500,
    pointerEvents: "none",
  }),
  disabledOutline: style({
    background: "transparent",
    border: "1px solid var(--Disable-Fill, #E4E4E4)",
    color: color.gray.gray400,
  }),
  icon: style({
    height: "2rem",
    alignContent: "center",
  }),
};

export const variants = styleVariants({
  solidPrimary: {
    backgroundColor: color.primary.blue600,
    color: "#fff",
    ":hover": {
      backgroundColor: color.primary.blue800,
    },
  },
  solidNeutral: {
    backgroundColor: color.gray.gray100,
    color: color.gray.gray700,
    ":hover": {
      backgroundColor: color.gray.gray300,
    },
    ":active": {
      backgroundColor: color.gray.gray400,
    },
  },
  outlinePrimary: {
    border: `0.1rem solid ${color.primary.blue500}`,
    backgroundColor: "transparent",
    color: color.gray.gray700,
    ":hover": {
      backgroundColor: color.gray.gray100,
    },
    ":active": {
      backgroundColor: color.primary.blue300,
      border: `0.1rem solid ${color.primary.blue500}`,
    },
    ":focus": {
      border: `0.1rem solid ${color.primary.blue500}`,
    },
  },
});
