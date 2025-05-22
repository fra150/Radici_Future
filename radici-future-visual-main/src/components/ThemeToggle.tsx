
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  const { t } = useLanguage();
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleDarkMode}
      className="rounded-full w-10 h-10"
      aria-label={darkMode ? t('switch_to_light') : t('switch_to_dark')}
    >
      {darkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};
