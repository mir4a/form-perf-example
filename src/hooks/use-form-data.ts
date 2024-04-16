import { useEffect, useState } from "react";

export function useFormInitializer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      // Simulate an async operation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    init();
  }, []);

  return { loading };
}
