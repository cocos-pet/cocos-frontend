import MainHeader from "@app/main/_section/mainHeader/mainHeader.tsx";
import MainPageClient from "@app/main/MainPageClient.tsx";
import * as styles from "./Main.css.ts";

export default function Page() {
  return (
    <div className={styles.mainContainer}>
      <MainHeader />
      <MainPageClient />
    </div>
  );
}
