import { createGlobalTheme } from "@vanilla-extract/css";
import { color } from "./color.css";

export const semanticColor = createGlobalTheme(":root", {
  primary: {
    normal: color.primary.blue500,
    strong: color.primary.blue600,
    heavy: color.primary.blue700,
  },
  neutral: {
    normal: color.gray.gray000,
    strong: color.gray.gray100,
    inverse: color.gray.gray900,
    assistive: "#DBD7C6",
  },
  disable: {
    fill: color.gray.gray300,
    text: color.gray.gray500,
  },
  text: {
    normal: color.gray.gray900,
    strong: color.primary.blue500,
    inverse: color.gray.gray000,
    assistive: color.gray.gray700,
    assistiveLight: color.gray.gray600,
  },
  line: {
    normal: color.gray.gray100,
    strong: color.gray.gray200,
    heavy: color.gray.gray300,
  },
});
