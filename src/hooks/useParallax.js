import { useState, useEffect } from "react";

export function useParallax(factor = 0.15) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const update = () => {
      setOffset(window.scrollY * factor);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [factor]);

  return offset;
}
