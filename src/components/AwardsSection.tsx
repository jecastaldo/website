const awards = [
  { name: "National Newspaper Award", category: "Business Reporting", year: "2023" },
  { name: "National Newspaper Award", category: "Investigations", year: "2021" },
  { name: "National Magazine Award", category: "Long-form Feature", year: "2020" },
  { name: "National Magazine Award", category: "Business Writing", year: "2018" },
  { name: "Digital Publishing Award", category: "Best Feature Article", year: "2019" },
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
