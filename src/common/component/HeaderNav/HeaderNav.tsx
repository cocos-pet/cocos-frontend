// import * as styles from "./HeaderNav.css";
import { HeaderItemVariant, HeaderItem, leftIconStyle, rightIconStyle } from "./HeaderNav.css";
interface HeaderNavProps {
  leftIcon: React.ReactNode;
  textField?: React.ReactNode;
  label?: string;
  rightIcon?: React.ReactNode;
  btnText?: React.ReactNode;
}
// type CombinedButtonProps = ButtonProps & Exclude<ButtonVariants, undefined>;
type CombinedHeaderNavProps = HeaderNavProps & Exclude<HeaderItemVariant, undefined>;

const HeaderNav = ({ textField, label, leftIcon, type, rightIcon, btnText }: CombinedHeaderNavProps) => {
  return (
    <div className={HeaderItem({ type })}>
      {/* {leftIcon && <div className={icon}>{leftIcon}</div>} */}

      <div className={leftIconStyle}>{leftIcon}</div>
      {textField && textField}
      {label && label}
      {btnText ? (
        <div className={rightIconStyle}>{btnText}</div>
      ) : (
        rightIcon && <div className={rightIconStyle}>{rightIcon}</div>
      )}
    </div>
  );
};

export default HeaderNav;
