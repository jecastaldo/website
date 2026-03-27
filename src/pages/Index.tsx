import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WritingSection from "@/components/WritingSection";
import MediaSection from "@/components/MediaSection";
import SpeakingSection from "@/components/SpeakingSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollFadeIn from "@/components/ScrollFadeIn";

import ScrollToTop from "@/components/ScrollToTop";
import StickyMonogram from "@/components/StickyMonogram";
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";

const Index = () => {
  return (
    <MobileMenuProvider>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <main className="w-full max-w-[800px] pl-8 md:pl-10 pr-6 pt-8 pb-40">
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
        <ScrollToTop />
        <StickyMonogram />
      </div>
    </MobileMenuProvider>
  );
};

export default Index;
