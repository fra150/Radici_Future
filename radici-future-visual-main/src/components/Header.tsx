
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, Globe, X } from 'lucide-react';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'it' : 'en');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav_home', href: '#hero' },
    { key: 'nav_about', href: '#about' },
    { key: 'nav_how_it_works', href: '#how-it-works' },
    { key: 'nav_actors', href: '#actors' },
    { key: 'nav_ethics', href: '#ethics' },
    { key: 'nav_docs', href: '#docs' },
    { key: 'nav_contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="font-bold text-2xl text-civic-700">
            Radici Future
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-civic-600 hover:text-civic-800 transition-colors"
            >
              {t(item.key)}
            </a>
          ))}
          <Button 
            variant="ghost" 
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <Globe size={16} />
            {t('lang_switch')}
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={toggleLanguage}
            size="sm"
            className="flex items-center gap-1"
          >
            <Globe size={16} />
          </Button>
          <Button variant="ghost" onClick={toggleMenu} size="icon">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-civic-600 hover:text-civic-800 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
