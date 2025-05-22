import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Highlights from "@/components/highlight";
import RegistrationSection from "@/components/RegistrationSection";
import RulesSection from "@/components/RulesSection";
import PrizesSection from "@/components/PrizesSection";
import CommunitySection from "@/components/CommunitySection";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Helmet } from "react-helmet";
import { scrollToElement } from "@/lib/utils";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
  const params = new URLSearchParams(location.split('?')[1]);
  const scrollTo = params.get('scrollTo');

  if (scrollTo) {
    // Delay scroll until DOM is fully ready
    const timeout = setTimeout(() => {
      scrollToElement(scrollTo);
    }, 200); // You can adjust delay if needed

    return () => clearTimeout(timeout);
  }
}, [location]);

  // Intersection observer for section animations
  const { observeElements } = useIntersectionObserver({
    selector: '.section-reveal',
    callback: (entry) => entry.classList.add('revealed'),
    options: { threshold: 0.15 }
  });

  useEffect(() => {
    // Initialize section reveal animations
    observeElements();
  }, [observeElements]);

  return (
    <>
      <Helmet>
        <title>FF Max Pro League - The Ultimate Free Fire Tournament</title>
        <meta name="description" content="Join the most prestigious Free Fire tournament and win ₹10 per kill and extra ₹10 for booyah" />
        <meta property="og:title" content="FF Max Pro League - The Ultimate Free Fire Tournament" />
        <meta property="og:description" content="Compete in the ultimate Free Fire tournament experience with professional players from around the world." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main>
          <HeroSection />
          <AboutSection />
          <Highlights />
          <RegistrationSection />
          <RulesSection />
          <PrizesSection />
          <CommunitySection />
          <SupportSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
