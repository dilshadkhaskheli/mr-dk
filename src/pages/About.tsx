import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Code, Brain, Rocket } from "lucide-react";
import profileImg from "@/assets/profile.png";
const highlights = [
  {
    icon: Brain,
    title: "Machine Learning & AI",
    desc: "Designing intelligent systems using machine learning and deep learning techniques."
  },
  {
    icon: Code,
    title: "AI-Powered Development",
    desc: "Integrating AI models and APIs into real-world applications."
  },
  {
    icon: Rocket,
    title: "From Idea to Prototype",
    desc: "Turning AI ideas into working prototypes and proof-of-concepts."
  },
];

const About = () => (
  <SectionWrapper>
    <h1 className="font-heading text-4xl font-bold mb-4">
      About <span className="text-gradient">Me</span>
    </h1>
    <div className="h-1 w-16 bg-primary rounded mb-12" />

    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-48 h-48 rounded-2xl overflow-hidden glow-border flex-shrink-0"
      >
        <img src={profileImg} alt="Dilshad Khaskheli" className="w-full h-full object-cover" />
      </motion.div>

      <div>
        <p className="text-muted-foreground leading-relaxed text-lg font-body mb-4">
         I’m a Data Scientist who transforms complex data into actionable insights using machine learning and AI. I build data-driven solutions that help businesses and people make smarter decisions. Let’s create something powerful together.
        </p>
        <p className="text-muted-foreground leading-relaxed font-body">
         I turn complex problems into intuitive, AI-driven solutions by exploring and applying cutting-edge artificial intelligence.
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {highlights.map((h, i) => (
        <motion.div
          key={h.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="glass rounded-xl p-6 hover-lift"
        >
          <h.icon className="text-primary mb-4" size={28} />
          <h3 className="font-heading text-lg font-semibold mb-2">{h.title}</h3>
          <p className="text-muted-foreground text-sm font-body">{h.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default About;
