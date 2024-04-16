import { generateSteps } from "@/utils/forms";
import { useEffect, useState } from "react";

export function useFormInitializer() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const init = async () => {
      // Simulate an async operation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const data = generateSteps();
      setData(data);
      setLoading(false);
    };

    init();
  }, []);

  return { loading, data };
}
