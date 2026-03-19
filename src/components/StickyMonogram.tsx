import { useState, useEffect } from "react";

const StickyMonogram = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed top-6 left-6 md:top-8 md:left-8 z-50 w-10 h-10 rounded-full bg-background border-2 border-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
      aria-label="Back to top"
    >
      <span className="font-display italic text-foreground text-sm font-bold leading-none" style={{ letterSpacing: '-0.02em' }}>
        JC
      </span>
    </button>
  );
};

export default StickyMonogram;
