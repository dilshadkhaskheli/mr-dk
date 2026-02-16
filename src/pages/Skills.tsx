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
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "OpenAI API", level: 70 },
      { name: "Python Basics", level: 65 },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "REST APIs", level: 85 },
      { name: "Firebase", level: 72 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1.5">
      <span className="font-body text-sm text-foreground">{name}</span>
      <span className="font-body text-xs text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: "var(--gradient-primary)" }}
      />
    </div>
  </div>
);

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
