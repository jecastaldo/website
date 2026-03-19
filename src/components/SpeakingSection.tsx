const events = [
  { event: "Elevate Conference", year: "2025", topic: "Lights, Camera, AI: Hollywood's Next Act", url: "https://elevatefestival.ca/" },
  { event: "MaRS Mornings", year: "2025", topic: "Infrastructure Up: Canada's Sovereign Compute Conundrum", url: "https://www.marsdd.com" },
];

const SpeakingSection = () => {
  return (
    <div id="speaking" className="flex flex-col gap-10">
      <h2 className="text-[22px] text-foreground font-semibold tracking-tight">Public Speaking</h2>
      {events.map((item, i) => (
        <article key={i} className="flex flex-col gap-1">
          <span className="text-[12px] text-muted-foreground/60 uppercase tracking-widest">{item.year}</span>
          <p className="text-[19px] text-muted-foreground leading-relaxed max-w-[650px]">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground transition-colors underline-offset-2">{item.event}</a>
            {" "}— {item.topic}
          </p>
        </article>
      ))}
    </div>
  );
};

export default SpeakingSection;
