import { useState, useEffect } from "react";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

const navItems = [
  { label: "Writing", id: "writing" },
  { label: "Media", id: "media" },
  { label: "Speaking", id: "speaking" },
  { label: "Awards", id: "awards" },
  { label: "Contact", id: "contact", secondary: true },
];

const HeroSection = () => {
  const { menuOpen, setMenuOpen } = useMobileMenu();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionIds = navItems.map((item) => item.id);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-30% 0px -50% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    const onScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection(null);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="w-full p-6 md:p-8 pl-[22px] md:pl-[30px]">
      <div>
        <button
          onClick={() => scrollTo("about")}
          className="font-display italic text-5xl md:text-[5.5rem] leading-none text-foreground hover:opacity-80 transition-opacity font-bold"
          style={{ letterSpacing: '-0.02em' }}
        >
          <span style={{ letterSpacing: '-0.06em' }}>Joe</span>{" "}
          <span>C<span style={{ marginLeft: '-0.04em' }}>as</span>t<span style={{ marginLeft: '-0.03em' }}>a</span>ldo</span>
        </button>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`fixed z-[60] md:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10 transition-all duration-300 ${menuOpen ? "top-4 right-4" : "top-6 right-6 rounded-full bg-background/50"}`}
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
          <button onClick={() => scrollTo("contact")} className="hover:text-foreground hover:underline underline-offset-8 decoration-2 decoration-[hsl(210,100%,56%)] transition-all">Contact</button>
          <a href="https://www.linkedin.com/in/joecastaldo/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline underline-offset-8 decoration-2 decoration-[hsl(210,100%,56%)] transition-all">LinkedIn</a>
        </div>
      </div>

      <nav className="fixed top-6 right-6 md:top-8 md:right-8 z-50 hidden md:flex flex-col items-end gap-4 text-[18px] text-foreground font-medium">
        {navItems.filter(i => !i.secondary).map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="hover:underline underline-offset-8 decoration-2 decoration-[hsl(210,100%,56%)] transition-all duration-300 origin-right"
              style={{
                fontWeight: isActive ? 700 : 500,
                transform: isActive ? "scale(1.12)" : "scale(1)",
                transformOrigin: "right center",
              }}
            >
              {item.label}
            </button>
          );
        })}
        <div className="mt-3 flex flex-col items-end gap-4 text-muted-foreground">
          {(() => {
            const isActive = activeSection === "contact";
            return (
              <button
                onClick={() => scrollTo("contact")}
                className="hover:text-foreground hover:underline underline-offset-8 decoration-2 decoration-[hsl(210,100%,56%)] transition-all duration-300"
                style={{
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "hsl(var(--foreground))" : undefined,
                  transform: isActive ? "scale(1.12)" : "scale(1)",
                  transformOrigin: "right center",
                }}
              >
                Contact
              </button>
            );
          })()}
          <a href="https://www.linkedin.com/in/joecastaldo/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline underline-offset-8 decoration-2 decoration-[hsl(210,100%,56%)] transition-all">LinkedIn</a>
        </div>
      </nav>
    </header>
  );
};

export default HeroSection;
