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
    <div id="writing" className="flex flex-col gap-10">
      <h2 className="text-[22px] text-foreground font-semibold tracking-tight">Selected Writing</h2>
      {articles.map((article, i) => (
        <article key={i} className="flex flex-col gap-1">
          <span className="text-[12px] text-muted-foreground/60 uppercase tracking-widest">
            {article.category} · {article.date}
          </span>
          <p className="text-[19px] text-muted-foreground leading-relaxed max-w-[650px]">
            <span className="font-semibold text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground transition-colors underline-offset-2 cursor-pointer">
              {article.title}
            </span>
            {" "}— {article.publication}
          </p>
        </article>
      ))}
    </div>
  );
};

export default WritingSection;
