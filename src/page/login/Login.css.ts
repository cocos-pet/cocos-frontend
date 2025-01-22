import { style } from "@vanilla-extract/css";
import { font } from "@style/styles.css";
export const layout = style({
  display: "flex",
  justifyContent: "center",
  padding: "13.5rem 2rem 0 2rem",
});

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
