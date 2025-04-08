import { style } from "@vanilla-extract/css";
import {color} from "@style/styles.css";


export const Wrapper =  style({
        position:"relative",
        marginTop:"8rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
        height: "calc(100vh - 8rem)",
        borderRadius: "20px 20px 0px 0px",
        backgroundColor:"gray",
        // backgroundColor:color.gray.gray000,

    });

export const bottomSheetHandleBar = style({
    position:"absolute",
    top:"1rem",
    width:"8rem",
});

export const textFieldStyle = style({
    position:"absolute",
    top:"2.4rem",
    width:"100%",    
    padding:"1.2rem 2rem",
})

export const buttonContainer = style({
    position:"absolute",
    bottom:"3.2rem",
    display:"flex",
    flexDirection: "column",
    gap:"0.8rem",
    width:"100%",
    padding:"0 2rem",

})