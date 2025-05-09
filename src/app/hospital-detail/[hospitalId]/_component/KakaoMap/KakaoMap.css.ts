import { style } from "@vanilla-extract/css";
import { font } from "@style/styles.css";

export const address = style([
    font.heading03,
    {
        fontWeight:600,
        position:"absolute",
        display:"flex",
        flexDirection:"column",
        height:"7rem",
        width:"100%",
        zIndex:2,
        backgroundColor:"white",
        marginTop:"9.1rem",
        padding:"1.2rem 1.2rem",
        borderRadius:"1rem",
        borderRight: "1px solid #E4E4E4",
        borderBottom: "1px solid #E4E4E4",
        borderLeft: "1px solid #E4E4E4",
    }
]);
