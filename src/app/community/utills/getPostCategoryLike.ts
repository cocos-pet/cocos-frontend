export const getCategoryResponse = (category: string | undefined) => {
  // 조건에 따라 값을 반환
  return category === "증상·질병" || category === "병원고민"
    ? "curious"
    : "support";
};
