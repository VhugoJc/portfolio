import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, getStaggerDelay } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);
  const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation(0.15);
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation(0.1);
  const { elementRef: socialRef, isVisible: socialVisible } = useScrollAnimation(0.3);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${t('contact.email')}?subject=${subject}&body=${body}`;
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: t('contact.email'),
      href: `mailto:${t('contact.email')}`
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: t('contact.location'),
      href: null
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Availability',
      value: t('contact.availability'),
      href: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: t('contact.linkedin'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: t('contact.github'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'AWS Builder',
      url: t('contact.awsBuilder'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.763 10.036c.096-.46.048-.88-.126-1.228-.174-.348-.475-.608-.903-.78-.428-.172-.96-.172-1.388 0-.428.172-.729.432-.903.78-.174.348-.222.768-.126 1.228.096.46.317.892.627 1.26.31.368.703.668 1.148.876.445.208.935.314 1.428.314s.983-.106 1.428-.314c.445-.208.838-.508 1.148-.876.31-.368.531-.8.627-1.26zm11.474 0c.096-.46.048-.88-.126-1.228-.174-.348-.475-.608-.903-.78-.428-.172-.96-.172-1.388 0-.428.172-.729.432-.903.78-.174.348-.222.768-.126 1.228.096.46.317.892.627 1.26.31.368.703.668 1.148.876.445.208.935.314 1.428.314s.983-.106 1.428-.314c.445-.208.838-.508 1.148-.876.31-.368.531-.8.627-1.26zm-5.737 7.964c2.89 0 5.737-1.26 5.737-4.2 0-2.94-2.847-4.2-5.737-4.2s-5.737 1.26-5.737 4.2c0 2.94 2.847 4.2 5.737 4.2z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-950/80">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with dramatic entrance */}
          <div 
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={fadeInUp(titleVisible, 300)}
          >
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t('contact.title')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto mb-8"></div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {t('contact.description')}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information with slide-in animation */}
            <div 
              ref={infoRef as React.RefObject<HTMLDivElement>}
              className={fadeInLeft(infoVisible, 400)}
            >
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-8 hover:text-primary-400 transition-colors duration-300">
                  Let's Connect
                </h3>
                
                {/* Contact Methods with staggered animations */}
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      className={`card hover:scale-105 transform transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 group ${
                        infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                      }`}
                      style={{ 
                        transitionDelay: getStaggerDelay(index)
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-cyan-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-400 text-sm mb-1">{method.title}</p>
                          {method.href ? (
                            <a
                              href={method.href}
                              className="text-white hover:text-primary-400 transition-colors duration-300 hover:underline font-medium"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <span className={`font-medium ${
                              method.title === 'Availability' ? 'text-primary-400' : 'text-white'
                            }`}>
                              {method.value}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links with enhanced animations */}
              <div 
                ref={socialRef as React.RefObject<HTMLDivElement>}
                className={infoVisible ? 'opacity-100' : 'opacity-0'}
                style={{ transitionDelay: '600ms' }}
              >
                <h4 className="text-lg font-bold text-white mb-6 hover:text-primary-400 transition-colors duration-300">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-dark-700 hover:bg-gradient-to-br hover:from-primary-600 hover:to-cyan-600 rounded-lg flex items-center justify-center transition-all duration-500 transform hover:scale-125 hover:rotate-12 hover:shadow-lg hover:shadow-primary-500/30 group ${
                        socialVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                      }`}
                      style={{ 
                        transitionDelay: `${600 + (index * 100)}ms`
                      }}
                      title={`Follow on ${social.name}`}
                    >
                      <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form with slide-in from right */}
            <div 
              ref={formRef as React.RefObject<HTMLDivElement>}
              className={fadeInRight(formVisible, 400)}
            >
              <div className="card hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 relative overflow-hidden group">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-cyan-600/0 group-hover:from-primary-600/5 group-hover:to-cyan-600/5 transition-all duration-500 rounded-xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-8 group-hover:text-primary-400 transition-colors duration-300">
                    Send Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className={`transform transition-all duration-500 ${
                        formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`} style={{ transitionDelay: '200ms' }}>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300 hover:border-dark-500"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div className={`transform transition-all duration-500 ${
                        formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`} style={{ transitionDelay: '300ms' }}>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300 hover:border-dark-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className={`transform transition-all duration-500 ${
                      formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`} style={{ transitionDelay: '400ms' }}>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300 hover:border-dark-500"
                        placeholder="Project collaboration, consultation, etc."
                      />
                    </div>

                    <div className={`transform transition-all duration-500 ${
                      formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`} style={{ transitionDelay: '500ms' }}>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300 hover:border-dark-500 resize-vertical"
                        placeholder="Tell me about your project or what you'd like to discuss..."
                      ></textarea>
                    </div>

                    <div className={`transform transition-all duration-500 ${
                      formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`} style={{ transitionDelay: '600ms' }}>
                      <button
                        type="submit"
                        className="w-full btn-primary justify-center group hover:shadow-xl hover:shadow-primary-500/30"
                      >
                        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </button>
                    </div>
                  </form>
                  
                  <p className={`text-gray-400 text-sm mt-6 transform transition-all duration-500 ${
                    formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`} style={{ transitionDelay: '700ms' }}>
                    * This will open your default email client with the message pre-filled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
