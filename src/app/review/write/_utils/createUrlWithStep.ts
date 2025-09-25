export const createUrlWithStep = (stepNumber: number): string => {
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set("step", stepNumber.toString());
  return newUrl.pathname + newUrl.search;
};
