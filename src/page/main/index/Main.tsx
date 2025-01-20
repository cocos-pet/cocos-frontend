import MainFooter from "./mainFooter/MainFooter";
import Divider from "@common/component/Divider/Divider";
import HotPost from "./hotPost/HotPost";
import MainHeader from "./mainHeader/mainHeader";
import Symptom from "./symptom/Symptom";
import { TextField } from "@common/component/TextField";
import { useNavigate } from "react-router-dom";
import { IcSearch } from "@asset/svg";
import * as styles from "./Main.css";
import Nav from "@common/component/Nav/Nav";
import Spacing from "@common/component/Spacing/Spacing";
import { useQueryGetPopular } from "@api/domain/main/hook";
import { PATH } from "@route/path";

const Main = () => {
  const { data: postsData } = useQueryGetPopular();

  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate(PATH.SEARCH.ROOT);
  };

  const user = {
    accessToken:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MzcyMDE4NjgsImV4cCI6MTczNzgwNjY2OCwibWVtYmVySWQiOjN9.e3NomRDxNu99lniRbw5fZE6kuSXf5pl9K_SK2jzAhSq2tnoz5Tcv0RQyjTshvPlWESQquZYt_IW3q0Z4MG0AnA",
  };

  localStorage.setItem("user", JSON.stringify(user));

  const handleTextFieldChange = () => {};

  if (!postsData) return null;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <TextField
          state="default"
          placeholder="심장병, 백내장"
          onClick={handleSearchClick}
          onChange={handleTextFieldChange}
          value=""
          icon={<IcSearch />}
        />
      </div>
      <MainHeader />
      <Symptom bodies={[]} />
      <Divider />
      <HotPost posts={[]} />
      <Divider />
      <MainFooter />
      <Spacing marginBottom="8" />
      <span style={{ position: "fixed", bottom: "0", backgroundColor: "white", width: "100%" }}>
        <Nav />
      </span>
    </div>
  );
};

export default Main;
