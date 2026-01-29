import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, getStaggerDelay } from '../hooks/useScrollAnimation';

const Blog: React.FC = () => {
  const { t } = useLanguage();
  const posts = t('blog.posts') || [];

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);
  const { elementRef: featuredRef, isVisible: featuredVisible } = useScrollAnimation(0.15);
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="section-padding bg-dark-900/30">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with dramatic entrance */}
          <div 
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={fadeInUp(titleVisible, 300)}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t('blog.title')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Latest insights on DevOps, SRE, and Cloud Architecture
              </p>
            </div>
          </div>

          {/* Featured Post with slide-in animation */}
          {Array.isArray(posts) && posts.length > 0 && posts[0] && (
            <div 
              ref={featuredRef as React.RefObject<HTMLDivElement>}
              className={`mb-16 ${fadeInLeft(featuredVisible, 400)}`}
            >
              <div className="card hover:scale-[1.02] transform transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 relative overflow-hidden group">
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-cyan-600/0 group-hover:from-primary-600/5 group-hover:to-cyan-600/5 transition-all duration-500 rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      {posts[0].image ? (
                        <div className="aspect-video rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                          <img
                            src={posts[0].image}
                            alt={posts[0].title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-primary-600/20 to-cyan-600/20 rounded-lg flex items-center justify-center hover:from-primary-600/30 hover:to-cyan-600/30 transition-all duration-500 group-hover:scale-105">
                          <svg className="w-16 h-16 text-primary-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-primary-400 to-cyan-400 text-dark-900 text-sm font-bold rounded-full animate-pulse shadow-lg">
                          Featured Article
                        </span>
                        <span className="text-gray-400 text-sm flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{formatDate(posts[0].date)}</span>
                        </span>
                        <span className="text-gray-400 text-sm flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{posts[0].readTime}</span>
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4 hover:text-primary-400 transition-colors duration-300 cursor-pointer group-hover:translate-x-1">
                        {posts[0].title}
                      </h3>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {posts[0].excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(posts[0].tags) && posts[0].tags.map((tag: string, index: number) => (
                            <span
                              key={index}
                              className={`px-3 py-1 bg-dark-700 text-primary-300 text-sm rounded-md hover:bg-primary-600 hover:text-white transition-all duration-300 cursor-default transform hover:scale-110 ${
                                featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                              }`}
                              style={{ 
                                transitionDelay: `${400 + (index * 100)}ms`
                              }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <a
                          href={posts[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-400 hover:text-primary-300 font-medium flex items-center space-x-2 hover:translate-x-2 transition-all duration-300 group"
                        >
                          <span>Read Full Article</span>
                          <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Posts Grid with staggered animations */}
          <div 
            ref={gridRef as React.RefObject<HTMLDivElement>}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {Array.isArray(posts) && posts.slice(1).map((post: any, index: number) => {
              const isEven = index % 2 === 0;
              const animationClass = isEven ? fadeInLeft(gridVisible, 300) : fadeInRight(gridVisible, 300);
              
              return (
                <div 
                  key={index + 1} 
                  className={`group transform transition-all duration-700 hover:scale-105 ${animationClass}`}
                  style={{ 
                    transitionDelay: getStaggerDelay(index)
                  }}
                >
                  <div className="card h-full hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 relative overflow-hidden">
                    {/* Animated background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-cyan-600/0 group-hover:from-primary-600/5 group-hover:to-cyan-600/5 transition-all duration-500 rounded-xl"></div>
                    
                    <div className="relative z-10">
                      {post.image ? (
                        <div className="aspect-video rounded-lg overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-500">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-primary-600/10 to-cyan-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:from-primary-600/20 group-hover:to-cyan-600/20 transition-all duration-500">
                          <svg className="w-12 h-12 text-primary-400/70 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-3 mb-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-4 hover:text-primary-400 transition-colors duration-300 cursor-pointer group-hover:translate-x-1">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(post.tags) && post.tags.slice(0, 2).map((tag: string, tagIndex: number) => (
                            <span
                              key={tagIndex}
                              className={`px-2 py-1 bg-dark-700 text-primary-300 text-xs rounded-md hover:bg-primary-600 hover:text-white transition-all duration-300 cursor-default transform hover:scale-110 ${
                                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                              }`}
                              style={{ 
                                transitionDelay: `${parseInt(getStaggerDelay(index)) + (tagIndex * 100)}ms`
                              }}
                            >
                              #{tag}
                            </span>
                          ))}
                          {Array.isArray(post.tags) && post.tags.length > 2 && (
                            <span className="text-gray-400 text-xs px-1 animate-pulse">+{post.tags.length - 2}</span>
                          )}
                        </div>
                        
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-400 hover:text-primary-300 font-medium text-sm flex items-center space-x-1 hover:translate-x-1 transition-all duration-300 group"
                        >
                          <span>Read</span>
                          <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
