import { Mic } from "lucide-react";

const events = [
  { event: "International Journalism Festival", location: "Perugia, Italy", topic: "Investigating Crypto Fraud" },
  { event: "Canadian Business Conference", location: "Toronto, ON", topic: "The Future of Long-form Journalism" },
  { event: "AI & Society Summit", location: "Montreal, QC", topic: "Covering AI for a General Audience" },
  { event: "University of King's College", location: "Halifax, NS", topic: "Guest Lecture: Business Journalism" },
];

const SpeakingSection = () => {
  return (
    <section id="speaking" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-12 tracking-tight">
          Public Speaking
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mic size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="text-base font-medium text-foreground mb-1">{item.event}</h3>
                <p className="text-sm font-light italic text-muted-foreground mb-1">{item.topic}</p>
                <p className="text-xs font-light text-muted-foreground">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
