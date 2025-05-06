"use client";

import Step1 from "@app/review/write/_section/Step1";
import { FormProvider, useForm } from "react-hook-form";
export interface ReviewFormData {
  hospital: string;
  date: string;
}

const defaultValues: ReviewFormData = {
  hospital: "",
  date: "",
};

const page = () => {
  const methods = useForm<ReviewFormData>({
    defaultValues,
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <Step1 />
    </FormProvider>
  );
};
export default page;
