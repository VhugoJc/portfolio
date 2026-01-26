import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useParallax } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: bgRef, offset } = useParallax(0.3);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div 
        ref={bgRef as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 opacity-20 transform transition-transform duration-75"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-3xl animate-pulse animate-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-600 rounded-full blur-3xl animate-pulse animate-delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-primary-400/30 rounded-full animate-ping`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container-max section-padding text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting with animation */}
          <p className="text-lg md:text-xl text-primary-400 mb-4 opacity-0 translate-y-4 animate-fade-in-up animation-delay-200">
            {t('hero.greeting')}
          </p>

          {/* Name with enhanced gradient animation */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 translate-y-8 animate-fade-in-up animation-delay-400">
            <span className="text-gradient bg-gradient-to-r from-primary-400 via-cyan-400 to-primary-600 bg-clip-text text-transparent bg-200% animate-gradient">
              {t('hero.name')}
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 mb-8 opacity-0 translate-y-8 animate-fade-in-up animation-delay-600">
            {t('hero.title')}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 translate-y-8 animate-fade-in-up animation-delay-800">
            {t('hero.description')}
          </p>

          {/* Call to Action Buttons with hover animations */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 translate-y-8 animate-fade-in-up animation-delay-1000">
            <button
              onClick={scrollToContact}
              className="btn-primary group hover:scale-105 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
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
              className="btn-secondary group hover:scale-105 hover:shadow-xl hover:shadow-primary-400/25 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              {t('hero.resume')}
            </a>
          </div>

          {/* Enhanced Scroll Indicator
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2 cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => {
              const element = document.querySelector('#about');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
              </div>
              <span className="text-xs text-primary-400/70">Scroll</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
