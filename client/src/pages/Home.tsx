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
        <title>FF Max Pro League - Free Fire Tournament with Real Rewards</title>
        <meta name="description" content="Win ₹15 per kill and ₹40 for Booyah in the ultimate Free Fire tournament. Join now and compete with the best!" />
        <link rel="canonical" href="https://booyah.dailybyte.xyz/" />
        <meta property="og:title" content="FF Max Pro League - Free Fire Tournament" />
        <meta property="og:description" content="Get rewarded for your skills. ₹15 per kill and ₹40 for Booyah." />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/1362394089378676847/1376225455266463896/Image.png?ex=68348d55&is=68333bd5&hm=a713cc89bb1ad34ca2f0b7e3dd640b2b4649a4d38dc7ca66a84f5087e00f7e28&" />
        <meta property="og:url" content="https://booyah.dailybyte.xyz/" />
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
