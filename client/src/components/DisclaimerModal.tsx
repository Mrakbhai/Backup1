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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          <Dialog open={isOpen} onOpenChange={() => {}}>
            <DialogContent 
              className="max-w-lg mx-auto p-0 border-0 bg-transparent shadow-none z-50" 
              onPointerDownOutside={(e) => e.preventDefault()}
              onEscapeKeyDown={(e) => e.preventDefault()}
            >
            <motion.div
              className="bg-background border-2 border-primary border-opacity-40 rounded-lg p-8 backdrop-blur-sm relative overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(145deg, rgba(10, 10, 10, 0.98), rgba(15, 15, 15, 0.95))',
                boxShadow: '0 0 40px rgba(255, 105, 0, 0.4), 0 0 80px rgba(0, 191, 255, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.5)',
              }}
            >
              <DialogHeader className="text-center mb-6">
                <DialogTitle className="text-2xl md:text-3xl font-orbitron font-bold mb-4">
                  📢 Disclaimer
                </DialogTitle>

                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
              </DialogHeader>

              <DialogDescription className="text-base font-rajdhani space-y-4 leading-relaxed">
                <p className="text-foreground/95">
                  We are <strong className="text-primary font-semibold glow-text">not</strong> affiliated with Garena or Free Fire in any official capacity.
                </p>
                
                <p className="text-foreground/95">
                  All rights to the game, characters, names, and visual assets belong to their respective owners, including Garena.
                </p>

                <p className="text-foreground/95">
                  We host <strong className="text-secondary font-semibold glow-text">unofficial local Free Fire tournaments</strong> for fun and community participation.
                </p>

                <p className="text-foreground/95">
                  Images used on this site are sourced from Free Fire's official site and used for illustrative purposes only.
                </p>

                <p className="text-foreground font-medium">
                  By continuing, you acknowledge that you understand this and agree to proceed.
                </p>
              </DialogDescription>

              <div className="flex justify-center mt-8">
                <Button 
                  onClick={handleAccept}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-orbitron font-bold uppercase tracking-wider text-lg glow-btn transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">✓</span>
                  I Understand, Continue
                </Button>
              </div>
            </motion.div>
          </DialogContent>
          </Dialog>
        </>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;