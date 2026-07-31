import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import cs2toolsPreview from "@/assets/projects/cs2tools.jpg";
import etefitPreview from "@/assets/projects/etefit.jpg";

type StatusKey = "fullyReleased" | "released" | "construction" | "beta" | "discontinued";

const statusDot: Record<StatusKey, string> = {
  fullyReleased: "bg-green-400",
  released: "bg-sky-400",
  construction: "bg-orange-400",
  beta: "bg-purple-400",
  discontinued: "bg-neutral-500",
};

const ProjectsSection = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 260, damping: 30, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 260, damping: 30, mass: 0.4 });

  const projects: {
    title: string;
    description: string;
    url: string;
    status: StatusKey;
    year: string;
    preview: string;
  }[] = [
    {
      title: "CS2 Tools",
      description: t.projects.cs2tools,
      url: "https://cs2tools.netlify.app",
      status: "released",
      year: "2025",
      preview: cs2toolsPreview,
    },
    {
      title: "EteFit",
      description: t.projects.etefit,
      url: "https://etefit.netlify.app",
      status: "construction",
      year: "2026",
      preview: etefitPreview,
    },
  ];

  const activePreview = projects.find((p) => p.title === hovered)?.preview;

  const handleMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
  };

  return (
    <section id="projects" className="py-32 md:py-40 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 md:mb-28">
          <div className="md:col-span-4 flex items-start gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground tabular-nums pt-1">(02)</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground pt-1">
              {t.projects.label}
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 font-heading text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-[0.95]"
          >
            {t.projects.title.replace(/\.$/, "")}
            <span className="text-primary">.</span>
          </motion.h2>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setHovered(null)}
          className="relative border-t border-border"
        >
          {/* Cursor-following preview */}
          <AnimatePresence>
            {activePreview && (
              <motion.div
                key={hovered}
                aria-hidden
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                style={{ x, y }}
                className="pointer-events-none absolute top-0 left-0 z-20 hidden md:block w-[340px] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="overflow-hidden border border-border bg-secondary shadow-2xl">
                  <img
                    src={activePreview}
                    alt=""
                    className="w-full h-[200px] object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — ${project.description}`}
              onMouseEnter={() => setHovered(project.title)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-border hover:bg-secondary/40 transition-colors duration-500 px-2 -mx-2 items-baseline"
            >
              <span className="md:col-span-1 text-xs uppercase tracking-[0.18em] text-muted-foreground tabular-nums">
                0{i + 1}
              </span>
              <h3 className="md:col-span-5 font-heading text-3xl md:text-5xl font-medium tracking-tighter group-hover:text-primary transition-colors duration-500 flex items-center gap-3">
                {project.title}
                <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </h3>
              <p className="md:col-span-3 text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="md:col-span-3 flex md:justify-end items-center gap-6">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground tabular-nums">
                  {project.year}
                </span>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span className={`w-1.5 h-1.5 rounded-full ${statusDot[project.status]}`} />
                  {t.projects.status[project.status]}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
