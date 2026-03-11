import { useNavigate } from "react-router-dom";
import { Bot } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="py-10 px-6">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <p className="text-xs font-light text-muted-foreground/60">
          © {new Date().getFullYear()} Joe Castaldo
        </p>
        <button
          onClick={() => navigate("/turing-test")}
          className="text-muted-foreground/20 hover:text-primary transition-colors duration-300"
          aria-label="Easter egg"
        >
          <Bot size={14} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
