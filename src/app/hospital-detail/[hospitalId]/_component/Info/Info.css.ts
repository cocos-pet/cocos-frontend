import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const infoContainer = style({
    display: "flex",
    padding: "3.2rem 0rem",
    flexDirection: "column",
    alignItems:"center",
    gap:"1.6rem",
    alignSelf:"stretch"
});

export const infoName = style([
    font.heading01,
    {
        fontWeight: 600,
        marginTop:"3.2rem",
    }
]);

export const infoPhoneNumber = style([
    font.body01,
    {
        display: "flex",
        alignItems: "center",
        gap: "0.8rem",
        fontWeight: 500,
        color: color.gray.gray700,
        marginTop: "1.6rem"
    }
]);