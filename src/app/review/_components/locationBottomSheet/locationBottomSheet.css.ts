import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const cityList = style([
  font.body01,
  {
    display: "flex",
    flexDirection: "column",
    background: color.gray.gray100,
    borderRadius: "0.8rem",
  },
]);

export const buttonWrapper = style([
  font.body01,
  {
    position: "sticky",
    bottom: 0,
    left: 0,
    width: "100%",
    background: "#fff",
    padding: "1.2rem 2rem 2.4rem 2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    marginTop: "51.2rem",
  },
]);

export const locationSheetContainer = style({
  zIndex: 999,
  display: "flex",
  flexDirection: "row",
  width: "100%",
  padding: "3.3rem 2rem 0rem 2rem",
  background: color.gray.gray000,
});

export const districtList = style([
  font.body01,
  {
    fontWeight: "500",
    display: "flex",
    width: "22.6rem",
    height: "4.4rem",
    flexDirection: "column",
  },
]);

export const districtItem = style({
  display: "flex",
  height: "4.4rem",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1.2rem 0.8rem",
  borderRadius: "9px",
  cursor: "pointer",
  background: color.gray.gray000,
});

export const selectedDistrict = style([
  font.body01,
  {
    border: `1px solid ${color.primary.blue500}`,
    background: color.primary.blue100,
    color: color.primary.blue600,
    fontWeight: "bold",
  },
]);

export const checkIcon = style({
  width: "2.4rem",
  height: "2.4rem",
});

export const cityTab = style([
  font.body01,
  {
    padding: "1.2rem 2.8rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    borderRadius: "0.8rem",
  },
]);

export const selectedCityTab = style({
  backgroundColor: color.gray.gray600,
});
