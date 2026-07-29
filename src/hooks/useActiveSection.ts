import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view by picking the section whose
 * center is closest to the viewport center. Uses a rAF-throttled scroll
 * listener so fast scrolling produces a single, continuous target instead of
 * stepping through every intermediate section.
 * @param ids section ids (without the leading "#")
 */
export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      const anchor = window.innerHeight * 0.4;
      let bestId: string | null = null;
      let bestDist = Infinity;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const box = el.getBoundingClientRect();
        // distance from the anchor line to the section's visible span
        const dist =
          box.top > anchor ? box.top - anchor : box.bottom < anchor ? anchor - box.bottom : 0;
        if (dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      }

      if (bestId) setActive((prev) => (prev === bestId ? prev : bestId));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids.join(",")]);

  return active;
};
