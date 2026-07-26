import { Code, Palette, Gauge, Monitor } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Code, title: t.services.frontEnd, desc: t.services.frontEndDesc },
    { icon: Palette, title: t.services.webDesign, desc: t.services.webDesignDesc },
    { icon: Gauge, title: t.services.performance, desc: t.services.performanceDesc },
    { icon: Monitor, title: t.services.redesign, desc: t.services.redesignDesc },
  ];

  return (
    <section id="services" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">{t.services.label}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            {t.services.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="bg-card rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
