import { Linkedin, Twitter } from "lucide-react";

const HeroSection = () => {
  return (
    <header className="w-full p-6 md:p-8 flex justify-between items-start">
      {/* Name */}
      <div>
        <button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="font-display italic text-5xl md:text-[5.5rem] leading-none tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          Joe Castaldo
        </button>
      </div>

      {/* Nav links */}
      <nav className="pointer-events-auto flex flex-col items-end gap-1 text-[13px] text-muted-foreground">
        <div className="flex gap-4 mb-3 text-foreground">
          <button
            onClick={() => document.querySelector("#writing")?.scrollIntoView({ behavior: "smooth" })}
            className="hover:underline underline-offset-4"
          >
            Writing
          </button>
          <button
            onClick={() => document.querySelector("#media")?.scrollIntoView({ behavior: "smooth" })}
            className="hover:underline underline-offset-4"
          >
            Media
          </button>
        </div>
        <a
          href="https://x.com/Joe_Castaldo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com/in/joecastaldo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
};

export default HeroSection;
