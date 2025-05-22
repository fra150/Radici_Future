import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Footer } from '@/components/Footer';
import { NetworkDiagram } from '@/components/NetworkDiagram';
import { TeamSection } from '@/components/TeamSection';
import { CustomHeader } from '@/components/CustomHeader';
import { Button } from '@/components/ui/button';
import { 
  ArrowDown, Download, School, Users, Building2, 
  Globe, Shield, Building, Code, File, QrCode, ShieldCheck 
} from 'lucide-react';

interface IndexProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Index: React.FC<IndexProps> = ({ darkMode, toggleDarkMode }) => {
  const { t } = useLanguage();

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`} style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}>
      <CustomHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="@container max-w-[960px] mx-auto">
            <div className="@[480px]:p-4">
              <div 
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6XqGQe6dofpCxd_q0I00Rp6RwrxzNbyUO0KRkBL4Kuy3Qf74XER66_BJ0rTIZzBK6u58awNI8fNV4cYpg0ZMYfZrKokLtVwpghjg-aYXrFlZxudLPyEpx2Gk-mA7u88quZo-5NSoJJnxA60qa-Jq_INGU3DLBokzQucD6x0PZsQRDIVqKDA2xBRLnI251nOPQORNZrQFGG1qZ8So9D0yHmgXqKDWqTOQp0q1FeLJBSt3votIcKmUv699M4Kv0nAqe97_x-ya3qBvF")' }}
              >
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    <span className="highlight">Radici Future</span>
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    {t('hero_subtitle')}
                  </h2>
                </div>
                <Button 
                  className="min-w-[84px] max-w-[480px] cursor-pointer overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                >
                  <a href="#how-it-works" className="flex items-center gap-2">
                    {t('hero_cta')}
                    <ArrowDown size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-[960px] mx-auto">
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">{t('about_title')}</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1">
              {t('about_description')}
            </p>
            
            <div className="bg-civic-50 border border-civic-200 rounded-xl p-6 md:p-8 shadow-md my-8">
              <h3 className="text-xl font-semibold text-civic-700 mb-4">Catania</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <School className="w-8 h-8 text-civic-500 mb-2" />
                  <span className="text-sm text-center">{t('actor_schools')}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <Users className="w-8 h-8 text-civic-500 mb-2" />
                  <span className="text-sm text-center">{t('actor_citizens')}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <Building2 className="w-8 h-8 text-civic-500 mb-2" />
                  <span className="text-sm text-center">{t('actor_prisons')}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm col-span-2 md:col-span-3">
                  <Globe className="w-10 h-10 text-civic-600 mb-2" />
                  <span className="text-center font-medium text-civic-700">{t('actor_ai')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 px-4 bg-civic-50">
        <div className="container mx-auto">
          <div className="max-w-[960px] mx-auto">
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">{t('how_it_works_title')}</h2>
            <p className="text-[#111418] text-base font-normal leading-normal mb-8">
              {t('how_it_works_subtitle')}
            </p>
            
            <NetworkDiagram />
            
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4 mt-12">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAv1YgOFrRXQxViwsm1vM6TcPOc_1ly0n7Kxd7zdlxv2y8gmgScXdJ5juf-Q91eCgfLxv4HSPsb0kblv_y7ZWiwEM20oKqYmTiaeQvRWZVRDO2p81v8tjePQxIcucpWS36LCjbrAgvtVNVd7LycuHhqT_k10o4LzE1KBsdL6qmHMn_inuVHXCp9NbOcBfrHsnJatlS2pgChO9PH1YdcGSbWMPRrrrUib1YtjTXayHqUQkkYwPPXPWjIzsEN5jr7E90bCcmIs0NrntUT")' }}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">{t('actor_schools')}</p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">{t('actor_schools_desc')}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNbLWkxRjHla2oeFsXa6V5hkIYezkF-PmyFtvsoTLBMbjiXqaUxotz6d_JLfuZtSQZGIZf0fL4QVSoklNSszz-_qpAkrcOc9gKnpEk6hLmjCHHAogTdDDaCWeT8jptGcJB0PSYzBITEC6ecG2Eqfxm5Q3su6f7MNPd4j_yk3Al0O2w-r-XvD9ZpU3cXgQD305CGj36Vc06dLDzxteqnLGJy-4fSQAiOYwJKaF6EPKFvSCdr7fl65Ia32MAaaFtAHpEbTfxLKHmIHfr")' }}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">{t('actor_prisons')}</p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">{t('actor_prisons_desc')}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-bEkMze7E9LV0Us2wdagiwYxMCVG9Z54IjlPujy5_kVatsQ0xgGxKDtOmzNDa2HGENle9NszMFOr0jFHCpQCyPqw3peSpk0rhGDBkoDLRxw4dys4pWsfJWdPpNbI6AEC_Y3XJrSFNMrOnOzGi95PesuhamwqtmPSPtZRAqUBdrMC92i2sjeM8tIfSkwrWx0HbxVOE9uObB74nZvzs3jFZpW9ZLKH9rgT-Epit90-NE5Rg3ZGC_HAe_FMS72slZ623y3ShxmcQI7Si")' }}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">{t('actor_ai')}</p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">{t('actor_ai_desc')}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-_xwQjvcWvGrRL8i4dmOI7GIpD7K1l0hibevqIJyymPgRhJo0buN7631HBFasHsB8L3ewx2NpcDavFlUGIaq18VpcFpTXDO3qLjYgCt8RVuXDso54wl1D3O-vVC_TnSl-MFtJJyMqQHOQMj9NQK3hpTlQZRskjwcYmN7uLgCf0V7DXJI_ZppoCXsB49Yl-hzlJG5h9U_H_P4He4PHpo7hI99YOqOIIluRgw_G1xvCphUNSw0Ro-nge596tH3VZ8_1z844gVCzb2rk")' }}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">Civic Data</p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">Open civic data is integrated to provide a comprehensive view of environmental conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Network Actors Section */}
      <section id="actors" className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-[960px] mx-auto">
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">{t('actors_title')}</h2>
            <p className="text-base font-normal leading-normal mb-8">{t('actors_subtitle')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-civic-50 p-6 rounded-lg border border-civic-200 shadow-md">
                <Globe className="w-12 h-12 text-civic-600 mb-4" />
                <h3 className="text-xl font-bold text-civic-700 mb-2">{t('actor_ai')}</h3>
                <p className="text-gray-600">{t('actor_ai_desc')}</p>
              </div>
              
              <div className="bg-nature-50 p-6 rounded-lg border border-nature-200 shadow-md">
                <School className="w-12 h-12 text-nature-600 mb-4" />
                <h3 className="text-xl font-bold text-nature-700 mb-2">{t('actor_schools')}</h3>
                <p className="text-gray-600">{t('actor_schools_desc')}</p>
              </div>
              
              <div className="bg-nature-50 p-6 rounded-lg border border-nature-200 shadow-md">
                <Users className="w-12 h-12 text-nature-600 mb-4" />
                <h3 className="text-xl font-bold text-nature-700 mb-2">{t('actor_citizens')}</h3>
                <p className="text-gray-600">{t('actor_citizens_desc')}</p>
              </div>
              
              <div className="bg-nature-50 p-6 rounded-lg border border-nature-200 shadow-md">
                <Building2 className="w-12 h-12 text-nature-600 mb-4" />
                <h3 className="text-xl font-bold text-nature-700 mb-2">{t('actor_prisons')}</h3>
                <p className="text-gray-600">{t('actor_prisons_desc')}</p>
              </div>
              
              <div className="bg-civic-50 p-6 rounded-lg border border-civic-200 shadow-md">
                <div className="w-12 h-12 flex items-center justify-center text-civic-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-civic-700 mb-2">{t('actor_robots')}</h3>
                <p className="text-gray-600">{t('actor_robots_desc')}</p>
              </div>
              
              <div className="bg-civic-50 p-6 rounded-lg border border-civic-200 shadow-md">
                <Building className="w-12 h-12 text-civic-600 mb-4" />
                <h3 className="text-xl font-bold text-civic-700 mb-2">{t('actor_municipality')}</h3>
                <p className="text-gray-600">{t('actor_municipality_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ethics & Access Section */}
      <section id="ethics" className="py-12 px-4 bg-gradient-to-br from-civic-50 to-nature-50">
        <div className="container mx-auto">
          <div className="max-w-[960px] mx-auto">
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">{t('ethics_title')}</h2>
            <p className="text-base font-normal leading-normal mb-8">{t('ethics_subtitle')}</p>
            
            <div className="@container max-w-[960px] mx-auto">
              <div 
                className="flex min-h-[320px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKX16neLjyd0IyhyZDaFM3ZsDd6RMOP4rYjYkZCfrVn2JqCWAMYj-6BII35x_ctGxkEge2lxhqYBx5eYmG9W4TnilpoGvRFREe8gRdtgi8zbkqsd4ivXBXlu2evUstX2f8-Umsk_EShwE9RxdhZv0zw_rzCmyE7G2OtJHcILiacJMt4e2W9jeYfDYeSuW84qJpbkIqs2tWwHvuntL54kDbWExj19r4zjGRbLmQdq9FRrc_w0wGOEcGCrb7CFMfdBGhAa4AWN4_tQAQ")' }}
              >
                <div className="flex flex-col gap-2 text-left">
                  <h2 className="text-white text-3xl font-bold leading-tight">
                    Join the Movement for a Greener Future
                  </h2>
                  <p className="text-white text-base">
                    Our platform empowers citizens to actively participate in environmental initiatives.
                  </p>
                </div>
                <Button 
                  className="min-w-[84px] max-w-[480px] cursor-pointer overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold"
                >
                  <span className="truncate">Get Started</span>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ShieldCheck className="w-12 h-12 text-civic-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-civic-700 mb-2 text-center">{t('access_title')}</h3>
                <p className="text-gray-600 text-center">{t('access_desc')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Building className="w-12 h-12 text-civic-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-civic-700 mb-2 text-center">{t('oversight_title')}</h3>
                <p className="text-gray-600 text-center">{t('oversight_desc')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 mx-auto flex items-center justify-center text-civic-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-civic-700 mb-2 text-center">{t('privacy_title')}</h3>
                <p className="text-gray-600 text-center">{t('privacy_desc')}</p>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold text-civic-700 mb-4">Authentication Methods</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-civic-600 flex items-center justify-center rounded-lg bg-civic-50 p-3">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-800 text-base font-medium leading-normal">SPID</p>
                    <p className="text-gray-600 text-sm font-normal leading-normal">Secure and reliable authentication method</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-civic-600 flex items-center justify-center rounded-lg bg-civic-50 p-3">
                    <QrCode size={24} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-800 text-base font-medium leading-normal">QR-ID</p>
                    <p className="text-gray-600 text-sm font-normal leading-normal">Quick and easy access using QR codes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Documentation Area */}
      <section id="docs" className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-[960px] mx-auto">
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">{t('docs_title')}</h2>
            <p className="text-base font-normal leading-normal mb-8">{t('docs_subtitle')}</p>
            
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
                <Download size={24} />
                <h2 className="text-[#111418] text-base font-bold leading-tight">{t('docs_datasets')}</h2>
              </div>
              
              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
                <Code size={24} />
                <h2 className="text-[#111418] text-base font-bold leading-tight">{t('docs_api')}</h2>
              </div>
              
              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
                <File size={24} />
                <h2 className="text-[#111418] text-base font-bold leading-tight">{t('docs_access')}</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-civic-700 mb-2">{t('docs_api')}</h3>
                <p className="text-gray-600 mb-6">{t('docs_api_desc')}</p>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Download size={16} />
                  {t('docs_download')}
                </Button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-civic-700 mb-2">{t('docs_datasets')}</h3>
                <p className="text-gray-600 mb-6">{t('docs_datasets_desc')}</p>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Download size={16} />
                  {t('docs_download')}
                </Button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-civic-700 mb-2">{t('docs_access')}</h3>
                <p className="text-gray-600 mb-6">{t('docs_access_desc')}</p>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Download size={16} />
                  {t('docs_download')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <TeamSection />
      
      <Footer />
    </div>
  );
};

export default Index;
