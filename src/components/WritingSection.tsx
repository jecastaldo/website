import { ArrowUpRight } from "lucide-react";

const articles = [
  { title: "The Race to Build AI That Can Think", publication: "The Globe and Mail", date: "2024", category: "Technology" },
  { title: "Inside Canada's Productivity Crisis", publication: "The Globe and Mail", date: "2024", category: "Economy" },
  { title: "The Rise and Fall of a Crypto Empire", publication: "Canadian Business", date: "2022", category: "Finance" },
  { title: "How Remote Work Rewired the Canadian Economy", publication: "The Globe and Mail", date: "2023", category: "Business" },
  { title: "Why Canada's Tech Talent Keeps Leaving", publication: "The Globe and Mail", date: "2023", category: "Technology" },
  { title: "The Executives Betting on Generative AI", publication: "The Globe and Mail", date: "2024", category: "AI" },
];

const WritingSection = () => {
  return (
    <section id="writing" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xs tracking-[0.25em] uppercase font-medium text-primary mb-12">
          Selected Writing
        </h2>
        <div className="divide-y divide-border">
          {articles.map((article, i) => (
            <div
              key={i}
              className="group py-6 first:pt-0 last:pb-0 flex items-start justify-between gap-4 cursor-pointer"
            >
              <div>
                <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-200 mb-1">
                  {article.title}
                </h3>
                <p className="text-sm font-light text-muted-foreground">
                  {article.publication} · {article.date}
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground/40 group-hover:text-primary transition-all duration-200 mt-1 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
