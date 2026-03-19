const HeroSection = () => {
  return (
    <header className="w-full p-6 md:p-8 pl-8 md:pl-10">
      {/* Name */}
      <div>
        <button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="font-display italic text-5xl md:text-[5.5rem] leading-none text-foreground hover:opacity-80 transition-opacity font-bold"
          style={{ letterSpacing: '-0.02em' }}
        >
          Joe Castaldo
        </button>
      </div>

      {/* Nav links */}
      <nav className="fixed top-6 right-6 md:top-8 md:right-8 z-50 flex flex-col items-end gap-4 text-[18px] text-foreground font-medium">
        {[
          { label: "Writing", id: "#writing" },
          { label: "Media", id: "#media" },
          { label: "Speaking", id: "#speaking" },
          { label: "Awards", id: "#awards" },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => document.querySelector(item.id)?.scrollIntoView({ behavior: "smooth" })}
            className="hover:underline underline-offset-8 decoration-2 decoration-[hsl(210,100%,56%)] transition-all"
          >
            {item.label}
          </button>
        ))}
        <div className="mt-3 flex flex-col items-end gap-4 text-muted-foreground">
          <a
            href="https://x.com/Joe_Castaldo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground hover:underline underline-offset-8 decoration-2 decoration-[hsl(210,100%,56%)] transition-all"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/joecastaldo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground hover:underline underline-offset-8 decoration-2 decoration-[hsl(210,100%,56%)] transition-all"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeroSection;
