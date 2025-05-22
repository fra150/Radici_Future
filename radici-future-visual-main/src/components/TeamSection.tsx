
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Github, User } from 'lucide-react';

export const TeamSection = () => {
  const { t } = useLanguage();
  
  const teamMembers = [
    {
      name: "Dr. Francesco Bulla",
      role: "Back end developer | AI Engineer | Professional ChromeOS Administrator - Ideatore del progetto",
      email: "150francescobulla@gmail.com"
    },
    {
      name: "Hassaan Ahmed",
      role: "Full stack developer (Francia – partecipa da remoto)",
      email: "hassanhere04@gmail.com"
    },
    {
      name: "Ing. Coppoletta Cristina Maria",
      role: "Docente",
      email: "Coppoletta.mariarc@gmail.com"
    },
    {
      name: "Antonino Paternò",
      role: "Studente dell'I.I.S. Ramacca-Palagonia dell'I.T.T. vincitore C@nnizz@Robot 2024/2025",
      email: "antoninopaterno0@gmail.com"
    },
    {
      name: "Davide Cucuzza",
      role: "Studente dell'I.I.S. Ramacca-Palagonia dell'I.T.T. vincitore C@nnizz@Robot 2023/2024",
      email: "Dgc3008@gmail.com"
    }
  ];
  
  return (
    <section id="team" className="py-12 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Team & Contatti</h2>
          <p className="text-base font-normal leading-normal mb-8 dark:text-gray-300">
            {t('team_subtitle') || "Il nostro team di esperti lavora insieme per realizzare il progetto Radici Future."}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-civic-100 dark:bg-civic-800 rounded-full">
                    <User className="w-6 h-6 text-civic-600 dark:text-civic-300" />
                  </div>
                  <div>
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    {member.email && (
                      <div className="flex items-center mt-2">
                        <Mail className="w-4 h-4 text-civic-500 dark:text-civic-400 mr-1" />
                        <span className="team-email">{member.email}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-8 italic">
            Per qualsiasi informazione aggiuntiva sul progetto o opportunità di collaborazione, non esitate a contattarci via email.
          </p>
        </div>
      </div>
    </section>
  );
};
