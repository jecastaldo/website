import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WritingSection from "@/components/WritingSection";
import MediaSection from "@/components/MediaSection";
import SpeakingSection from "@/components/SpeakingSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollFadeIn>
        <HeroSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <AboutSection />
      </ScrollFadeIn>
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
      <Footer />
    </div>
  );
};

export default Index;
