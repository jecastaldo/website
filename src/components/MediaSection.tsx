const appearances = [
  {
    title: "Trust No One: The Hunt for the Crypto King",
    type: "Netflix Documentary",
    description: "Featured journalist in the Netflix documentary investigating the mysterious death of QuadrigaCX founder Gerald Cotten and the disappearance of $250 million in cryptocurrency.",
  },
];

const podcasts = [
  {
    title: "Is AI making us dumb?",
    show: "The Decibel",
    date: "December 2025",
    description: "How generative AI is impacting schools and what recent studies tell us about its effect on critical thinking skills.",
    url: "https://podcasts.apple.com/ca/podcast/is-ai-making-us-dumb/id1565410296?i=1000743295260",
  },
  {
    title: "If AI is a bubble, how will it pop?",
    show: "The Decibel",
    date: "November 2025",
    description: "Why markets are twitchy about AI right now and what's behind investors' concerns about a potential financial bubble.",
    url: "https://podcasts.apple.com/ca/podcast/if-ai-is-a-bubble-how-will-it-pop/id1565410296?i=1000738500275",
  },
  {
    title: "The first wave of AI layoffs",
    show: "The Decibel",
    date: "September 2025",
    description: "What AI in the workplace means for the job market, mass layoffs, and the future of work in Canada.",
    url: "https://podcasts.apple.com/ca/podcast/the-first-wave-of-ai-layoffs/id1565410296?i=1000724712687",
  },
  {
    title: "AI and digital sovereignty in the 'elbows up' era",
    show: "The Decibel",
    date: "October 2025",
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
    date: "April 2024",
    description: "Why Canada's AI computing power gap matters and what can be done to prevent a brain drain of AI talent.",
    url: "https://podcasts.apple.com/ca/podcast/canadas-uncertain-ai-future/id1565410296?i=1000651285834",
  },
];

const MediaSection = () => {
  return (
    <div id="media" className="flex flex-col gap-10">
      <h2 className="text-[22px] text-foreground font-semibold tracking-tight">Podcasts & Media</h2>

      {/* Featured documentary */}
      {appearances.map((item, i) => (
        <article key={i} className="flex flex-col gap-1">
          <span className="text-[12px] text-muted-foreground/60 uppercase tracking-widest">
            {item.type}
          </span>
          <p className="text-[19px] text-muted-foreground leading-relaxed max-w-[650px]">
            <span className="font-semibold text-foreground">{item.title}</span>
            {" "}— {item.description}
          </p>
        </article>
      ))}

      {/* Podcast episodes */}
      {podcasts.map((item, i) => (
        <article key={i} className="flex flex-col gap-1">
          <span className="text-[12px] text-muted-foreground/60 uppercase tracking-widest">
            {item.date}
          </span>
          <p className="text-[19px] text-muted-foreground leading-relaxed max-w-[650px]">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground transition-colors underline-offset-2"
            >
              {item.title}
            </a>
            {" "}— {item.description}
            <span className="text-muted-foreground/40"> · {item.show}</span>
          </p>
        </article>
      ))}
    </div>
  );
};

export default MediaSection;
