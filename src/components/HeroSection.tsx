import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 pb-16 px-6">
      <div className="max-w-3xl mx-auto flex items-center gap-8">
        <img
          src={profilePhoto}
          alt="Joe Castaldo"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-md ring-4 ring-background shrink-0"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-1.5 leading-tight">
            Joe Castaldo
          </h1>
          <div className="w-8 h-[3px] bg-primary mb-3 rounded-full" />
          <p className="text-sm md:text-base font-normal text-muted-foreground tracking-wide">
            Business Reporter · <span className="italic">The Globe and Mail</span>
          </p>
          <p className="text-xs md:text-sm font-light text-muted-foreground max-w-md leading-relaxed mt-2">
            Award-winning writer crafting long-form, research-driven narratives on business, technology, and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
