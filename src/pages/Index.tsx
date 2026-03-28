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
              <div className="flex flex-col gap-16">
                <figure className="flex flex-col gap-2 max-w-[650px]">
                  <img src="/ai-avatar-zoom.jpg" alt="Joe Castaldo chatting with an AI avatar of himself on a Zoom call" className="w-full rounded" />
                  <figcaption className="text-[13px] text-muted-foreground/50 leading-relaxed">
                    Chatting with an{" "}
                    <a href="https://www.theglobeandmail.com/business/article-digital-clone-ai-avatar-meeting-efficiency/" target="_blank" rel="noopener noreferrer" className="underline decoration-muted-foreground/30 hover:decoration-muted-foreground transition-colors underline-offset-2">
                      interactive AI avatar
                    </a>{" "}
                    of myself on a Zoom call back in 2024.<br />Image courtesy of Patrick Dell/The Globe and Mail.
                  </figcaption>
                </figure>
                <ContactSection />
              </div>
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
