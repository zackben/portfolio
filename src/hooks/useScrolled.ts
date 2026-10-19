import { useEffect, useState } from "react";

/** Vrai dès que la page a défilé de plus de `offset` pixels. */
export function useScrolled(offset = 40) {
  const [scrolled, setScrolled] = useState(() => window.scrollY > offset);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}
