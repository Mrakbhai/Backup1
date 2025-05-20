import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { scrollToElement } from '@/lib/utils';
import videoPlaceholder from '@/assets/video-placeholder.svg';
import { ChevronDown } from 'lucide-react';
import { Volume2, VolumeX } from 'lucide-react';
import bgVideoMp4 from '@/assets/bg1.mp4';
import bgVideoWebm from '@/assets/bg1.webm';

const bgImages: string[] = [
  "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/b256367962c4dd22384c89a73c6de3d5.jpg",
  "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/9271bbc5450e84687d0697343a001d49.jpg",
  "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/27b1488da4b4e3ea559318f7e332ff20.jpg",
  "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/53dc8015436140d76291c3689cf2a2d0.jpg",
  "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/eca997db8be14cf1f096225ffc905697.jpg",
  "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/79ea79e6133a1d43367b7e00cd77c6b8.jpg",
  "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/5c208e875e7f0bc2f5aa6f10758dc959.jpg",
  "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/12cd05121afaf29fa1131dd1ab167f17.jpg",
  "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/580651e41dc04acd8d5ebde7dd195b5b.jpg",
  "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/eb1df6b57997fec0c4ec81648e744db2.jpg",
  "https://news.ultimatebattle.in/wp-content/uploads/2022/01/Garena-Free-Fire-New.jpg"
];

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

    // This function would handle the video loading in a real implementation
  const [randomBgImage, setRandomBgImage] = useState("");

useEffect(() => {
  const randomIndex = Math.floor(Math.random() * bgImages.length);
  setRandomBgImage(bgImages[randomIndex]);

  const timer = setTimeout(() => {
    setVideoLoaded(true);
  }, 2000);

  return () => clearTimeout(timer);
}, []);
  

  // Scroll to About section
  const handleScrollDown = () => {
    scrollToElement('about');
  };
  const [isAudioOn, setIsAudioOn] = useState(false);
  
  return (
    <section id="home" className="relative h-screen">
      <div className="video-container">
        {/* Thumbnail image as fallback before video loads */}
        <img 
          src={randomBgImage}
          alt="FF Max Pro League Tournament" 
          className="w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: videoLoaded ? 0 : 1 }}
        />

        <video
          ref={videoRef}
          autoPlay
          muted={!isAudioOn}
          playsInline
          loop
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: videoLoaded ? 1 : 0 }}
          onCanPlayThrough={() => setVideoLoaded(true)}
        >
          <source src="/assets/bg1.mp4" type="video/mp4" />
          <source src="/assets/bg1.webm" type="video/webm" />
          {/* If both fail, the <img> remains visible */}
        </video>
        
        <div className="video-overlay"></div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center text-center px-4">
        <button
  onClick={() => {
    setIsAudioOn((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !isAudioOn;
      videoRef.current.play(); // Re-trigger autoplay in some browsers
    }
  }}
  className="absolute top-6 right-6 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
  aria-label={isAudioOn ? "Mute" : "Unmute"}
>
  {isAudioOn ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
</button>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-foreground mb-4">
            <span className="text-primary text-shadow">FF MAX</span>{" "}
            <span className="text-secondary text-shadow-cyan">PRO LEAGUE</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-rajdhani text-foreground mb-8 max-w-2xl mx-auto">
            The Ultimate Free Fire Tournament for Professional Gamers
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button 
            className="bg-primary text-primary-foreground py-3 px-8 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 glow-btn text-lg"
            onClick={() => scrollToElement('register')}
          >
            Join Tournament
          </button>
          <Link href="/learn-more">
            <button 
              className="bg-transparent border-2 border-secondary text-secondary py-3 px-8 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-secondary hover:bg-opacity-10 transition-all duration-300 glow-btn-cyan text-lg"
            >
              Learn More
            </button>
          </Link>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-0 right-0 mx-auto text-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut" 
          }}
        >
          <button onClick={handleScrollDown} className="inline-block">
            <ChevronDown className="w-10 h-10 text-primary mx-auto" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
