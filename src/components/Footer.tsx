import { useNavigate } from "react-router-dom";
import { Bot } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="py-12 px-6 border-t border-border bg-card">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-light text-muted-foreground">
          © {new Date().getFullYear()} Joe Castaldo. All rights reserved.
        </p>
        <button
          onClick={() => navigate("/turing-test")}
          className="text-muted-foreground/30 hover:text-primary transition-colors"
          aria-label="Easter egg"
        >
          <Bot size={16} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
