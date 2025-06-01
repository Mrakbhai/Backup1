
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const DisclaimerModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAcceptedDisclaimer = localStorage.getItem('hasAcceptedDisclaimer');
    if (!hasAcceptedDisclaimer) {
      // Add a small delay to ensure the page has loaded
      setTimeout(() => setIsOpen(true), 500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hasAcceptedDisclaimer', 'true');
    setIsOpen(false);
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={() => {}}>
          <DialogContent 
            className="max-w-lg mx-auto p-0 border-0 bg-transparent shadow-none" 
            onPointerDownOutside={(e) => e.preventDefault()}
            onEscapeKeyDown={(e) => e.preventDefault()}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-card border border-primary border-opacity-30 rounded-lg p-8 backdrop-blur-sm relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(240, 10, 3.9, 0.95), rgba(240, 3.7, 15.9, 0.98))',
                boxShadow: '0 0 30px rgba(255, 105, 0, 0.3), 0 0 60px rgba(0, 191, 255, 0.2)',
              }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-lg"></div>
              
              <motion.div variants={contentVariants} initial="hidden" animate="visible" className="relative z-10">
                <DialogHeader className="text-center mb-6">
                  <DialogTitle className="text-2xl md:text-3xl font-orbitron font-bold mb-4 text-primary">
                    <motion.span
                      variants={itemVariants}
                      className="inline-block mr-3 text-3xl"
                    >
                      📢
                    </motion.span>
                    <motion.span variants={itemVariants} className="text-shadow">
                      DISCLAIMER
                    </motion.span>
                  </DialogTitle>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"
                  ></motion.div>
                </DialogHeader>

                <DialogDescription className="text-base font-rajdhani text-foreground space-y-4 leading-relaxed">
                  <motion.p variants={itemVariants} className="text-foreground opacity-90">
                    We are <strong className="text-primary font-semibold">not</strong> affiliated with Garena or Free Fire in any official capacity.
                  </motion.p>
                  
                  <motion.p variants={itemVariants} className="text-foreground opacity-90">
                    All rights to the game, characters, names, and visual assets belong to their respective owners, including Garena.
                  </motion.p>
                  
                  <motion.p variants={itemVariants} className="text-foreground opacity-90">
                    We host <strong className="text-secondary font-semibold">unofficial local Free Fire tournaments</strong> for fun and community participation.
                  </motion.p>
                  
                  <motion.p variants={itemVariants} className="text-foreground opacity-90">
                    Images used on this site are sourced from Free Fire's official site and used for illustrative purposes only.
                  </motion.p>
                  
                  <motion.p variants={itemVariants} className="text-foreground opacity-90 font-medium">
                    By continuing, you acknowledge that you understand this and agree to proceed.
                  </motion.p>
                </DialogDescription>

                <motion.div 
                  variants={itemVariants}
                  className="flex justify-center mt-8"
                >
                  <Button 
                    onClick={handleAccept}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-orbitron font-bold uppercase tracking-wider text-lg glow-btn transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="mr-2">✓</span>
                    I Understand, Continue
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;
