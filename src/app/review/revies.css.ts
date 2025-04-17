import { text } from "@common/component/Comment/Comment.css";
import { color, font } from "@style/styles.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const searchBarContainer=style({
    margin:"1.6rem 2rem 2rem"
})

export const reviewContainer = style ({
    width: "100%"
})

export const reviewList = style ({
    width: "100%"
})

export const headerContainer = style ({
    width: "100%",
   
})

export const recommendHospital = style ({
    marginTop :"2.4rem",
    marginLeft:"2rem"

})

export const recommendTitle = style ([
    font.body01,{
        fontWeight: "600",
    }
])

export const recommendTitleHighlight = style({
    color: color.primary.blue900
})

export const recommendList = style({
    marginTop: "2rem",
    display: "flex",
    gap: "1.6rem",
    overflowX: "auto",
    marginBottom:"2.4rem",
    width: "100%",
    "::-webkit-scrollbar": {
        display: "none"
    }
})

export const hospitalCard = style({
    padding: "2rem",
    border: `1px solid ${color.gray.gray200}`,
    borderRadius: "1.6rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
    cursor: "pointer",
    minWidth: "30rem",
    height:"7.8remßßßß"
})

export const hospitalTitleContainer = style({
    display: "flex",
    alignItems: "center",
    gap: "0.8rem"
})

export const hospitalRank = style([
    font.heading03,
    {
        color: color.primary.blue600
    }
])

export const hospitalName = style([
    font.heading03,
])

export const hospitalAddress = style([
    font.body01,
    {
        color: color.gray.gray500,
        fontSize: "1.4rem"
    }
])

export const bannerContainer = style({
    width:"33.5rem",
    height:"10rem"
})