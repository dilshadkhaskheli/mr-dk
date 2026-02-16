import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Code, Brain, Rocket } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const highlights = [
  { icon: Code, title: "Clean Code", desc: "Writing maintainable, scalable code with modern best practices." },
  { icon: Brain, title: "AI Integration", desc: "Leveraging AI technologies to build smarter applications." },
  { icon: Rocket, title: "Fast Delivery", desc: "Shipping pixel-perfect products from idea to production." },
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
          I am a passionate Full-Stack Web Developer with experience in building responsive and interactive websites.
          I love coding, learning AI technologies, and creating solutions that help people. I enjoy solving problems
          and continuously improving my skills.
        </p>
        <p className="text-muted-foreground leading-relaxed font-body">
          Whether it's crafting a sleek frontend, engineering a robust API, or exploring the cutting edge of
          artificial intelligence, I thrive on turning complex challenges into elegant, user-friendly experiences.
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
