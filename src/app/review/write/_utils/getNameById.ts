import { symptomGetResponse } from "@api/domain/register-pet/symptom";
import { diseaseGetResponse } from "@api/domain/register-pet/disease";

export const getSymptomNameById = (id: number, symptomBodyData?: symptomGetResponse["data"]): string => {
  const symptom = [...(symptomBodyData?.bodies?.flatMap((b) => b.symptoms ?? []) ?? [])];
  return symptom.find((item) => item.id === id)?.name ?? "알 수 없음";
};
export const getDiseaseNameById = (id: number, diseaseBodyData?: diseaseGetResponse["data"]): string => {
  const disease = diseaseBodyData?.bodies?.flatMap((body) => body.diseases ?? []).find((d) => d.id === id);

  return disease?.name ?? "알 수 없음";
};
