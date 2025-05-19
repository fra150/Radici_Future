
import { LeafIcon, UsersIcon } from "../IconComponents";

export function Slide11Impact() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Environmental Regeneration */}
        <div className="impact-card">
          <div className="flex flex-col items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
              <LeafIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-center">Rigenerazione Ambientale</h3>
            <p className="text-xs text-center text-muted-foreground">Environmental Regeneration</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span>Rifiuti raccolti</span>
              <span className="font-medium">1.5 ton/mese</span>
            </div>
            <div className="w-full bg-secondary h-1.5 rounded-full">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span>Alberi piantati</span>
              <span className="font-medium">250/anno</span>
            </div>
            <div className="w-full bg-secondary h-1.5 rounded-full">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
        
        {/* Civic Engagement */}
        <div className="impact-card">
          <div className="flex flex-col items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
              <UsersIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-center">Coinvolgimento Civico</h3>
            <p className="text-xs text-center text-muted-foreground">Civic Engagement</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span>Partecipazione cittadini</span>
              <span className="font-medium">+35%</span>
            </div>
            <div className="w-full bg-secondary h-1.5 rounded-full">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span>Volontari in aumento</span>
              <span className="font-medium">+45%</span>
            </div>
            <div className="w-full bg-secondary h-1.5 rounded-full">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
        
        {/* Social Impact */}
        <div className="impact-card">
          <div className="flex flex-col items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-center">Impatto Sociale</h3>
            <p className="text-xs text-center text-muted-foreground">Social Impact</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span>Recidiva criminale</span>
              <span className="font-medium">-30%</span>
            </div>
            <div className="w-full bg-secondary h-1.5 rounded-full">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span>Competenze digitali</span>
              <span className="font-medium">+60%</span>
            </div>
            <div className="w-full bg-secondary h-1.5 rounded-full">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Economy & Innovation */}
        <div className="impact-card">
          <div className="flex flex-col items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-center">Economia & Innovazione</h3>
            <p className="text-xs text-center text-muted-foreground">Economy & Innovation</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Startup collegate</span>
                <span className="font-medium">5+</span>
              </div>
              <div className="w-full bg-secondary h-1.5 rounded-full">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '55%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Posti di lavoro</span>
                <span className="font-medium">25+</span>
              </div>
              <div className="w-full bg-secondary h-1.5 rounded-full">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Risparmio pubblico</span>
                <span className="font-medium">€150K/anno</span>
              </div>
              <div className="w-full bg-secondary h-1.5 rounded-full">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Finanziamenti attratti</span>
                <span className="font-medium">€1.2M</span>
              </div>
              <div className="w-full bg-secondary h-1.5 rounded-full">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reputation */}
        <div className="impact-card">
          <div className="flex flex-col items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-center">Reputazione</h3>
            <p className="text-xs text-center text-muted-foreground">Reputation</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Menzioni media</span>
                <span className="font-medium">100+</span>
              </div>
              <div className="w-full bg-secondary h-1.5 rounded-full">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Premi ricevuti</span>
                <span className="font-medium">3+</span>
              </div>
              <div className="w-full bg-secondary h-1.5 rounded-full">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Richieste adozione</span>
                <span className="font-medium">8 città</span>
              </div>
              <div className="w-full bg-secondary h-1.5 rounded-full">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Conferenze invitate</span>
                <span className="font-medium">12+</span>
              </div>
              <div className="w-full bg-secondary h-1.5 rounded-full">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quote */}
      <div className="mt-8 text-center">
        <p className="italic text-muted-foreground">
          "L'innovazione sociale è come un albero: ha bisogno di radici profonde di inclusione, un tronco di tecnologia solida, 
          e rami di collaborazione per fiorire e dare frutti alla comunità."
        </p>
      </div>
    </div>
  );
}
