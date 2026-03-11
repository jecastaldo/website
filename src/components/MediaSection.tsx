import { Play, Film } from "lucide-react";

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
    <section id="media" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xs tracking-[0.25em] uppercase font-medium text-primary mb-12">
          Podcasts & Media
        </h2>

        {/* Featured item */}
        {appearances.filter(a => a.highlight).map((item, i) => (
          <div
            key={i}
            className="mb-8 p-8 rounded-2xl border border-primary/15 bg-primary/[0.03] relative overflow-hidden"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Film size={20} className="text-primary" />
              </div>
              <div>
                <span className="text-[10px] font-medium text-primary uppercase tracking-[0.2em]">
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

        {/* Other items */}
        <div className="divide-y divide-border">
          {appearances.filter(a => !a.highlight).map((item, i) => (
            <div key={i} className="py-5 first:pt-0 flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5">
                <Play size={12} className="text-muted-foreground ml-0.5" />
              </div>
              <div>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.15em]">
                  {item.type}
                </span>
                <h3 className="text-sm font-medium text-foreground mt-0.5">
                  {item.title}
                </h3>
                <p className="text-xs font-light text-muted-foreground leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
