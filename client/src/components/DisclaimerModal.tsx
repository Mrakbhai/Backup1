
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const DisclaimerModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAcceptedDisclaimer = localStorage.getItem('hasAcceptedDisclaimer');
    if (!hasAcceptedDisclaimer) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hasAcceptedDisclaimer', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-md mx-auto p-6" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center mb-4">
            📢 Disclaimer
          </DialogTitle>
          <DialogDescription className="text-sm text-left space-y-3">
            <p>
              We are <strong>not</strong> affiliated with Garena or Free Fire in any official capacity.
            </p>
            <p>
              All rights to the game, characters, names, and visual assets belong to their respective owners, including Garena.
            </p>
            <p>
              We host <strong>unofficial local Free Fire tournaments</strong> for fun and community participation.
            </p>
            <p>
              Images used on this site are sourced from Free Fire's official site and used for illustrative purposes only.
            </p>
            <p>
              By continuing, you acknowledge that you understand this and agree to proceed.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-6">
          <Button 
            onClick={handleAccept}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
          >
            ✓ I Understand, Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerModal;
