import { useMobileMenu } from "@/contexts/MobileMenuContext";

const navItems = [
  { label: "Writing", id: "#writing" },
  { label: "Media", id: "#media" },
  { label: "Speaking", id: "#speaking" },
  { label: "Awards", id: "#awards" },
];

const HeroSection = () => {
  const { menuOpen, setMenuOpen } = useMobileMenu();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="w-full p-6 md:p-8 pl-8 md:pl-10">
      <div>
        <button
          onClick={() => scrollTo("#about")}
          className="font-display italic text-5xl md:text-[5.5rem] leading-none text-foreground hover:opacity-80 transition-opacity font-bold"
          style={{ letterSpacing: '-0.02em' }}
        >
          Joe Castaldo
        </button>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-6 right-6 z-[60] md:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10 rounded-full bg-background/50"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.75px]" : ""}`} />
        <span className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.75px]" : ""}`} />
      </button>

      <div
        className={`fixed inset-0 z-50 bg-background flex flex-col items-end justify-center pr-10 gap-8 text-[24px] font-medium transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <button key={item.label} onClick={() => scrollTo(item.id)} className="text-foreground hover:underline underline-offset-8 decoration-2 decoration-[hsl(210,100%,56%)] transition-all">
            {item.label}
          </button>
        ))}
        <div className="mt-4 flex flex-col items-end gap-8 text-muted-foreground">
          <button onClick={() => scrollTo("#contact")} className="hover:text-foreground hover:underline underline-offset-8 decoration-2 decoration-[hsl(210,100%,56%)] transition-all">Contact</button>
          <a href="https://www.linkedin.com/in/joecastaldo/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline underline-offset-8 decoration-2 decoration-[hsl(210,100%,56%)] transition-all">LinkedIn</a>
        </div>
      </div>

      <nav className="fixed top-6 right-6 md:top-8 md:right-8 z-50 hidden md:flex flex-col items-end gap-4 text-[18px] text-foreground font-medium">
        {navItems.map((item) => (
          <button key={item.label} onClick={() => scrollTo(item.id)} className="hover:underline underline-offset-8 decoration-2 decoration-[hsl(210,100%,56%)] transition-all">
            {item.label}
          </button>
        ))}
        <div className="mt-3 flex flex-col items-end gap-4 text-muted-foreground">
          <button onClick={() => scrollTo("#contact")} className="hover:text-foreground hover:underline underline-offset-8 decoration-2 decoration-[hsl(210,100%,56%)] transition-all">Contact</button>
          <a href="https://www.linkedin.com/in/joecastaldo/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline underline-offset-8 decoration-2 decoration-[hsl(210,100%,56%)] transition-all">LinkedIn</a>
        </div>
      </nav>
    </header>
  );
};

export default HeroSection;
