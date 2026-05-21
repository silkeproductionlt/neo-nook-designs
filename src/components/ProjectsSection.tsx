import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

type StatusKey = "fullyReleased" | "released" | "construction" | "beta" | "discontinued";

const statusStyles: Record<StatusKey, string> = {
  fullyReleased: "bg-green-500/10 text-green-600 dark:text-green-400 ring-1 ring-green-500/20",
  released: "bg-blue-500/10 text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20",
  construction: "bg-orange-500/10 text-orange-600 dark:text-orange-400 ring-1 ring-orange-500/20",
  beta: "bg-purple-500/10 text-purple-600 dark:text-purple-400 ring-1 ring-purple-500/20",
  discontinued: "bg-gray-500/10 text-gray-600 dark:text-gray-400 ring-1 ring-gray-500/20",
};

const statusDot: Record<StatusKey, string> = {
  fullyReleased: "bg-green-500",
  released: "bg-blue-500",
  construction: "bg-orange-500",
  beta: "bg-purple-500",
  discontinued: "bg-gray-500",
};

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects: { title: string; description: string; url: string; status: StatusKey }[] = [
    {
      title: "CS2 Tools",
      description: t.projects.cs2tools,
      url: "https://cs2tools.netlify.app",
      status: "released",
    },
    {
      title: "EteFit",
      description: t.projects.etefit,
      url: "https://etefit.netlify.app",
      status: "construction",
    },
  ];

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">{t.projects.label}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            {t.projects.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl p-8 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-5">
                <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${statusStyles[project.status]}`}>
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
