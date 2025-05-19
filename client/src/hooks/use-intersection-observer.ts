import { useCallback, useRef } from 'react';

interface IntersectionObserverOptions {
  selector: string;
  callback: (element: HTMLElement) => void;
  options?: IntersectionObserverInit;
}

export function useIntersectionObserver({
  selector,
  callback,
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }
}: IntersectionObserverOptions) {
  const observer = useRef<IntersectionObserver | null>(null);

  const observeElements = useCallback(() => {
    // Disconnect any existing observer
    if (observer.current) {
      observer.current.disconnect();
    }

    // Create a new observer
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target as HTMLElement);
          
          // If we only need to observe once, we can unobserve after triggering
          observer.current?.unobserve(entry.target);
        }
      });
    }, options);

    // Select all matching elements and observe them
    const elements = document.querySelectorAll<HTMLElement>(selector);
    elements.forEach(element => {
      observer.current?.observe(element);
    });

    // Return cleanup function
    return () => {
      observer.current?.disconnect();
    };
  }, [selector, callback, options]);

  return { observeElements };
}
