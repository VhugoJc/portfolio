import { useEffect, useRef, useState } from 'react';

// Hook for scroll animations - mobile-first approach
export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const rootMargin = isMobile ? '-10px 0px -10px 0px' : '-30px 0px -30px 0px';
    const adjustedThreshold = isMobile ? [0.1, 0.3] : [threshold, threshold + 0.2];
    
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Clear any pending timeout
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        
        // Add debouncing to prevent rapid toggles
        timeoutId = setTimeout(() => {
          if (entry.isIntersecting && entry.intersectionRatio >= (isMobile ? 0.1 : threshold)) {
            setIsVisible(true);
            setHasBeenVisible(true);
          } else {
            // Only allow re-animation after element has been fully out of view
            if (hasBeenVisible && entry.intersectionRatio < (isMobile ? 0.05 : threshold * 0.5)) {
              setIsVisible(false);
            }
          }
        }, 50); // 50ms debounce
      },
      { 
        threshold: adjustedThreshold,
        rootMargin
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, hasBeenVisible]);

  return { elementRef, isVisible };
};

// Hook for staggered animations - mobile optimized
export const useStaggeredAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const rootMargin = isMobile ? '-30px 0px' : '-100px 0px';
    const adjustedThreshold = isMobile ? 0.05 : threshold;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
        } else {
          // Allow re-animation when scrolling back
          if (hasBeenVisible) {
            setIsVisible(false);
          }
        }
      },
      { 
        threshold: adjustedThreshold,
        rootMargin
      }
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [threshold, hasBeenVisible]);

  return { containerRef, isVisible };
};

// Parallax effect hook
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      setOffset(rate);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { elementRef, offset };
};

// Animation classes - mobile-first optimized
export const fadeInUp = (isVisible: boolean, delay = 0) => 
  `transform transition-all duration-700 md:duration-1000 ease-out ${
    isVisible 
      ? 'translate-y-0 opacity-100' 
      : 'translate-y-6 md:translate-y-12 opacity-0'
  } ${delay > 0 ? `delay-${delay}` : ''}`;

export const fadeInLeft = (isVisible: boolean, delay = 0) => 
  `transform transition-all duration-600 md:duration-800 ease-out ${
    isVisible 
      ? 'translate-x-0 opacity-100' 
      : '-translate-x-6 md:-translate-x-12 opacity-0'
  } ${delay > 0 ? `delay-${delay}` : ''}`;

export const fadeInRight = (isVisible: boolean, delay = 0) => 
  `transform transition-all duration-600 md:duration-800 ease-out ${
    isVisible 
      ? 'translate-x-0 opacity-100' 
      : 'translate-x-6 md:translate-x-12 opacity-0'
  } ${delay > 0 ? `delay-${delay}` : ''}`;

export const scaleIn = (isVisible: boolean, delay = 0) => 
  `transform transition-all duration-500 md:duration-700 ease-out ${
    isVisible 
      ? 'scale-100 opacity-100' 
      : 'scale-95 md:scale-90 opacity-0'
  } ${delay > 0 ? `delay-${delay}` : ''}`;

export const slideInFromBottom = (isVisible: boolean, delay = 0) =>
  `transform transition-all duration-800 md:duration-1000 ease-out ${
    isVisible 
      ? 'translate-y-0 opacity-100' 
      : 'translate-y-8 md:translate-y-16 opacity-0'
  } ${delay > 0 ? `delay-${delay}` : ''}`;

export const staggerChildren = (isVisible: boolean) =>
  `transform transition-all duration-600 md:duration-800 ease-out ${
    isVisible 
      ? 'translate-y-0 opacity-100' 
      : 'translate-y-4 md:translate-y-8 opacity-0'
  }`;

// Get stagger delay for child elements - shorter delays on mobile
export const getStaggerDelay = (index: number) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return `${index * (isMobile ? 75 : 100)}ms`;
};
