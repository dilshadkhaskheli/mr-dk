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
    title: "Data Science Portfolio",
    description:
      "A personal portfolio showcasing data science workflows, AI experiments, and end-to-end projects with interactive visualizations.",
    tags: ["Python", "Pandas", "Matplotlib", "React"],
    link: "#",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Predictive Analytics Platform",
    description:
      "A data-driven application that performs exploratory data analysis, feature engineering, and predictive modeling on real-world datasets.",
    tags: ["Python", "Scikit-learn", "XGBoost", "FastAPI"],
    link: "#",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "AI Chatbot & LLM System",
    description:
      "An intelligent conversational AI system with contextual memory, prompt optimization, and real-time responses using large language models.",
    tags: ["LLMs", "OpenAI API", "Node.js", "React"],
    link: "#",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    title: "Intelligent Task Automation",
    description:
      "A smart productivity tool combining data insights and AI to automate tasks, generate summaries, and prioritize workflows.",
    tags: ["Machine Learning", "AI Automation", "Firebase", "APIs"],
    link: "#",
    color: "from-amber-500/20 to-amber-500/5",
  },
];
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
