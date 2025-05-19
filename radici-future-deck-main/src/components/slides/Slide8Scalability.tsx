
import { MapIcon } from "../IconComponents";

export function Slide8Scalability() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
      {/* Map Visualization - 3 columns */}
      <div className="md:col-span-3 flex flex-col items-center justify-center">
        <div className="relative w-full h-80 border border-primary/30 rounded-lg bg-secondary/30 p-4">
          {/* Simplified Europe map */}
          <div className="w-full h-full relative">
            {/* Italy */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/4 -translate-y-1/4">
              <div className="w-24 h-36 border-2 border-primary/50 rounded-md opacity-50"></div>
              
              {/* Catania dot */}
              <div className="absolute bottom-4 right-6">
                <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
                <div className="absolute top-4 text-xs font-medium">Catania</div>
              </div>
            </div>
            
            {/* France */}
            <div className="absolute left-1/3 top-1/3">
              <div className="w-28 h-32 border-2 border-primary/50 rounded-md opacity-50"></div>
              
              {/* French city dot */}
              <div className="absolute top-10 left-10">
                <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
                <div className="absolute top-4 text-xs font-medium">Marsiglia</div>
              </div>
            </div>
            
            {/* Connection line */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M170 220 L120 120" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
              <path d="M170 220 L120 120" stroke="currentColor" strokeWidth="2" className="animate-pulse opacity-50" />
            </svg>
          </div>
        </div>
        
        <div className="flex justify-between w-full mt-8">
          <div className="text-center">
            <div className="text-xl font-semibold">2025</div>
            <div className="text-sm text-muted-foreground">Avvio</div>
          </div>
          
          <div className="text-center">
            <div className="text-xl font-semibold">2027</div>
            <div className="text-sm text-muted-foreground">Espansione</div>
          </div>
          
          <div className="text-center">
            <div className="text-xl font-semibold">2030</div>
            <div className="text-sm text-muted-foreground">Maturità</div>
          </div>
        </div>
      </div>
      
      {/* Funding & Growth Strategy - 4 columns */}
      <div className="md:col-span-4 flex flex-col space-y-4">
        {/* EU Funding Opportunities */}
        <div className="actor-card p-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            Allineamento UE
          </h3>
          <ul className="ml-7 list-disc text-sm text-muted-foreground space-y-2">
            <li><strong>Green Deal Europeo</strong> - Progetti di sostenibilità urbana</li>
            <li><strong>Horizon Europe</strong> - Programmi per città intelligenti e inclusive</li>
            <li><strong>NextGenerationEU</strong> - Fondi per green economy locale</li>
            <li><strong>Interreg</strong> - Programmi di cooperazione Italia-Francia</li>
          </ul>
        </div>
        
        {/* Italia-Francia Partnership */}
        <div className="actor-card p-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <MapIcon className="w-5 h-5" />
            Collaborazione Transfrontaliera
          </h3>
          <ul className="ml-7 list-disc text-sm text-muted-foreground space-y-2">
            <li>Ponte con la Francia grazie alla presenza di Hassaan nel team</li>
            <li>Progetto pilota gemello in una città francese (Marsiglia o Montpellier)</li>
            <li>Scambio attivo tra studenti catanesi e francesi</li>
            <li>Condivisione di best practice tra istituti penitenziari europei</li>
          </ul>
        </div>
        
        {/* Growth Timeline */}
        <div className="actor-card p-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Scalabilità Internazionale
          </h3>
          <div className="ml-7">
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                <div className="w-1/5 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-primary">2025: Pilota a Catania</span>
                <span className="text-muted-foreground">Modello locale</span>
              </div>
            </div>
            
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                <div className="w-2/5 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-primary">2027: Italia-Francia</span>
                <span className="text-muted-foreground">Partnership bilaterale</span>
              </div>
            </div>
            
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                <div className="w-4/5 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-primary">2030: Radici Future Network</span>
                <span className="text-muted-foreground">Rete europea di città</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
