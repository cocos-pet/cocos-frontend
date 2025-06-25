import { style } from "@vanilla-extract/css";
import { font } from "@style/styles.css";

export const mapWrapper = style({
  position: "relative",
  width: "100%",
});

export const mapContainer = style({
  width: "100%",
  height: "16.1rem",
  borderRadius: "1rem",
  background: "#f5f5f5",
  border: "1px solid #E4E4E4",
  position: "relative",
  zIndex: 1,
});

export const addressContainer = style({
  position: "absolute",
  top: "9rem",
  left: "0",
  right: "0",
  height: "7rem",
  background: "#FFFFFF",
  display: "flex",
  padding: "1.2rem 1.2rem",
  borderRadius: "0 0 1rem 1rem",
  border: "1px solid #E4E4E4",
  zIndex: 2,
});

export const addressText = style([font.heading03]);
