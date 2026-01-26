import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useParallax, useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: bgRef, offset } = useParallax(0.3);
  const { elementRef: contentRef, isVisible } = useScrollAnimation(0.1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Mobile-optimized Animated Background */}
      <div 
        ref={bgRef as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 opacity-10 md:opacity-20 transform transition-transform duration-75 overflow-hidden"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-primary-600 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-600 rounded-full blur-3xl animate-pulse animation-delay-1000 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 md:w-80 md:h-80 bg-purple-600 rounded-full blur-3xl animate-pulse animation-delay-500 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Reduced floating particles on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 10 : 20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-primary-400/30 rounded-full animate-ping`}
            style={{
              left: `${Math.min(95, Math.random() * 90 + 5)}%`,
              top: `${Math.min(95, Math.random() * 90 + 5)}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div 
        ref={contentRef as React.RefObject<HTMLDivElement>}
        className="container-max section-padding text-center relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          {/* Greeting with mobile-first animation */}
          <p className={`text-base sm:text-lg md:text-xl text-primary-400 mb-3 sm:mb-4 ${fadeInUp(isVisible, 200)}`}>
            {t('hero.greeting')}
          </p>

          {/* Mobile-optimized Name with enhanced gradient animation */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 ${fadeInUp(isVisible, 400)}`}>
            <span className="text-gradient bg-gradient-to-r from-primary-400 via-cyan-400 to-primary-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
              {t('hero.name')}
            </span>
          </h1>

          {/* Mobile-first Title */}
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-gray-200 mb-6 sm:mb-8 ${fadeInUp(isVisible, 600)}`}>
            {t('hero.title')}
          </h2>

          {/* Mobile-optimized Description */}
          <p className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0 ${fadeInUp(isVisible, 800)}`}>
            {t('hero.description')}
          </p>

          {/* Mobile-first Call to Action Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 ${fadeInUp(isVisible, 1000)}`}>
            <button
              onClick={scrollToContact}
              className="btn-primary group hover:scale-105 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 w-full sm:w-auto"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {t('hero.cta')}
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group hover:scale-105 hover:shadow-xl hover:shadow-primary-400/25 transition-all duration-300 w-full sm:w-auto"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-[-2px] transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2-2z"
                />
              </svg>
              {t('hero.resume')}
            </a>
          </div>

          {/* Mobile-optimized Scroll Indicator */}
          {/* <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-1 sm:space-y-2 cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => {
              const element = document.querySelector('#about');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary-400 rounded-full flex justify-center">
                <div className="w-1 h-2 sm:h-3 bg-primary-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
              </div>
              <span className="text-xs text-primary-400/70 hidden sm:block">Scroll</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
