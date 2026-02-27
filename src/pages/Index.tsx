import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.png";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/70" />

        <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">
              Data Scientist & AI Enthusiast
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Dilshad Khaskheli</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg mb-8">
              I’m a Data Scientist who transforms complex data into actionable insights using machine learning and AI. I build data-driven solutions that help businesses and people make smarter decisions. Let’s create something powerful together.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="font-body">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-body border-primary/30 text-primary hover:bg-primary/10">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex items-center gap-5 mt-8 justify-center md:justify-start">
              <a href="https://github.com/dilshadkhaskheli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
              <a href="https://linkedin.com/in/dilshadkhaskheli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="https://twitter.com/dilshadkhaskheli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden glow-border animate-pulse-glow">
              <img
                src={profileImg}
                alt="Dilshad Khaskheli"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
