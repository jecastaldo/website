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
      className="fixed top-6 left-6 md:top-8 md:left-8 z-50 rounded-full bg-background border border-foreground/60 flex items-center justify-center hover:opacity-80 transition-opacity" style={{ width: 60, height: 60 }}
      aria-label="Back to top"
    >
      <span className="font-display italic text-foreground leading-none -mt-1.5 ml-0.5" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em', fontWeight: 900 }}>
        jc
      </span>
    </button>
  );
};

export default StickyMonogram;
