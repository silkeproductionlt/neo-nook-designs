import { Search, PenTool, Code, Rocket } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Search, title: t.process.step1, desc: t.process.step1Desc },
    { icon: PenTool, title: t.process.step2, desc: t.process.step2Desc },
    { icon: Code, title: t.process.step3, desc: t.process.step3Desc },
    { icon: Rocket, title: t.process.step4, desc: t.process.step4Desc },
  ];

  return (
    <section id="process" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">{t.process.label}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            {t.process.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg mx-auto mb-6 flex items-center justify-center shadow-lg shadow-primary/20 relative z-10">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-primary tracking-widest uppercase mb-2 block">
                0{i + 1}
              </span>
              <h3 className="font-heading text-base font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
