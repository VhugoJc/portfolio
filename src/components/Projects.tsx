import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation, fadeInUp, scaleIn, getStaggerDelay } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const projects = t('projects.items') || [];

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.3);

  const filteredProjects = Array.isArray(projects) ? 
    filter === 'featured' 
      ? projects.filter((project: any) => project.featured)
      : projects
    : [];

  return (
    <section id="projects" className="section-padding bg-dark-800/30">
      <div className="container-max">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with filter buttons */}
          <div 
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={fadeInUp(titleVisible)}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t('projects.title')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto mb-8"></div>
              
              {/* Filter Buttons with hover effects */}
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                    filter === 'all'
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                      : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
                  }`}
                >
                  All Projects
                </button>
                <button
                  onClick={() => setFilter('featured')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                    filter === 'featured'
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                      : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
                  }`}
                >
                  Featured
                </button>
              </div>
            </div>
          </div>

          {/* Projects Grid with staggered animations */}
          <div 
            ref={gridRef as React.RefObject<HTMLDivElement>}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project: any, index: number) => (
              <div 
                key={index} 
                className={`group transform transition-all duration-700 hover:scale-105 ${
                  gridVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: getStaggerDelay(index)
                }}
              >
                <div className="card h-full flex flex-col hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 relative overflow-hidden">
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-cyan-600/0 group-hover:from-primary-600/5 group-hover:to-cyan-600/5 transition-all duration-500 rounded-xl"></div>
                  
                  {/* Project Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-primary-400 to-cyan-400 text-dark-900 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        Featured
                      </div>
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Project Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies with animated tags */}
                    <div className="mb-4 flex-grow">
                      <h4 className="text-sm font-semibold text-primary-400 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(project.technologies) && project.technologies.map((tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-1 bg-dark-700 text-primary-300 text-xs rounded-md hover:bg-primary-600 hover:text-white transition-all duration-300 cursor-default transform hover:scale-110 ${
                              gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                            }`}
                            style={{ 
                              transitionDelay: `${parseInt(getStaggerDelay(index)) + (techIndex * 50)}ms`
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights with slide-in animation */}
                    {project.highlights && Array.isArray(project.highlights) && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-primary-400 mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Key Highlights:
                        </h4>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight: string, highlightIndex: number) => (
                            <li 
                              key={highlightIndex} 
                              className={`flex items-start space-x-2 text-xs text-gray-300 group-hover:text-gray-200 transform transition-all duration-500 hover:translate-x-1 ${
                                gridVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                              }`}
                              style={{ 
                                transitionDelay: `${parseInt(getStaggerDelay(index)) + 200 + (highlightIndex * 100)}ms`
                              }}
                            >
                              <div className="w-1 h-1 bg-primary-400 rounded-full mt-1.5 flex-shrink-0 animate-pulse"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Project Links with hover animations */}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex space-x-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary-400 hover:scale-125 transition-all duration-300"
                            title="View Source Code"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary-400 hover:scale-125 transition-all duration-300"
                            title="View Live Demo"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>

                      {project.featured && (
                        <div className="flex items-center space-x-1 text-yellow-400 animate-pulse">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action with dramatic entrance */}
          <div 
            ref={ctaRef as React.RefObject<HTMLDivElement>}
            className={`text-center mt-16 ${scaleIn(ctaVisible, 300)}`}
          >
            <div className="card max-w-md mx-auto hover:scale-105 transform transition-all duration-500">
              <p className="text-gray-300 mb-6">
                Want to see more projects or discuss a collaboration?
              </p>
              <a
                href="https://github.com/VhugoJC"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group hover:shadow-xl hover:shadow-primary-500/30"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View All Projects on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
