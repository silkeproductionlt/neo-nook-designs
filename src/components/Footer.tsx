import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-border py-10 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="gradient-text font-['Outfit'] font-black text-lg tracking-wide">Etevox</span>
          <span className="text-muted-foreground font-light text-sm">|</span>
          <span className="font-['Caveat'] font-bold text-foreground text-base">Media</span>
          <span className="text-xs text-muted-foreground ml-3">{t.footer.rights}</span>
        </div>
        <div className="flex gap-6">
          {links.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
