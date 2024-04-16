import { useStepsContext } from "@/store/form";
import { ComponentType } from "react";
import { Uninitialized } from "./uninitialized";

export function withInitializer<
  T extends React.HTMLAttributes<HTMLElement> & { params?: { slug?: string } }
>(Component: ComponentType<T>) {
  const InitializedComponent: React.FC<T> = (props) => {
    const { initialized, stores } = useStepsContext();
    const slug = props.params?.slug;

    if (initialized && slug && stores[slug]) {
      return <Component {...props} />;
    }

    return <Uninitialized />;
  };

  return InitializedComponent;
}
