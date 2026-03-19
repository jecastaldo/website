import { Construction } from "lucide-react";
import { useGeocities } from "@/contexts/GeocitiesContext";

const Footer = () => {
  const { toggleGeocities } = useGeocities();

  return (
    <footer className="py-20 pl-8 md:pl-10 pr-6">
      <div className="flex items-center justify-between">
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
