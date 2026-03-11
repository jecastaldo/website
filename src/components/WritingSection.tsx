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
    <section id="writing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-12 tracking-tight">
          Selected Writing
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow cursor-pointer"
            >
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {article.category}
              </span>
              <h3 className="text-lg font-medium text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm font-light text-muted-foreground">
                {article.publication} · {article.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
