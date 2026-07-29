import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view from a stable viewport anchor.
 * @param ids section ids (without the leading "#")
 */
export const useActiveSection = (ids: string[], anchorRatio = 0.36) => {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    let rafId = 0;
    let lastActive = active;

    const updateActive = () => {
      rafId = 0;
      const anchorY = window.scrollY + window.innerHeight * anchorRatio;
      let next = elements[0].id;

      for (const element of elements) {
        const top = element.offsetTop;
        if (top <= anchorY) next = element.id;
        else break;
      }

      if (next !== lastActive) {
        lastActive = next;
        setActive(next);
      }
    };

    const scheduleUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [ids.join(","), anchorRatio]);

  return active;
};
