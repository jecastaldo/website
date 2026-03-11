import { Award } from "lucide-react";

const awards = [
  { name: "National Newspaper Award", category: "Business Reporting", year: "2023" },
  { name: "National Newspaper Award", category: "Investigations", year: "2021" },
  { name: "National Magazine Award", category: "Long-form Feature", year: "2020" },
  { name: "National Magazine Award", category: "Business Writing", year: "2018" },
  { name: "Digital Publishing Award", category: "Best Feature Article", year: "2019" },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-12 tracking-tight">
          Awards & Recognition
        </h2>
        <div className="space-y-4">
          {awards.map((award, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-2xl bg-background border border-border"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Award size={16} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-medium text-foreground">{award.name}</h3>
                <p className="text-sm font-light text-muted-foreground">{award.category}</p>
              </div>
              <span className="text-sm font-light text-muted-foreground">{award.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
