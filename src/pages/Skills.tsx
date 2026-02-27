import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Data Science",
    skills: [
      { name: "Python", level: 85 },
      { name: "Pandas", level: 82 },
      { name: "NumPy", level: 80 },
      { name: "Data Analysis (EDA)", level: 85 },
      { name: "Data Visualization", level: 78 },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 78 },
      { name: "Feature Engineering", level: 75 },
      { name: "Model Evaluation", level: 80 },
      { name: "Regression & Classification", level: 82 },
    ],
  },
  {
    category: "Artificial Intelligence",
    skills: [
      { name: "Large Language Models (LLMs)", level: 75 },
      { name: "OpenAI API", level: 78 },
      { name: "Prompt Engineering", level: 80 },
      { name: "AI Integration", level: 76 },
    ],
  },
  {
    category: "Engineering & Tools",
    skills: [
      { name: "FastAPI / REST APIs", level: 78 },
      { name: "Git & GitHub", level: 88 },
      { name: "Firebase", level: 72 },
      { name: "React (for AI UIs)", level: 75 },
    ],
  },
];

const Skills = () => (
  <SectionWrapper>
    <h1 className="font-heading text-4xl font-bold mb-4">
      My <span className="text-gradient">Skills</span>
    </h1>
    <div className="h-1 w-16 bg-primary rounded mb-12" />

    <div className="grid md:grid-cols-2 gap-10">
      {skillGroups.map((group, gi) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: gi * 0.1 }}
          className="glass rounded-xl p-6"
        >
          <h3 className="font-heading text-lg font-semibold text-primary mb-5">
            {group.category}
          </h3>
          {group.skills.map((skill, si) => (
            <SkillBar key={skill.name} {...skill} delay={gi * 0.1 + si * 0.08} />
          ))}
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;
