import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end overflow-hidden pt-32 pb-16"
    >
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 w-full">
        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-16 md:mb-24 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full accent-dot" />
            <span>{t.hero.label}</span>
          </div>
          <span className="hidden sm:block tabular-nums">EST. 2024 — ∞</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-medium text-[13vw] md:text-[9vw] lg:text-[8rem] leading-[0.92] tracking-tighter text-foreground"
        >
          <span className="block">{t.hero.headline}</span>
          <span className="block text-outline italic font-normal">
            {t.hero.headlineAccent}
          </span>
        </motion.h1>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
          <p className="md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
            {t.hero.subtitle}
          </p>

          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-3">
            <button
              onClick={() => scrollTo("#projects")}
              className="group flex items-center justify-between border-t border-border pt-4 hover:border-primary transition-colors duration-500"
            >
              <span className="text-sm uppercase tracking-[0.18em] text-foreground group-hover:text-primary transition-colors">
                {t.hero.viewProjects}
              </span>
              <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="group flex items-center justify-between border-t border-border pt-4 hover:border-primary transition-colors duration-500"
            >
              <span className="text-sm uppercase tracking-[0.18em] text-muted-foreground group-hover:text-primary transition-colors">
                {t.hero.getInTouch}
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
