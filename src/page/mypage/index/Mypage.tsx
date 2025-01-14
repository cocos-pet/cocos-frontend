import Nav from "@common/component/Nav/Nav";
import FilterBottomSheet from "@shared/component/FilterBottomSheet/FilterBottomSheet";
import { useFilterStore } from "@store/filter";
import { useEffect } from "react";

const Mypage = () => {
  const { categoryData, setCategoryData } = useFilterStore();

  const kind = [
    { id: 1, name: "Dog" },
    { id: 2, name: "Cat" },
    { id: 3, name: "Bird" },
  ];

  const symptoms = [
    { id: 1, name: "Fever", symptoms: [{ id: 1, name: "High Temperature" }] },
    { id: 2, name: "Cough", symptoms: [{ id: 2, name: "Dry Cough" }] },
  ];

  const disease = [
    { id: 1, name: "Cancer", diseases: [{ id: 1, name: "Lung Cancer" }] },
    { id: 2, name: "Diabetes", diseases: [{ id: 2, name: "Type 2 Diabetes" }] },
  ];

  useEffect(() => {
    setCategoryData("kind", kind);
    setCategoryData("symptoms", symptoms);
    setCategoryData("disease", disease);
  }, [setCategoryData]);

  useEffect(() => {
    console.log(categoryData);
  }, [categoryData]);

  return (
    <>
      <FilterBottomSheet />
      <Nav />
    </>
  );
};

export default Mypage;
