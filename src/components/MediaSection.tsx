import { Play } from "lucide-react";

const appearances = [
  {
    title: "Trust No One: The Hunt for the Crypto King",
    type: "Netflix Documentary",
    description: "Featured journalist in the Netflix documentary investigating the mysterious death of QuadrigaCX founder Gerald Cotten and the disappearance of $250 million in cryptocurrency.",
    highlight: true,
  },
  {
    title: "The Future of AI in Canadian Business",
    type: "Podcast",
    description: "Discussion on how artificial intelligence is reshaping Canadian industries and the workforce.",
  },
  {
    title: "Investigating Corporate Canada",
    type: "Panel Discussion",
    description: "Exploring the challenges and rewards of long-form business journalism in the digital age.",
  },
  {
    title: "Crypto, Fraud, and the Stories We Tell",
    type: "Conference Talk",
    description: "How narrative journalism uncovers financial fraud and holds power to account.",
  },
];

const MediaSection = () => {
  return (
    <section id="media" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-12 tracking-tight">
          Podcasts & Media
        </h2>
        <div className="space-y-6">
          {appearances.map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border transition-shadow ${
                item.highlight
                  ? "border-primary/30 bg-primary/5 shadow-md"
                  : "border-border bg-background hover:shadow-md"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Play size={16} className="text-primary ml-0.5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-medium text-foreground mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
