import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send, ArrowRight } from "lucide-react";
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
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">{t.contact.label}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            className="flex flex-col justify-center gap-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{t.contact.email}</p>
                <p className="text-foreground font-medium">etec.app@outlook.com</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{t.contact.location}</p>
                <p className="text-foreground font-medium">{t.contact.locationValue}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="font-heading text-xl font-bold mb-2">{t.contact.closingStatement}</p>
              <p className="text-muted-foreground text-sm">{t.contact.closingDesc}</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 border border-border flex flex-col gap-5 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-widest block mb-2">{t.contact.name}</label>
              <input
                type="text"
                required
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-widest block mb-2">{t.contact.emailLabel}</label>
              <input
                type="email"
                required
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-widest block mb-2">{t.contact.message}</label>
              <textarea
                required
                rows={4}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl gradient-bg text-primary-foreground font-heading text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-primary/25"
            >
              {submitted ? t.contact.sent : t.contact.send}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
