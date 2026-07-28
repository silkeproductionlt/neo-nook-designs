import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
 * Horizontal nav with a single underline element that physically travels
 * between items (shared layoutId) and stretches slightly while moving.
 */
const NavItems = ({ items, activeHref, onSelect }: NavItemsProps) => {
  const [moving, setMoving] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setMoving(true);
    const id = window.setTimeout(() => setMoving(false), 280);
    return () => window.clearTimeout(id);
  }, [activeHref]);

  return (
    <ul className="hidden md:flex items-center gap-10">
      {items.map((item, i) => {
        const isActive = activeHref === item.href;
        return (
          <li key={item.href}>
            <button
              onClick={() => onSelect(item.href)}
              className={`relative pb-2 text-xs uppercase tracking-[0.18em] transition-colors duration-300 flex items-center gap-2 ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-[10px] opacity-40 tabular-nums">0{i + 1}</span>
              {item.label}

              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-1/2 h-[2px] w-[75%] rounded-full bg-primary"
                  style={{
                    x: "-50%",
                    boxShadow: "0 0 6px hsl(var(--primary) / 0.45)",
                    willChange: "transform",
                  }}
                  animate={{ scaleX: moving ? 1.25 : 1 }}
                  transition={{
                    layout: { type: "spring", stiffness: 520, damping: 34, mass: 0.7 },
                    scaleX: { type: "spring", stiffness: 480, damping: 26, mass: 0.6 },
                  }}
                />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
