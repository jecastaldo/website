import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { menuOpen } = useMobileMenu();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || menuOpen) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105 active:scale-100"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-7 h-7" />
    </button>
  );
};

export default ScrollToTop;
