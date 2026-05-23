import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const socials = [
    { Icon: Mail, href: "mailto:etec.app@outlook.com", label: "Email" },
    { Icon: Github, href: "https://github.com", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-14 grid gap-10 md:grid-cols-3 items-start">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="gradient-text font-['Outfit'] font-black text-xl tracking-wide">Etevox</span>
            <span className="text-muted-foreground font-light">|</span>
            <span className="font-['Caveat'] font-bold text-foreground text-lg">Media</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            {t.hero.subtitle}
          </p>
        </div>

        <nav aria-label="Footer" className="md:justify-self-center">
          <ul className="flex flex-col gap-2">
            {links.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end">
          <a href="mailto:etec.app@outlook.com" className="text-sm text-foreground font-medium hover:text-primary transition-colors block mb-4">
            etec.app@outlook.com
          </a>
          <div className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-5 text-xs text-muted-foreground text-center">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
