import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="section-padding bg-dark-800/30">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div 
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 sm:mb-16 ${fadeInUp(titleVisible)}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t('about.title')}
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto"></div>
          </div>

          <div 
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className="space-y-16 sm:space-y-20"
          >
            {/* Profile Image and Description */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Profile Image */}
              <div className={`lg:col-span-1 ${fadeInUp(contentVisible, 200)}`}>
                <div className="relative max-w-xs mx-auto">
                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/15 to-cyan-400/15 rounded-xl transform rotate-2"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative bg-dark-700/40 backdrop-blur-sm rounded-xl p-3 border border-primary-400/20">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-dark-600 to-dark-700">
                      {/* Placeholder - Replace src with your actual image */}
                      <img
                        src="https://media.licdn.com/dms/image/v2/C4E03AQE2qbbMGiAW7A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1588381430739?e=1770854400&v=beta&t=EplVczfB09F8yxmuVihga9cAMzBlaer5IMfvVG0E7t4"
                        alt="Victor Hugo Jiménez - Site Reliability Engineer"
                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback to a professional avatar placeholder
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23374151'/%3E%3Ccircle cx='150' cy='120' r='45' fill='%236B7280'/%3E%3Cpath d='M150 180c-45 0-90 22.5-90 60v60h180v-60c0-37.5-45-60-90-60z' fill='%236B7280'/%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    
                    {/* AWS Community Leader Badge */}
                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full border-2 border-dark-800">
                      AWS Community Leader
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className={`lg:col-span-2 text-center lg:text-left ${fadeInUp(contentVisible, 300)}`}>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                  {t('about.description')}
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
                  <div className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-primary-400 mb-1">2+</div>
                    <div className="text-xs text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1">3</div>
                    <div className="text-xs text-gray-400">AWS Certifications</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className={`${fadeInUp(contentVisible, 400)}`}>
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Tech Stack</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
                {[
                  { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-orange-500' },
                  { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-500' },
                  { name: 'OpenSearch', icon: '🔍', color: 'from-yellow-400 to-yellow-500' },
                  { name: 'Lambda', icon: '⚡', color: 'from-orange-400 to-orange-500' },
                  { name: 'S3', icon: '📦', color: 'from-green-400 to-green-500' },
                  { name: 'Kubernetes', icon: '⚙️', color: 'from-blue-400 to-cyan-400' },
                  { name: 'Grafana', icon: '📊', color: 'from-orange-400 to-red-500' },
                  { name: 'Kibana', icon: '📈', color: 'from-purple-400 to-purple-500' },
                  { name: 'Spring Boot', icon: '🍃', color: 'from-green-400 to-green-500' },
                  { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
                  { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-blue-500' },
                  { name: 'TypeScript', icon: '🟦', color: 'from-blue-400 to-blue-600' }
                ].map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`group cursor-default transition-all duration-300 hover:scale-110 transform ${
                      contentVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ 
                      transitionDelay: contentVisible ? `${400 + (index * 50)}ms` : '0ms' 
                    }}
                  >
                    <div className="bg-dark-700/40 backdrop-blur-sm rounded-xl p-4 border border-primary-400/20 group-hover:border-primary-400/40 transition-all duration-300 text-center">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AWS Certifications Section */}
            <div className={`${fadeInUp(contentVisible, 600)}`}>
              <div className="text-center mb-12 sm:mb-16">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">AWS Certifications</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto"></div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {Array.isArray(t('about.certifications')) && t('about.certifications').map((cert: any, index: number) => {
                  // Define certification badge images
                  const getCertImage = (credential: string) => {
                    switch (credential) {
                      case 'SAA-C03': // Solutions Architect Associate
                        return 'https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png';
                      case 'DVA-C02': // Developer Associate
                        return 'https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png';
                      case 'CLF-C01': // Cloud Practitioner
                        return 'https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png';
                      default:
                        return null;
                    }
                  };

                  const certImage = getCertImage(cert.credential);

                  return (
                    <a
                      key={index}
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group cursor-pointer transition-all duration-300 hover:scale-110 transform ${
                        contentVisible 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4 md:translate-y-8'
                      }`}
                      style={{ 
                        transitionDelay: contentVisible ? `${600 + (index * 100)}ms` : '0ms' 
                      }}
                    >
                      <div className="text-center">
                        {/* Prominent Badge Image */}
                        <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 rounded-xl overflow-hidden bg-white/5 p-3 group-hover:bg-white/10">
                          {certImage ? (
                            <img 
                              src={certImage}
                              alt={`${cert.name} Badge`}
                              className="w-full h-full object-contain rounded-lg"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"/>
                              </svg>
                            </div>
                          )}
                        </div>
                        
                        {/* Minimal Text - Just Date */}
                        <div className="text-sm text-primary-400 font-medium group-hover:text-primary-300 transition-colors duration-300">
                          {cert.date}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Community Leadership Section */}
            <div className={`${fadeInUp(contentVisible, 700)}`}>
              <div className="text-center mb-12 sm:mb-16">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Community Leadership</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-primary-400 mx-auto"></div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
                {Array.isArray(t('about.leadership')) && t('about.leadership').map((role: string, index: number) => (
                  <div
                    key={index}
                    className={`card bg-dark-700/20 hover:bg-dark-700/40 transition-all duration-300 hover:scale-105 transform text-center group ${
                      contentVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4 md:translate-y-8'
                    }`}
                    style={{ 
                      transitionDelay: contentVisible ? `${800 + (index * 100)}ms` : '0ms' 
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                      {role}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
