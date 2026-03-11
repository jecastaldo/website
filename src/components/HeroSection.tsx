import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src={profilePhoto}
          alt="Joe Castaldo"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover mx-auto mb-8 shadow-lg"
        />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
          JOE CASTALDO
        </h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground mb-4">
          Business Reporter · The Globe and Mail
        </p>
        <p className="text-base font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Award-winning writer and editor crafting long-form, research-driven narratives on business, technology, policy, and innovation.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
