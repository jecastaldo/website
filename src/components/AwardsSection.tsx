const awards = [
  { name: "SABEW Canada, Finalist", category: "Feature Writing (Longform) — EncroChat coverage", year: "2024" },
  { name: "National Newspaper Awards, Finalist", category: "Business Reporting — AI coverage", year: "2023" },
  { name: "National Media Awards Foundation, Gold", category: "Science and Technology Storytelling", year: "2023" },
  { name: "SABEW Canada, Silver", category: "Profile Writing — Substack coverage", year: "2022" },
  { name: "National Newspaper Awards, Winner", category: "Business (team) — Bridging Finance coverage", year: "2021" },
  { name: "National Newspaper Awards, Finalist", category: "Feature Writing — MindGeek coverage", year: "2021" },
  { name: "SABEW Canada, Silver", category: "Feature Writing (Short-form) — Toronto real estate coverage", year: "2018" },
  { name: "National Magazine Awards, Winner", category: "Investigations — Target Canada coverage", year: "2017" },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xs tracking-[0.25em] uppercase font-medium text-primary mb-12">
          Awards & Recognition
        </h2>
        <div className="divide-y divide-border">
          {awards.map((award, i) => (
            <div key={i} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-medium text-foreground">{award.name}</h3>
                <p className="text-xs font-light text-muted-foreground mt-0.5">{award.category}</p>
              </div>
              <span className="text-xs font-light text-muted-foreground tabular-nums">{award.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
