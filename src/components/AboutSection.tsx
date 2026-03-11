const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-10 tracking-tight">
          About
        </h2>
        <div className="space-y-6 text-base font-light text-foreground leading-relaxed">
          <p>
            Award-winning writer and editor with nearly 20 years of experience crafting long-form, research-driven narratives on business, technology, policy, and innovation. Proven ability to identify market-shaping trends and ideas, interview senior leaders, synthesize complex perspectives, and produce compelling written content.
          </p>
          <p>
            Deep expertise in artificial intelligence and Canadian business and economic trends. Recognized with multiple{" "}
            <span className="font-medium">National Newspaper Awards</span> and{" "}
            <span className="font-medium">National Magazine Awards</span>.
          </p>
          <p>
            Featured in the Netflix documentary{" "}
            <span className="font-medium italic">Trust No One: The Hunt for the Crypto King</span>.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          {["Artificial Intelligence", "Business & Innovation", "Technology", "Policy", "Long-form Narrative"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm font-normal bg-primary/10 text-primary"
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
