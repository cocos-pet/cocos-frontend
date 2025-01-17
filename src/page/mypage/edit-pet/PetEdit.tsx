import { IcChevronLeft } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";

const PetEdit = () => {
  return (
    <div>
      <HeaderNav leftIcon={<IcChevronLeft width={24} height={24} />} centerContent={"반려동물 정보 수정"} />
    </div>
  );
};

export default PetEdit;
