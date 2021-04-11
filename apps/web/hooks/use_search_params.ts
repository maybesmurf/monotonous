import { useMemo } from "react";

export function useSearchParams(key: string) {
  return useMemo(() => {
    return (
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get(key)
    );
  }, []);
}
