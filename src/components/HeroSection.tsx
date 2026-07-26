import { useLanguage } from "@/i18n/LanguageContext";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const bg = useTransform(
    [sx, sy] as unknown as [typeof sx, typeof sy],
    ([x, y]: number[]) =>
      `radial-gradient(600px circle at ${x}% ${y}%, hsl(193 100% 50% / 0.18), transparent 45%), radial-gradient(500px circle at ${100 - x}% ${100 - y}%, hsl(140 90% 65% / 0.15), transparent 50%)`
  );

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Aurora cursor-follow glow */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background: bg }} />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground tracking-widest uppercase mb-8 px-3 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-primary" />
            </span>
            {t.hero.label}
          </motion.p>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.05]">
            {t.hero.headline}
            <span className="gradient-text"> {t.hero.headlineAccent}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            {t.hero.subtitle}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="group relative px-8 py-3.5 rounded-xl gradient-bg text-primary-foreground font-heading text-sm font-semibold tracking-wide shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2">
                {t.hero.viewProjects}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3.5 rounded-xl border border-border text-foreground font-heading text-sm font-semibold tracking-wide hover:bg-secondary hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.hero.getInTouch}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border border-border flex items-start justify-center p-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden
      >
        <motion.span
          className="w-1 h-2 rounded-full bg-primary"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
