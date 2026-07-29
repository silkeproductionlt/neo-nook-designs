import { motion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

export interface NavItemDef {
  label: string;
  href: string;
}

interface NavItemsProps {
  items: NavItemDef[];
  activeHref: string | null;
  onSelect: (href: string) => void;
}

/**
 * Single underline element that travels between nav items by animating
 * its left/width (no scale correction, so it never visually shrinks).
 */
const NavItems = ({ items, activeHref, onSelect }: NavItemsProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [rect, setRect] = useState<{ left: number; width: number } | null>(null);

  const measure = useCallback(() => {
    const list = listRef.current;
    const el = activeHref ? itemRefs.current[activeHref] : null;
    if (!list || !el) return;
    const listBox = list.getBoundingClientRect();
    const box = el.getBoundingClientRect();
    const width = box.width * 0.78;
    setRect({ left: box.left - listBox.left + (box.width - width) / 2, width });
  }, [activeHref]);

  useLayoutEffect(measure, [measure, items]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <ul ref={listRef} className="relative hidden md:flex items-center gap-10">
      {items.map((item, i) => {
        const isActive = activeHref === item.href;
        return (
          <li key={item.href}>
            <button
              ref={(el) => {
                itemRefs.current[item.href] = el;
              }}
              onClick={() => onSelect(item.href)}
              className={`relative pb-2 text-xs uppercase tracking-[0.18em] transition-colors duration-300 flex items-center gap-2 ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-[10px] opacity-40 tabular-nums">0{i + 1}</span>
              {item.label}
            </button>
          </li>
        );
      })}

      {rect && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 h-[2px] rounded-full bg-primary"
          style={{ boxShadow: "0 0 6px hsl(var(--primary) / 0.55), 0 0 16px hsl(var(--primary) / 0.3)" }}
          initial={false}
          animate={{ x: rect.left, width: rect.width }}
          transition={{ type: "spring", stiffness: 520, damping: 30, mass: 0.7 }}
        />
      )}
    </ul>
  );
};

export default NavItems;
