"use client";

import { useFormInitializer } from "@/hooks/use-form-data";
import { useFormStepsStore, useStepsContext } from "@/store/form";
import Link from "next/link";
import { useEffect } from "react";

const STEPS = [
  {
    id: "step_1",
  },
  {
    id: "step_2",
  },
  {
    id: "step_3",
  },
  {
    id: "step_4",
  },
  {
    id: "step_5",
  },
];

const Page = () => {
  const { reset } = useFormStepsStore();
  const { initStores } = useStepsContext();
  const { loading, data } = useFormInitializer();

  useEffect(() => {
    initStores(data);
    reset(data.map((step) => step.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to the Forms Perf Example</h1>
      <Link href="/form/step_1">Go to Step 1</Link>
    </div>
  );
};

export default Page;
