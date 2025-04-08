import * as styles from "./SearchHospital.css"
import IcBottomSheetLine from "@asset/svg/IcBottomSheetLine";
import { Button } from "@common/component/Button";
import { TextField } from "@common/component/TextField";

const SearchHospital = () => {

  return (
    <div className={styles.Wrapper} >
        <div className={styles.bottomSheetHandleBar}><IcBottomSheetLine/></div>
        <div className={styles.textFieldStyle}>
          <TextField value="hospitalName"/>
        </div>
        <div className={styles.buttonContainer}>
          <Button label="확인하기" size="large" variant="solidPrimary" disabled={false} />
          <Button label="취소하기" size="large" variant="solidNeutral" disabled={false}  />
        </div>
    </div>
    
  )
}

export default SearchHospital;                     
