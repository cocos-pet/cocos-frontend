import {style} from "@vanilla-extract/css";
import {color, font} from "@style/styles.css";

export const layout = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.7rem",
  padding: "12.5rem 2rem 0 2rem",

  height: "100vh",
  backgroundColor: color.primary.blue500,
});

export const span = style([
  font.heading03,
  {
    width: "15.9rem",
    color: color.gray.gray000,
    textAlign: "center",
    marginTop: "0.9rem",
  },
]);

export const buttonStyle = style([
  font.body01,
  {
    position: "absolute",
    bottom: "3.2rem",
    width: "33.5rem",
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    justifyItems: "center",

    height: "4.4rem",
    padding: "1.2rem 2.8rem",

    borderRadius: "8px",
    backgroundColor: "#FEE500",
  },
]);
