import { createVar, style } from "@vanilla-extract/css";

//동적 스타일링 (style 관련된 코드는 반드시 .css.ts에 작성하는게 rule
export const styles = {
  container: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "lightblue",
  }),
  searchHeader: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.8rem",
  }),
  button: style({
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  }),
  input: style({
    padding: "10px",
    border: "1px solid black",
    borderRadius: "5px",
    marginTop: "20px",
    width: "200px",
  }),
  list: style({
    listStyle: "none",
    padding: "0",
    margin: "0",
    marginTop: "20px",
  }),
  listItem: style({
    padding: "10px",
    border: "1px solid black",
    borderRadius: "5px",
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
  }),
};
