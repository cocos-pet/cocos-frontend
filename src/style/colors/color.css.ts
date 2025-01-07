import { createGlobalTheme } from "@vanilla-extract/css";

export const color = createGlobalTheme(":root", {
  primary: {
    blue100: "#DEFEFF",
    blue200: "#C8FDFF",
    blue300: "#B0FCFF",
    blue400: "#8EF6FF",
    blue500: "#43D6FF",
    blue600: "#3DC4F5",
    blue700: "#14B5F0",
    blue800: "#00ACEA",
    blue900: "#00ACEA",
  },
  yellow: {
    yellow100: "#FFFCF2",
    yellow200: "#FFFBEB",
    yellow300: "#FFF5D1",
    yellow400: "#FFF0B8",
    yellow500: "#FFEA9E",
    yellow600: "#FFE785",
    yellow700: "#FFE270",
    yellow800: "#FFDC51",
    yellow900: "#FFD22D",
  },
  gray: {
    gray000: "#FFFFFF",
    gray100: "#F8F8F8",
    gray200: "#F0F0F0",
    gray300: "#E4E4E4",
    gray400: "#D8D8D8",
    gray500: "#C6C6C6",
    gray600: "#BEBEBE",
    gray700: "#717171",
    gray800: "#555555",
    gray900: "#222222",
  },
  red: {
    warning_red100: "#FDE9F4",
    warning_red200: "#F53D3D",
  },
});
