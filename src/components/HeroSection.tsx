import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-40 pb-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src={profilePhoto}
          alt="Joe Castaldo"
          className="w-28 h-28 rounded-full object-cover mx-auto mb-10 shadow-md ring-4 ring-background"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4 leading-[1.1]">
          Joe Castaldo
        </h1>
        <div className="w-10 h-[3px] bg-primary mx-auto mb-6 rounded-full" />
        <p className="text-base md:text-lg font-normal text-muted-foreground mb-3 tracking-wide">
          Business Reporter · <span className="italic">The Globe and Mail</span>
        </p>
        <p className="text-sm font-light text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Award-winning writer crafting long-form, research-driven narratives on business, technology, and innovation.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
