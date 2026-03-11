import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WritingSection from "@/components/WritingSection";
import MediaSection from "@/components/MediaSection";
import SpeakingSection from "@/components/SpeakingSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WritingSection />
      <MediaSection />
      <SpeakingSection />
      <AwardsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
