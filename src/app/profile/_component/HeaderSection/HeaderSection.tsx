import HeaderNav from "@design-system/HeaderNav/HeaderNav";
import { IcChevronLeft } from "@asset/svg";

interface HeaderSectionProps {
  onNavigateBack: () => void;
}

const HeaderSection = ({ onNavigateBack }: HeaderSectionProps) => {
  return (
    <span style={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
      <HeaderNav
        leftIcon={<IcChevronLeft width={24} height={24} onClick={onNavigateBack} />}
        centerContent={"프로필"}
      />
    </span>
  );
};

export default HeaderSection;
