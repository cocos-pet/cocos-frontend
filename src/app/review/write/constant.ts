// Step.1 ReviewPetInfo.tsx
export const PET_TYPE_STANDARD = 230;

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
export const CATEGORIES: { id: "symptom" | "disease"; label: string }[] = [
  { id: "symptom", label: "증상" },
  { id: "disease", label: "진단" },
];

// Step3.tsx
export const FEEDBACK_CATEGORIES: { id: string; label: string }[] = [
  { id: "good", label: "좋아요" },
  { id: "bad", label: "아쉬워요" },
];
