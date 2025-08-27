import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const question = style([
  font.body01,
  {
    color: color.gray.gray900,
  },
]);

export const star = style([
  font.body01,
  {
    color: color.red.warning_red200,
  },
]);

export const cardLayout = style({
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",

  padding: "1.6rem",
  borderRadius: "8px",
  border: `1px solid ${color.gray.gray200}`,
  backgroundColor: color.gray.gray000,
});

export const cardBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  width: "100%",
});

export const hospitalName = style([
  font.heading03,
  {
    color: color.gray.gray900,
  },
]);

export const hospitalInfo = style([
  font.label01,
  {
    display: "flex",
    gap: "0.4rem",
    color: color.gray.gray700,
  },
]);

export const img = style({
  borderRadius: "8px",
});

export const buttonText = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

// ⚠️ 합칠 예정
export const myPetInfoBtn = recipe({
  base: [
    font.heading03,
    {
      display: "flex",
      alignContent: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "1.2rem",
      alignItems: "center",

      borderRadius: "8px",
      backgroundColor: color.gray.gray000,
    },
  ],
  variants: {
    selected: {
      false: {
        color: color.gray.gray500,
        border: `1px solid ${color.gray.gray200}`,
      },
      true: {
        color: color.primary.blue700,
        border: `1px solid ${color.primary.blue500}`,
      },
    },
    petInfoType: {
      manual: {
        flexDirection: "column",
      },
    },
  },
});
