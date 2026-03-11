import { ArrowUpRight } from "lucide-react";

const experience = [
  {
    role: "Business Reporter",
    org: "The Globe and Mail",
    period: "Oct 2018 – Present",
    description: "Reporter for Canada's national newspaper, producing long-form features, investigations, breaking news, and analysis for a general, executive, and investor readership.",
    highlights: [
      "Drove 300+ annual digital subscriptions with 975K+ pageviews through compelling long-form narratives",
      "Served as the Globe's de facto AI beat reporter, covering corporate adoption, policy, economic impacts, and startup innovation",
      "Major investigations included the Quadriga crypto exchange collapse, EncroChat encrypted messaging saga, and Bay Street lending scandals",
      "Contributed across formats including features, news analysis, podcast (The Decibel), and the Globe's business newsletter",
    ],
  },
  {
    role: "Associate Editor, Business",
    org: "Maclean's",
    period: "Mar 2017 – Jun 2018",
    description: "Business writer for Canada's leading newsmagazine, covering macroeconomics, real estate and general business for a national readership.",
    highlights: [
      "Authored in-depth features translating complex economic and industry trends into clear, engaging narratives",
      "Identified and reported on emerging stories ahead of mainstream coverage, including an investigative feature on art fraud",
    ],
  },
  {
    role: "Managing Editor (Features) / Senior Writer / Staff Writer",
    org: "Canadian Business",
    period: "Jan 2007 – Mar 2017",
    description: "Rose from intern to managing editor over a decade at Canada's premier business magazine, producing award-winning features and leading freelance writers.",
    highlights: [
      "Assigned and edited long-form features, managed a roster of freelance writers",
      "Coached writers on structure, clarity, tone, and argument—sharpening drafts and elevating quality",
      "Nominated for multiple National Magazine Awards, including pieces on Target Canada and online gambling",
    ],
  },
];

const WritingSection = () => {
  return (
    <section id="writing" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xs tracking-[0.25em] uppercase font-medium text-primary mb-12">
          Experience
        </h2>
        <div className="space-y-10">
          {experience.map((item, i) => (
            <div key={i} className="group">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-base font-medium text-foreground mb-0.5">
                    {item.role}
                  </h3>
                  <p className="text-sm font-light italic text-muted-foreground">
                    {item.org}
                  </p>
                </div>
                <span className="text-xs font-light text-muted-foreground whitespace-nowrap tabular-nums mt-1">
                  {item.period}
                </span>
              </div>
              <p className="text-sm font-light text-foreground/80 leading-relaxed mb-3">
                {item.description}
              </p>
              <ul className="space-y-1.5">
                {item.highlights.map((h, j) => (
                  <li key={j} className="text-xs font-light text-muted-foreground leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-primary before:font-bold">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
