import { IcCocosM, IcHealing, IcHospital, IcSymptom } from "@asset/svg";
import { label } from "@page/community/component/WriteInputSection/WriteInputSection.css.ts";

export const DropDownItems = [
  {
    icon: <IcSymptom width={20} height={20} />,
    label: "증상·질병",
    value: 1,
    english: "symptom",
  },
  {
    icon: <IcHospital width={20} height={20} />,
    label: "병원고민",
    value: 2,
    english: "hospital",
  },
  {
    icon: <IcHealing width={20} height={20} />,
    label: "일상·치유",
    value: 3,
    english: "healing",
  },
  {
    icon: <IcCocosM width={20} height={20} />,
    label: "코코스매거진",
    value: 4,
    english: "cocos",
  },
];
