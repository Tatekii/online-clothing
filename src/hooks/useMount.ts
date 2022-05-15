import { useEffect } from "react";

export default function useMount(callback: Function): void {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
