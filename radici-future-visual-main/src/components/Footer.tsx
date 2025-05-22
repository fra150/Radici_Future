
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Mail, Book } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer id="contact" className="bg-civic-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Radici Future</h3>
            <p className="text-civic-100 mb-4">
              Catania, Italy
            </p>
            <div className="flex items-center gap-2 text-civic-200">
              <Mail size={18} />
              <span>info@radicifuture.org</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer_contact')}</h3>
            <ul className="space-y-2 text-civic-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer_privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer_terms')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('nav_docs')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-2 text-civic-200 hover:text-white transition-colors">
                  <Github size={18} />
                  <span>{t('footer_github')}</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-civic-200 hover:text-white transition-colors">
                  <Book size={18} />
                  <span>{t('footer_docs')}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-civic-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-civic-300 text-sm mb-4 md:mb-0">
            {t('footer_copyright')}
          </div>
          <div className="flex items-center gap-2 bg-civic-700 px-3 py-1 rounded-full text-white text-sm">
            <span>{t('footer_powered')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
