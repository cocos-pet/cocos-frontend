// Step1. DirectPetInfo.tsx
export const GENDER = [
  { id: 1, name: "암컷", value: "F" },
  { id: 2, name: "수컷", value: "M" },
];

export const PET_TYPES = [
  { id: 1, name: "강아지" },
  { id: 2, name: "고양이" },
];

// Step2. SearchSymptomDisease.tsx
export type CategoryType = "symptom" | "disease";

export const CATEGORIES: { id: CategoryType; label: string }[] = [
  { id: "symptom", label: "증상" },
  { id: "disease", label: "진단" },
];
