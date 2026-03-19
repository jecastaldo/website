import { Construction } from "lucide-react";
import { useGeocities } from "@/contexts/GeocitiesContext";

const Footer = () => {
  const { toggleGeocities } = useGeocities();

  return (
    <footer className="py-20 px-6">
      <div className="max-w-[800px] mx-auto flex items-center justify-between">
        <p className="text-[12px] text-muted-foreground/40">
          © {new Date().getFullYear()} Joe Castaldo
        </p>
        <button
          onClick={toggleGeocities}
          className="text-muted-foreground/20 hover:text-foreground transition-colors duration-300"
          aria-label="Easter egg"
        >
          <Construction size={14} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
