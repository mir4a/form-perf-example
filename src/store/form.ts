import { createContext, useContext } from "react";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type FormField = Record<string, any>;

export type FormStep = {
  id: string;
  title: string;
};

export interface FormState {
  steps: FormStep[];
  completed: boolean[];
  setCompleted: (id: string) => void;
  reset: (steps?: FormStep[]) => void;
}

export const useFormStepsStore = create<FormState>()(
  devtools(
    persist(
      (set) => ({
        steps: [],
        completed: [],
        setCompleted: (id) =>
          set((state) => {
            const index = state.steps.findIndex((step) => step.id === id);
            const completed = [...state.completed];
            completed[index] = true;

            return { completed };
          }),
        reset: (steps) =>
          set({
            steps: steps ?? [],
            completed: steps?.length ? Array(steps.length).fill(false) : [],
          }),
      }),
      { name: "form-steps" }
    )
  )
);

export interface FormStepState {
  data: Record<string, any>;
  schema: Record<string, any>;
  setData: (data: Record<string, any>) => void;
  reset: () => void;
}

export const createFormStepStoreFactory = (id: string, initData: any) =>
  create<FormStepState>()(
    devtools(
      persist(
        (set) => ({
          data: { ...initData.data },
          schema: { ...initData.schema },
          setData: (data) => set({ ...data }),
          reset: () => set({ data: [] }),
        }),
        { name: `form-step-${id}` }
      )
    )
  );

export type StepsStoreContextType = {
  initStores: (steps: any) => void;
  stores: Record<string, any>;
  initialized: boolean;
};
export const StepsStoreContext = createContext<StepsStoreContextType | null>(
  null
);
export const useStepsContext = () => {
  const context = useContext(StepsStoreContext);
  if (!context) {
    throw new Error("useStepsContext must be used within a StepsStoreProvider");
  }
  return context;
};
