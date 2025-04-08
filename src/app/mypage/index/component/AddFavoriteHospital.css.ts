import { color, font, semanticColor } from "@style/styles.css"
import { style } from "@vanilla-extract/css"

export const container = style({
    display: 'flex',
    width: '100%',
    height: '8rem',
    padding: '1.6rem',
    justifyContent: "space-between",
    alignItems: 'center',
    alignSelf: 'stretch',

    borderRadius: '8px',
    border: `1px solid ${semanticColor.line.strong}`,
    background: `${color.gray.gray100}`
})

export const addBox = style([
    font.body01
    ,{
        width: '100%',
    display: 'flex',
    padding: '0.6rem 1.4rem',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.6rem',

    color: `${semanticColor.text.assistive}`,
}])

export const redirectBox = style({
    display: "flex",
    width: '100%',
    flexDirection: "row",
    gap: "1.2rem",
    justifyContent: "space-between",
    alignItems: "center"
})

export const leftContentBox = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.4rem',
    flex: '1 0 0'
})

export const leftTopText = style([
    font.label01,
    {
    alignSelf: 'stretch',
    color: semanticColor.text.heavy,
}])

export const leftMiddleText = style([
    font.heading03,
    {
    alignSelf: 'stretch',
    color: semanticColor.text.normal,
}])

export const leftBottomText = style([
    font.label01,
    {
    alignSelf: 'stretch',
    color: semanticColor.text.assistive,
}])

export const rightContentBox = style({
    width: '4.8rem',
    height: '4.8rem',
    borderRadius: '8rem'
})