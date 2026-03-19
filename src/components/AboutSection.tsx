const AboutSection = () => {
  return (
    <section id="about" className="mb-40 text-[19px] leading-relaxed text-foreground max-w-[600px]">
      <p className="mb-4">
        Award-winning writer and editor with nearly 20 years of experience crafting long-form, research-driven narratives on business, technology, policy, and innovation. Currently a Business Reporter at{" "}
        <a href="https://www.theglobeandmail.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-muted-foreground/40 hover:decoration-foreground transition-colors underline-offset-2 text-foreground">The Globe and Mail</a>.
      </p>
      <p className="mb-4">
        Deep expertise in artificial intelligence and Canadian business and economic trends. Recognized with multiple{" "}
        <span className="text-foreground">National Newspaper Awards</span> and{" "}
        <span className="text-foreground">National Magazine Awards</span>.
      </p>
      <p>
        Featured in the Netflix documentary{" "}
        <span className="text-foreground italic">Trust No One: The Hunt for the Crypto King</span>.
      </p>
    </section>
  );
};

export default AboutSection;
