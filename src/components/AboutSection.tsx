const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xs tracking-[0.25em] uppercase font-medium text-primary mb-10">
          About
        </h2>
        <div className="space-y-5 text-base font-light text-foreground/85 leading-[1.85]">
          <p>
            Award-winning writer and editor with nearly 20 years of experience crafting long-form, research-driven narratives on business, technology, policy, and innovation. Proven ability to identify market-shaping trends and ideas, interview senior leaders, synthesize complex perspectives, and produce compelling written content.
          </p>
          <p>
            Deep expertise in artificial intelligence and Canadian business and economic trends. Recognized with multiple{" "}
            <span className="font-medium text-foreground">National Newspaper Awards</span> and{" "}
            <span className="font-medium text-foreground">National Magazine Awards</span>. AI coverage nominated for a National Newspaper Award.
          </p>
          <p>
            Featured in the Netflix documentary{" "}
            <span className="font-medium text-foreground italic">Trust No One: The Hunt for the Crypto King</span>. Currently a business reporter at{" "}
            <span className="font-medium text-foreground italic">The Globe and Mail</span>, producing long-form features, investigations, breaking news, and analysis.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {["Long-form Feature Writing", "Interviewing", "Research & Data Synthesis", "AI & Technology Trends", "Editorial Strategy", "Writer Coaching"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-normal tracking-wide border border-primary/20 text-primary bg-primary/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
