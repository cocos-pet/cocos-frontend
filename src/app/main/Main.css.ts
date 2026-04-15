import { style } from "@vanilla-extract/css";

export const mainContainer = style({
  width: "100%",
  margin: "0 auto",
  position: "relative",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "6.4rem",
      background: "linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
      zIndex: 1000,
    },
  },
});

export const headerContainer = style({
  padding: "0rem 2rem",
  zIndex: 1000,
  width: "100%",
  transform: "translateY(-50%)",
});

export const alarmButton = style({
  position: "absolute",
  top: "2rem",
  right: "2rem",
  zIndex: 1100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
});

export const alarmUnreadBadge = style({
  position: "absolute",
  padding: "0.3rem 0.4rem 1.5rem 1.4rem",
});
