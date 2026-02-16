import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-muted-foreground text-sm font-body">
        © {new Date().getFullYear()} Dilshad Khaskheli. All rights reserved.
      </p>
      <div className="flex items-center gap-5">
        <a href="https://github.com/dilshadkhaskheli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/in/dilshadkhaskheli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="https://twitter.com/dilshadkhaskheli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
          <Twitter size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
