const events = [
  { event: "International Journalism Festival", location: "Perugia, Italy", topic: "Investigating Crypto Fraud" },
  { event: "Canadian Business Conference", location: "Toronto, ON", topic: "The Future of Long-form Journalism" },
  { event: "AI & Society Summit", location: "Montreal, QC", topic: "Covering AI for a General Audience" },
  { event: "University of King's College", location: "Halifax, NS", topic: "Guest Lecture: Business Journalism" },
];

const SpeakingSection = () => {
  return (
    <section id="speaking" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xs tracking-[0.25em] uppercase font-medium text-primary mb-12">
          Public Speaking
        </h2>
        <div className="divide-y divide-border">
          {events.map((item, i) => (
            <div key={i} className="py-5 first:pt-0 last:pb-0 flex items-baseline justify-between gap-4">
              <div>
                <h3 className="text-base font-medium text-foreground mb-0.5">{item.event}</h3>
                <p className="text-sm font-light italic text-muted-foreground">{item.topic}</p>
              </div>
              <span className="text-xs font-light text-muted-foreground whitespace-nowrap">{item.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
