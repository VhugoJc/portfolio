import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-700 py-8">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} {t('hero.name')}. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href={t('contact.linkedin')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a
              href={t('contact.github')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            <a
              href={t('contact.awsBuilder')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              aria-label="AWS Builder"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.763 10.036c.096-.46.048-.88-.126-1.228-.174-.348-.475-.608-.903-.78-.428-.172-.96-.172-1.388 0-.428.172-.729.432-.903.78-.174.348-.222.768-.126 1.228.096.46.317.892.627 1.26.31.368.703.668 1.148.876.445.208.935.314 1.428.314s.983-.106 1.428-.314c.445-.208.838-.508 1.148-.876.31-.368.531-.8.627-1.26zm11.474 0c.096-.46.048-.88-.126-1.228-.174-.348-.475-.608-.903-.78-.428-.172-.96-.172-1.388 0-.428.172-.729.432-.903.78-.174.348-.222.768-.126 1.228.096.46.317.892.627 1.26.31.368.703.668 1.148.876.445.208.935.314 1.428.314s.983-.106 1.428-.314c.445-.208.838-.508 1.148-.876.31-.368.531-.8.627-1.26zm-5.737 7.964c2.89 0 5.737-1.26 5.737-4.2 0-2.94-2.847-4.2-5.737-4.2s-5.737 1.26-5.737 4.2c0 2.94 2.847 4.2 5.737 4.2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-dark-700 text-center">
          <p className="text-gray-400 text-xs">
            Built with React, TypeScript, and Tailwind CSS • Deployed on the Cloud ☁️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
