import { IcChevronLeft, IcEditPen, IcOut } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import * as styles from "./Setting.css";
import Divider from "@common/component/Divider/Divider";

const Setting = () => {
  return (
    <>
      <HeaderNav leftIcon={<IcChevronLeft width={20} height={20} />} centerContent={"설정"} />

      <div className={styles.settingWrapper}>
        <div className={styles.myprofileSettingWrapper}>
          <span className={styles.myprofileText}>마이 프로필</span>
          <Divider size={"small"} />
          <div className={styles.editMyProfile}>
            <span className={styles.myProfileSpan}>
              <IcEditPen width={20} height={20} />
              <span className={styles.myProfileSpanText}>내 정보수정</span>
            </span>
          </div>
        </div>

        <div className={styles.accountWrapper}>
          <span className={styles.myprofileText}>계정</span>
          <Divider size={"small"} />
          <div className={styles.editMyProfile}>
            <span className={styles.myProfileSpan}>
              <IcOut width={20} height={20} />
              <span className={styles.myProfileSpanText}>로그아웃</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
