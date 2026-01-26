import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-dark-800/50 rounded-lg p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
          language === 'en'
            ? 'bg-primary-600 text-white'
            : 'text-gray-400 hover:text-white hover:bg-dark-700'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
          language === 'es'
            ? 'bg-primary-600 text-white'
            : 'text-gray-400 hover:text-white hover:bg-dark-700'
        }`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageToggle;
