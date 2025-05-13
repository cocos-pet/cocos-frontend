import { font, color } from "@style/index";
import { style } from "@vanilla-extract/css";

export const summaryContainer = style({
    display: "flex",
    padding:" 2rem 0rem",
    flexDirection: "column",
    alignItems: "flex-start",
    gap:"0.4rem",
    alignSelf:"stretch"
});

export const summaryTitle = style([
    font.heading02,
    {
        fontWeight: 600,
        padding: "0rem 2rem"
    }
]);

export const summarySubTitle = style([
    font.body01,
    {
        fontWeight: 500,
        padding: "0rem 2rem",
        color:color.gray.gray600,
    }
]);

export const summaryGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1.6rem",
  padding:"1.2rem 2rem 1.2rem 2rem",
  width: "100%",
  marginTop: "0.8rem",
});

export const summarySection = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
});

export const summaryContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const summarySectionTitle = style([
    font.heading03,{
        fontWeight: 600,
        textAlign: "center",
        fontSize: "1.6rem",
    }
]);

export const summaryItem = style({
    display:"flex",
    justifyContent:"space-between",
    padding:"0.8rem",
    alignItems:"center",
    alignSelf:"stretch",
    borderRadius:"0.8rem",
    border:"1px solid",
    borderColor:color.gray.gray100,
});

export const goodCount = style([
    font.body01,{
        fontWeight: 600,
        color:color.primary.blue700,
        textAlign: "right",
        lineHeight: "1.96rem",
    }
]);

export const badCount = style([
    font.body01,{
        fontWeight: 600,
        color:color.red.warning_red200,
        textAlign: "right",
        fontSize: "1.4rem",
        lineHeight: "1.96rem",
    }
]);

export const folderButtonWrapper = style({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom:"2rem"
  });
  

export const folderButton = style({
    width: "2.4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",

});

export const rotateIcon = style({
    transform: "rotate(180deg)",
    transition: "transform 0.2s ease"
});
