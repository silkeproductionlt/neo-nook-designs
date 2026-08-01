import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    { title: t.process.step1, desc: t.process.step1Desc },
    { title: t.process.step2, desc: t.process.step2Desc },
    { title: t.process.step3, desc: t.process.step3Desc },
    { title: t.process.step4, desc: t.process.step4Desc },
  ];

  return (
    <section id="process" className="py-32 md:py-40 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 md:mb-24">
          <div className="md:col-span-4 flex items-start gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground tabular-nums pt-1">(03)</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground pt-1">
              {t.process.label}
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 font-heading text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-[0.95]"
          >
            {t.process.title.replace(/\.$/, "")}
            <span className="text-primary">.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 flex flex-col gap-6 min-h-[240px]"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-5xl font-medium text-outline tabular-nums">
                  0{i + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full accent-dot opacity-70" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-medium mb-2 tracking-tight">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
