import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import LeaderboardSection from "@/components/sections/LeaderboardSection";
import PrizesSection from "@/components/PrizesSection";
import Rewardex from "@/components/rewardex";
import CommunitySection from "@/components/CommunitySection";
import SupportSectionHome from "@/components/SupportSectionHome";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Helmet } from "react-helmet";
import { scrollToElement } from "@/lib/utils";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Delay ensures the DOM is rendered
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Remove the hash from URL after scrolling
          setTimeout(() => {
            window.history.replaceState(null, '', window.location.pathname);
          }, 800); // Wait for scroll animation to complete
        }
      }, 100);
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
          <PrizesSection />
          <Rewardex />
          <LeaderboardSection />
          <CommunitySection />
          <SupportSectionHome />
        </main>
        <Footer />
      </div>
    </>
  );
}
