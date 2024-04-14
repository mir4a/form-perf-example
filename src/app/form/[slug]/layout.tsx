"use client";

import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
  children: React.ReactNode;
};
const Layout = ({ params, children }: Props) => {
  const router = useRouter();
  const steps = Array.from({ length: 50 }, (_, i) => ({
    id: `step_${i + 1}`,
    label: `Step ${i + 1}`,
  }));

  const handleStep = (step: string) => () => {
    router.push(`/form/${step}`);
  };

  return (
    <div className="px-10">
      <div className="grid grid-cols-7 gap-4">
        <div className="max-h-screen overflow-auto py-10 col-span-2 md:col-span-1">
          <Stepper
            activeStep={0}
            nonLinear
            alternativeLabel
            orientation="vertical"
            connector={null}
            className="items-center"
          >
            {steps.map((step) => (
              <Step key={step.id} active={step.id === params.slug}>
                <StepButton color="inherit" onClick={handleStep(step.id)}>
                  {step.label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className="col-span-5 md:col-span-6 max-h-screen overflow-auto py-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
