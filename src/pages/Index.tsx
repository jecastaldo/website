import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WritingSection from "@/components/WritingSection";
import MediaSection from "@/components/MediaSection";
import SpeakingSection from "@/components/SpeakingSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import GeocitiesBanner from "@/components/GeocitiesBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GeocitiesBanner />
      <HeroSection />
      <main className="w-full max-w-[800px] mx-auto px-6 pt-32 pb-40">
        <ScrollFadeIn>
          <AboutSection />
        </ScrollFadeIn>
        <div className="flex flex-col gap-40">
          <ScrollFadeIn>
            <WritingSection />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <MediaSection />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <SpeakingSection />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <AwardsSection />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <ContactSection />
          </ScrollFadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
