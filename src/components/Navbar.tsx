import { useState, useEffect } from "react";
import LangSwitcher from "@/components/LangSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import { getLenis } from "@/hooks/useLenis";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target, { offset: -80, duration: 1.4 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border py-3 shadow-sm"
          : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <button onClick={() => handleClick("#home")} className="flex items-center gap-2">
          <span className="gradient-text font-['Outfit'] font-black text-xl tracking-wide">Etevox</span>
          <span className="text-muted-foreground font-light">|</span>
          <span className="font-['Caveat'] font-bold text-foreground text-lg">Media</span>
        </button>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <LangSwitcher />

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border mt-2 mx-4 rounded-xl p-4 shadow-lg">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                >
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
