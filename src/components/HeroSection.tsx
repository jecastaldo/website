import profilePhoto from "@/assets/profile-photo.png";
import { Linkedin, Twitter, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-40 pb-28 px-6 relative">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src={profilePhoto}
          alt="Joe Castaldo"
          className="w-28 h-28 rounded-full object-cover mx-auto mb-10 shadow-md ring-4 ring-background"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4 leading-[1.1]">
          Joe Castaldo
        </h1>
        <div className="w-10 h-[3px] bg-primary mx-auto mb-6 rounded-full" />
        <p className="text-base md:text-lg font-normal text-muted-foreground mb-3 tracking-wide">
          Business Reporter · <span className="italic">The Globe and Mail</span>
        </p>
        <p className="text-sm font-light text-muted-foreground max-w-xl mx-auto leading-relaxed mb-6">
          Award-winning writer crafting long-form, research-driven narratives on business, technology, and innovation.
        </p>
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://x.com/joecastaldo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/50 hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Twitter / X"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://linkedin.com/in/joecastaldo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/50 hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
      <motion.button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/40 hover:text-primary transition-colors duration-200"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
