import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 md:py-40 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 md:mb-24">
          <div className="md:col-span-4 flex items-start gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground tabular-nums pt-1">(04)</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground pt-1">
              {t.contact.label}
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8"
          >
            <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95]">
              {t.contact.closingStatement.replace(/\.$/, "")}
              <span className="text-primary">.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5 flex flex-col gap-10 border-t border-border pt-10">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                {t.contact.email}
              </p>
              <a
                href="mailto:etec.app@outlook.com"
                className="font-heading text-2xl md:text-3xl tracking-tight text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
              >
                etec.app@outlook.com
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                {t.contact.location}
              </p>
              <p className="font-heading text-xl text-foreground">{t.contact.locationValue}</p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {t.contact.closingDesc}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-7 flex flex-col gap-8 border-t border-border pt-10"
          >
            <div className="flex flex-col gap-2 border-b border-border pb-4 focus-within:border-primary transition-colors">
              <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {t.contact.name}
              </label>
              <input
                type="text"
                required
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none text-base"
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div className="flex flex-col gap-2 border-b border-border pb-4 focus-within:border-primary transition-colors">
              <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                required
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none text-base"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
            <div className="flex flex-col gap-2 border-b border-border pb-4 focus-within:border-primary transition-colors">
              <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {t.contact.message}
              </label>
              <textarea
                required
                rows={3}
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none text-base resize-none"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="group self-start inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-foreground border border-border rounded-full px-6 py-3.5 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              {submitted ? t.contact.sent : t.contact.send}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
