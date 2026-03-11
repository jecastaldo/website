import { Play, Film, ExternalLink } from "lucide-react";

const appearances = [
  {
    title: "Trust No One: The Hunt for the Crypto King",
    type: "Netflix Documentary",
    description: "Featured journalist in the Netflix documentary investigating the mysterious death of QuadrigaCX founder Gerald Cotten and the disappearance of $250 million in cryptocurrency.",
    highlight: true,
  },
];

const podcasts = [
  {
    title: "Is AI making us dumb?",
    show: "The Decibel",
    date: "Dec 2025",
    description: "How generative AI is impacting schools and what recent studies tell us about its effect on critical thinking skills.",
    url: "https://podcasts.apple.com/ca/podcast/is-ai-making-us-dumb/id1565410296?i=1000743295260",
  },
  {
    title: "If AI is a bubble, how will it pop?",
    show: "The Decibel",
    date: "Nov 2025",
    description: "Why markets are twitchy about AI right now and what's behind investors' concerns about a potential financial bubble.",
    url: "https://podcasts.apple.com/ca/podcast/if-ai-is-a-bubble-how-will-it-pop/id1565410296?i=1000738500275",
  },
  {
    title: "The first wave of AI layoffs",
    show: "The Decibel",
    date: "Sep 2025",
    description: "What AI in the workplace means for the job market, mass layoffs, and the future of work in Canada.",
    url: "https://podcasts.apple.com/ca/podcast/the-first-wave-of-ai-layoffs/id1565410296?i=1000724712687",
  },
  {
    title: "AI and digital sovereignty in the 'elbows up' era",
    show: "The Decibel",
    date: "Oct 2025",
    description: "Why building sovereign digital companies and AI infrastructure is not as straightforward as it might seem.",
    url: "https://podcasts.apple.com/ca/podcast/ai-and-digital-sovereignty-in-the-elbows-up-era/id1565410296?i=1000732626163",
  },
  {
    title: "Alberta's AI push could come with a big energy price tag",
    show: "The Decibel",
    date: "May 2025",
    description: "Why Alberta is trying to become the next big data centre hub and what that means for the province's electricity needs and emissions.",
    url: "https://podcasts.apple.com/ca/podcast/albertas-ai-push-could-come-with-a-big-energy-price-tag/id1565410296?i=1000709243388",
  },
  {
    title: "Canada's uncertain AI future",
    show: "The Decibel",
    date: "Apr 2024",
    description: "Why Canada's AI computing power gap matters and what can be done to prevent a brain drain of AI talent.",
    url: "https://podcasts.apple.com/ca/podcast/canadas-uncertain-ai-future/id1565410296?i=1000651285834",
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
        {appearances.map((item, i) => (
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

        {/* Podcast items */}
        <div className="divide-y divide-border">
          {podcasts.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-5 first:pt-0 flex items-start gap-4 group block"
            >
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                <Play size={12} className="text-muted-foreground ml-0.5 group-hover:text-primary transition-colors" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.15em]">
                    {item.show}
                  </span>
                  <span className="text-[10px] text-muted-foreground/50">·</span>
                  <span className="text-[10px] font-light text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-foreground mt-0.5 group-hover:text-primary transition-colors flex items-center gap-1.5">
                  {item.title}
                  <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs font-light text-muted-foreground leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
