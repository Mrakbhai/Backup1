import { useEffect, useState } from 'react';
import { debounce, getScrollPosition } from '@/lib/utils';

interface ScrollPosition {
  x: number;
  y: number;
}

export function useScroll(delay = 50) {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrollPosition(getScrollPosition());
    }, delay);

    // Set initial position
    setScrollPosition(getScrollPosition());
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delay]);

  return scrollPosition;
}

export function useScrollThreshold(threshold: number, delay = 50) {
  const { y } = useScroll(delay);
  const isOverThreshold = y > threshold;
  
  return isOverThreshold;
}
