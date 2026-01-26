import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, getStaggerDelay } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const jobs = t('experience.jobs') || [];
  
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);
  const { elementRef: timelineRef, isVisible: timelineVisible } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with dramatic entrance */}
          <div 
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={fadeInUp(titleVisible)}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t('experience.title')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto"></div>
            </div>
          </div>

          {/* Experience Timeline with scroll animations */}
          <div 
            ref={timelineRef as React.RefObject<HTMLDivElement>}
            className="relative"
          >
            {/* Timeline Line - animates in from top */}
            <div 
              className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-primary-400 via-cyan-400 to-primary-600 transition-all duration-2000 ease-out ${
                timelineVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
              }`}
            ></div>

            {Array.isArray(jobs) && jobs.map((job: any, index: number) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Dot - pulsing animation */}
                <div 
                  className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-400 rounded-full border-4 border-dark-900 z-10 transition-all duration-700 ease-out ${
                    timelineVisible 
                      ? 'opacity-100 scale-100 animate-pulse' 
                      : 'opacity-0 scale-50'
                  }`}
                  style={{ transitionDelay: getStaggerDelay(index) }}
                ></div>

                {/* Content - alternate slide directions */}
                <div 
                  className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                >
                  <div 
                    className={`card hover:scale-105 transform transition-all duration-500 ${
                      index % 2 === 0 
                        ? fadeInLeft(timelineVisible, 200 + index * 100)
                        : fadeInRight(timelineVisible, 200 + index * 100)
                    }`}
                    style={{ transitionDelay: `${200 + index * 150}ms` }}
                  >
                    <div className="mb-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                          {job.position}
                        </h3>
                        <span className="text-sm text-primary-400 font-medium bg-primary-400/10 px-3 py-1 rounded-full">
                          {job.period}
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center text-gray-400 text-sm">
                        <span className="font-medium text-gray-300">{job.company}</span>
                        {job.location && (
                          <>
                            <span className="hidden md:inline mx-2">•</span>
                            <span className="flex items-center">
                              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {job.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    {job.achievements && Array.isArray(job.achievements) && (
                      <div>
                        <h4 className="text-sm font-semibold text-primary-400 mb-3 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement: string, achIndex: number) => (
                            <li 
                              key={achIndex} 
                              className={`flex items-start space-x-2 text-sm text-gray-300 transform transition-all duration-500 hover:translate-x-2 hover:text-white ${
                                timelineVisible 
                                  ? 'opacity-100 translate-y-0' 
                                  : 'opacity-0 translate-y-2'
                              }`}
                              style={{ 
                                transitionDelay: `${400 + index * 150 + achIndex * 50}ms` 
                              }}
                            >
                              <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
