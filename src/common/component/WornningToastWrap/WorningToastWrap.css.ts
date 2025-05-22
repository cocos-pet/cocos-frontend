import { keyframes, style } from "@vanilla-extract/css";

const slideDown = keyframes({
  from: {
    top: "-10rem",
    opacity: 0,
  },
  to: {
    top: "0",
    opacity: 1,
  },
});

const slideUp = keyframes({
  from: {
    top: "0",
    opacity: 1,
  },
  to: {
    top: "-10rem",
    opacity: 0,
  },
});

export const toastAnimation = style({
  position: "fixed",
  top: "0",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1000,
  animation: `${slideDown} 0.3s ease-out`,
});

export const toastExitAnimation = style({
  position: "fixed",
  top: "-10rem",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1000,
  animation: `${slideUp} 0.5s ease-in forwards`, // 사라지는 애니메이션
});
