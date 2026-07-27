import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-6">
            <h3 className="font-heading text-5xl md:text-7xl font-medium tracking-tighter leading-[0.95]">
              Etevox<span className="text-outline">/Media</span>
            </h3>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Menu</p>
            <ul className="flex flex-col gap-2">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contact</p>
            <a href="mailto:etec.app@outlook.com" className="text-sm text-foreground hover:text-primary transition-colors block">
              etec.app@outlook.com
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full accent-dot" />
            {t.footer.rights}
          </div>
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Crafted with intent.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
