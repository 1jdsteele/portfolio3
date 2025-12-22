import { useEffect, useState } from "react";

export default function useResizeSettleClass(ms = 220) {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    let t;

    const onResize = () => {
      setPulse((p) => p + 1); // retrigger class
      clearTimeout(t);
      t = setTimeout(() => {}, ms);
    };

    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, [ms]);

  // Changes whenever resize happens, use to force class re-apply
  return pulse;
}
