import { style } from "@vanilla-extract/css";
import { color } from "@style/styles.css";

export const radio = style({
  appearance: "none",
  position: "relative",
  margin: "0rem",
  width: "1.8rem",
  height: "1.8rem",

  borderRadius: "100%",
  border: `1.5px solid ${color.gray.gray300}`,

  selectors: {
    "&:checked": {
      border: `1.5px solid ${color.primary.blue500}`,
    },
    "&:checked::before": {
      content: "",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "1.2rem",
      height: "1.2rem",
      backgroundColor: color.primary.blue500,
      borderRadius: "100%",
      transition: "opacity 0.2s ease-in-out",
    },
  },
});
