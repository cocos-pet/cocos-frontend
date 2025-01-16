import { createVar, style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { button } from "@common/component/Button/styles.css.ts";
import { color, font } from "@style/styles.css.ts";

export const iconSizeVar = createVar();

export const container = style({
  position: "relative",
  width: iconSizeVar,
  height: iconSizeVar,
});

export const moreIcon = style({
  width: iconSizeVar,
  height: iconSizeVar,
});

export const moreModal = recipe({
  base: {
    position: "absolute",
    top: "calc(100% + 0.8rem)",
    left: "-16rem",
    display: "flex",
    flexDirection: "column",
    borderRadius: "1.2rem",
    backgroundColor: "white",
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
    width: "18.4rem",
    zIndex: 10,
  },
  variants: {
    onEdit: {
      true: {
        // 수정하기가 있을 때
        height: "11.2rem",
      },
      false: {
        // 수정하기가 없을 때
        height: "5.6rem",
      },
    },
  },
  defaultVariants: {
    onEdit: false, // 기본값
  },
});

export const moreModalItem = recipe({
  base: [
    font.body01,
    {
      background: "none",
      border: "none",
      textAlign: "left",
      width: "100%",
      padding: "1.8rem 3.2rem",
      color: color.red.warning_red200,
      ":hover": {
        backgroundColor: color.gray.gray300,
      },
      ":active": {
        backgroundColor: color.gray.gray300,
      },
    },
  ],
  variants: {
    position: {
      first: {
        // 수정하기가 들어간 경우의 삭제하기 border
        borderRadius: "1.2rem 1.2rem 0 0",
      },
      last: {
        // 수정하기가 들어간 경우의 수정하기 border
        borderRadius: "0 0 1.2rem 1.2rem",
      },
      default: {
        // 수정하기가 없는 경우의 border
        borderRadius: "1.2rem",
      },
    },
  },
  defaultVariants: {
    position: "default",
  },
});

export const moreModalDivider = style({
  height: "1px",
  backgroundColor: color.gray.gray300,
  margin: "0",
});
