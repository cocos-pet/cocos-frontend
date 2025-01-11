import "./reset.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("html", {
  fontSize: "16px", //default
  "@media": {
    "(min-width: 450px) and (max-width: 600px)": { fontSize: "13px" },
    "(max-width: 450px)": { fontSize: "10px" }, //62.5%
  },
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  minWidth: "375px",
  maxWidth: "768px",
  minHeight: "calc(var(--vh, 1vh) * 100)",
  fontFamily: "Pretendard, sans-serif",
  backgroundColor: "black",
  color: "red",
});
