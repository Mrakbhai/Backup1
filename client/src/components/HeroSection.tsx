import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { scrollToElement } from '@/lib/utils';
import videoPlaceholder from '@/assets/video-placeholder.svg';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // This function would handle the video loading in a real implementation
  useEffect(() => {
    // Simulating video load for the demo
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll to About section
  const handleScrollDown = () => {
    scrollToElement('about');
  };
  
  return (
    <section id="home" className="relative h-screen">
      <div className="video-container">
        {/* Thumbnail image as fallback before video loads */}
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="FF Max Pro League Tournament" 
          className="w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: videoLoaded ? 0 : 1 }}
        />
        
        {/* Video background - using an image as fallback for now */}
        {videoLoaded && (
          <div 
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
              opacity: 1
            }}
          ></div>
        )}
        
        <div className="video-overlay"></div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center text-center px-4">
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
            Register Now
          </button>
          <button className="bg-transparent border-2 border-secondary text-secondary py-3 px-8 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-secondary hover:bg-opacity-10 transition-all duration-300 glow-btn-cyan text-lg">
            Watch Trailer
          </button>
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
