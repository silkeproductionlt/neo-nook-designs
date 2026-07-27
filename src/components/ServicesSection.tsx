import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { title: t.services.frontEnd, desc: t.services.frontEndDesc },
    { title: t.services.webDesign, desc: t.services.webDesignDesc },
    { title: t.services.performance, desc: t.services.performanceDesc },
    { title: t.services.redesign, desc: t.services.redesignDesc },
  ];

  return (
    <section id="services" className="py-32 md:py-40 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 md:mb-28">
          <div className="md:col-span-4 flex items-start gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground tabular-nums pt-1">
              (01)
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground pt-1">
              {t.services.label}
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 font-heading text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-[0.95]"
          >
            {t.services.title.replace(/\.$/, "")}
            <span className="text-primary">.</span>
          </motion.h2>
        </div>

        <div className="border-t border-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-8 md:py-10 border-b border-border hover:bg-secondary/40 transition-colors duration-500 px-2 -mx-2"
            >
              <span className="md:col-span-1 text-xs uppercase tracking-[0.18em] text-muted-foreground tabular-nums pt-2">
                0{i + 1}
              </span>
              <h3 className="md:col-span-5 font-heading text-2xl md:text-4xl font-medium tracking-tight group-hover:text-primary transition-colors duration-500">
                {s.title}
              </h3>
              <p className="md:col-span-5 md:col-start-8 text-muted-foreground leading-relaxed text-base max-w-md">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
