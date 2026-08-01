import { useState, useEffect, useMemo } from "react";
import LangSwitcher from "@/components/LangSwitcher";
import NavItems from "@/components/NavItems";
import DevBanner from "@/components/DevBanner";
import { useLanguage } from "@/i18n/LanguageContext";
import { getLenis } from "@/hooks/useLenis";
import { useActiveSection } from "@/hooks/useActiveSection";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const ids = useMemo(() => navItems.map((n) => n.href.slice(1)), [t]);
  const activeId = useActiveSection(ids);
  const activeHref = activeId ? `#${activeId}` : null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.4 });
    else target.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-surface border-b border-border py-3" : "py-6 bg-transparent"
      }`}
    >
      <DevBanner />
      <div className="container mx-auto flex items-center justify-between px-6">
        <button onClick={() => handleClick("#home")} className="flex items-center gap-2.5 group">
          <span className="w-1.5 h-1.5 rounded-full accent-dot" />
          <span className="font-heading font-semibold text-sm tracking-tight text-foreground">
            Etevox<span className="text-muted-foreground font-normal">/Media</span>
          </span>
        </button>

        <NavItems items={navItems} activeHref={activeHref} onSelect={handleClick} />


        <div className="flex items-center gap-4">
          <LangSwitcher />
          <button
            onClick={() => handleClick("#contact")}
            className="hidden md:inline-flex text-xs uppercase tracking-[0.18em] text-foreground border-b border-foreground/40 hover:border-primary hover:text-primary transition-colors pb-0.5"
          >
            {t.hero.getInTouch}
          </button>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-surface border-t border-border mt-3">
          <ul className="flex flex-col p-4 gap-1">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="w-full text-left px-3 py-3 text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-3"
                >
                  <span className="text-[10px] opacity-40 tabular-nums">0{i + 1}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
