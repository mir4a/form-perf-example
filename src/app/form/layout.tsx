"use client";

import { createFormStepStoreFactory, StepsStoreContext } from "@/store/form";
import { useState } from "react";

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [stores, setStores] = useState<Record<string, any>>({});
  const [initialized, setInitialized] = useState(false);
  return (
    <StepsStoreContext.Provider
      value={{
        initStores: (steps) => {
          steps.forEach((step) => {
            const store = createFormStepStoreFactory(step.id);
            setStores((prev) => ({ ...prev, [step.id]: store }));
            setInitialized(true);
          });
        },
        stores,
        initialized,
      }}
    >
      {children}
    </StepsStoreContext.Provider>
  );
}
