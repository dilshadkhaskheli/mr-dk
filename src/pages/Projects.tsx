import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal multipage website showcasing my skills, projects, and experience with smooth animations and responsive design.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "E-commerce App",
    description:
      "Fully functional e-commerce platform with product catalog, search, cart, and checkout flow built with modern web technologies.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "AI Chatbot",
    description:
      "An intelligent AI assistant that answers user queries using the OpenAI API with conversation memory and streaming responses.",
    tags: ["OpenAI API", "Node.js", "React"],
    link: "#",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    title: "Todo App",
    description:
      "A responsive task manager with user authentication, CRUD operations, and real-time updates for managing daily tasks.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "#",
    color: "from-amber-500/20 to-amber-500/5",
  },
];

const Projects = () => (
  <SectionWrapper>
    <h1 className="font-heading text-4xl font-bold mb-4">
      My <span className="text-gradient">Projects</span>
    </h1>
    <div className="h-1 w-16 bg-primary rounded mb-12" />

    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className="glass rounded-xl overflow-hidden hover-lift group"
        >
          {/* Gradient header */}
          <div className={`h-36 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
            <span className="font-heading text-2xl font-bold text-foreground/80 group-hover:text-foreground transition-colors">
              {project.title}
            </span>
          </div>

          <div className="p-6">
            <p className="text-muted-foreground text-sm font-body mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-body px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary/30 text-primary hover:bg-primary/10 font-body"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
