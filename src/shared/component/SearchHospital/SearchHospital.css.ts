import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";
import { recipe } from "@vanilla-extract/recipes";

export const dimmed = recipe({
  base: {
    position: "absolute",
    zIndex: "1",
    bottom: 0,

    width: "100%",
    height: "100dvh",

    opacity: "0.2",
    backgroundColor: color.gray.gray900,
  },
  variants: {
    active: {
      true: {
        display: "flex",
      },
      false: {
        display: "none",
      },
    },
  },
});

export const wrapper = recipe({
  base: {
    zIndex: "2",
    position: "relative",
    marginTop: "8rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: "100%",
    height: "calc(100vh - 8rem)",
    overflow: "hidden",

    borderRadius: "20px 20px 0px 0px",
    // 임시색상
    backgroundColor: "gray",
    // backgroundColor:color.gray.gray000,
    transition: "transform 300ms ease-in-out, opacity 300ms ease-in-out",
    transform: "translateY(100%)",
    opacity: "0",
  },
  variants: {
    active: {
      true: {
        transform: "translateY(0)",
        opacity: "1",
      },
      false: {
        transform: "translateY(100%)",
        opacity: "0",
      },
    },
  },
});

export const bottomSheetHandleBar = style({
  position: "absolute",
  top: "1rem",
  width: "8rem",
});

export const headerContainer = style({
  position: "absolute",
  top: "2.4rem",

  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  width: "100%",
  padding: "1.2rem 2rem",
});

export const titleStyle = style([
  font.body01,
  {
    color: color.gray.gray900,
    textAlign: "center",
  },
]);

export const cardContainer = style({
  position: "absolute",
  top: "12rem",

  width: "100%",
  height: "calc(100vh - 33.2rem)",
  overflow: "auto",

  // 스크롤바 제거
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none", // Chrome, Safari
    },
  },
});

// 마지막 li 요소에 밑줄 추가
export const lastCard = style({
  borderBottom: `1px solid ${color.gray.gray300}`,
});

export const buttonContainer = style({
  position: "absolute",
  bottom: "0rem",

  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",

  width: "100%",
  height: "12.6rem",
  padding: "0 2rem 3.2rem 2rem",

  backgroundColor: color.gray.gray000,
});
