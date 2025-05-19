import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RegistrationSection from "@/components/RegistrationSection";
import RulesSection from "@/components/RulesSection";
import PrizesSection from "@/components/PrizesSection";
import CommunitySection from "@/components/CommunitySection";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Helmet } from "react-helmet";

export default function Home() {
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
        <meta name="description" content="Join the most prestigious Free Fire tournament and compete against the best players from around the world with a prize pool of $100,000." />
        <meta property="og:title" content="FF Max Pro League - The Ultimate Free Fire Tournament" />
        <meta property="og:description" content="Compete in the ultimate Free Fire tournament experience with professional players from around the world." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main>
          <HeroSection />
          <AboutSection />
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
