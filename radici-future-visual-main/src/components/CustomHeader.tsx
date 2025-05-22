
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface CustomHeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const { t, toggleLanguage, language } = useLanguage();
  
  return (
    <header className={`flex items-center justify-between whitespace-nowrap border-b border-solid ${darkMode ? 'border-b-gray-800 bg-gray-900' : 'border-b-[#f0f2f5] bg-white'} px-10 py-3 sticky top-0 z-50`}>
      <Logo darkMode={darkMode} />
      
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className={`text-sm font-medium leading-normal ${darkMode ? 'text-gray-300 hover:text-white' : 'text-[#111418] hover:text-black'}`} href="#about">{t('nav_about')}</a>
          <a className={`text-sm font-medium leading-normal ${darkMode ? 'text-gray-300 hover:text-white' : 'text-[#111418] hover:text-black'}`} href="#how-it-works">{t('nav_how')}</a>
          <a className={`text-sm font-medium leading-normal ${darkMode ? 'text-gray-300 hover:text-white' : 'text-[#111418] hover:text-black'}`} href="#actors">{t('nav_actors')}</a>
          <a className={`text-sm font-medium leading-normal ${darkMode ? 'text-gray-300 hover:text-white' : 'text-[#111418] hover:text-black'}`} href="#docs">{t('nav_docs')}</a>
          <a className={`text-sm font-medium leading-normal ${darkMode ? 'text-gray-300 hover:text-white' : 'text-[#111418] hover:text-black'}`} href="#team">{t('nav_team')}</a>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className={`rounded-full w-10 h-10 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-[#111418] hover:text-black'}`}
            aria-label={language === 'en' ? t('switch_to_italian') : t('switch_to_english')}
          >
            <Globe className="h-5 w-5" />
          </Button>
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </header>
  );
};
