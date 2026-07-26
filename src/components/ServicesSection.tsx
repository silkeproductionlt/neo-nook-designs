import { Code, Palette, Gauge, Monitor } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Code, title: t.services.frontEnd, desc: t.services.frontEndDesc, className: "md:col-span-2 md:row-span-2", featured: true },
    { icon: Palette, title: t.services.webDesign, desc: t.services.webDesignDesc, className: "md:col-span-2" },
    { icon: Gauge, title: t.services.performance, desc: t.services.performanceDesc, className: "" },
    { icon: Monitor, title: t.services.redesign, desc: t.services.redesignDesc, className: "" },
  ];

  return (
    <section id="services" className="py-32 bg-secondary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, hsl(193 100% 50% / 0.08), transparent 40%), radial-gradient(circle at 80% 90%, hsl(140 90% 65% / 0.08), transparent 40%)",
        }}
      />
      <div className="container mx-auto px-6 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[180px] gap-5 max-w-6xl mx-auto">
          {services.map(({ icon: Icon, title, desc, className, featured }, i) => (
            <motion.div
              key={title}
              className={`group relative overflow-hidden bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 ${className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {featured && (
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(400px circle at 30% 30%, hsl(193 100% 50% / 0.12), transparent 60%)",
                  }}
                />
              )}
              <div className="relative flex flex-col h-full">
                <div className={`rounded-xl bg-primary/10 flex items-center justify-center mb-6 ${featured ? "w-14 h-14" : "w-12 h-12"}`}>
                  <Icon className={`text-primary ${featured ? "w-7 h-7" : "w-6 h-6"}`} />
                </div>
                <h3 className={`font-heading font-semibold mb-3 ${featured ? "text-2xl" : "text-lg"}`}>{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
