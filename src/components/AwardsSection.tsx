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
    <div id="awards" className="flex flex-col gap-10">
      <h2 className="text-[22px] text-foreground font-semibold tracking-tight">Awards & Recognition</h2>
      {awards.map((award, i) => (
        <article key={i} className="flex flex-col gap-1">
          <span className="text-[12px] text-muted-foreground/60 uppercase tracking-widest">{award.year}</span>
          <p className="text-[19px] text-muted-foreground leading-relaxed max-w-[650px]">
            <span className="font-semibold text-foreground">{award.name}</span>
            {" "}— {award.category}
          </p>
        </article>
      ))}
    </div>
  );
};

export default AwardsSection;
