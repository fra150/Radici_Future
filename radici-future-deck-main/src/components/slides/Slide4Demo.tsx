
import { RobotIcon } from "../IconComponents";

export function Slide4Demo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
      {/* Robot Illustration - 3 columns */}
      <div className="md:col-span-3 flex flex-col items-center justify-center">
        <div className="relative w-64 h-64 border-4 border-dashed border-primary/20 rounded-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full animate-pulse opacity-10 bg-primary"></div>
          
          <div className="relative w-40 h-40">
            {/* Robot Body */}
            <div className="absolute w-24 h-32 bg-secondary border border-primary/30 rounded-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Robot Eyes */}
              <div className="absolute w-4 h-4 bg-primary rounded-full top-4 left-4"></div>
              <div className="absolute w-4 h-4 bg-primary rounded-full top-4 right-4"></div>
              
              {/* Robot Mouth */}
              <div className="absolute w-12 h-1 bg-primary rounded top-14 left-1/2 -translate-x-1/2"></div>
              
              {/* Robot Panel */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-primary/10 border border-primary/30 rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Robot Wheels */}
            <div className="absolute w-6 h-6 bg-primary rounded-full bottom-0 left-4"></div>
            <div className="absolute w-6 h-6 bg-primary rounded-full bottom-0 right-4"></div>
            
            {/* Robot Antenna */}
            <div className="absolute w-1 h-6 bg-primary top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-3 h-3 bg-primary rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-full"></div>
          </div>
        </div>
        <p className="text-center font-medium mt-4">Robot LEGO Mindstorms</p>
        <p className="text-center text-sm text-muted-foreground">Prototipo dimostrativo dell'hackathon</p>
      </div>
      
      {/* Demo Details - 4 columns */}
      <div className="md:col-span-4 flex flex-col space-y-4">
        {/* Prototype Description */}
        <div className="actor-card p-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <RobotIcon className="w-5 h-5" />
            Prototipo Dimostrativo
          </h3>
          <p className="text-sm text-muted-foreground">
            Robot LEGO Mindstorms equipaggiato con sensori, videocamera e pinze. 
            Simula su piccola scala le attività di Radici Future.
          </p>
        </div>
        
        {/* Scenario */}
        <div className="actor-card p-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Scenario della Demo
          </h3>
          <p className="text-sm text-muted-foreground">
            Il robot riconosce un rifiuto (per esempio una bottiglietta) sul suolo, lo raccoglie autonomamente e lo deposita in un'area di riciclo. 
            Può anche "piantare" simbolicamente un seme in vaso, rappresentando la riforestazione urbana.
          </p>
        </div>
        
        {/* Technologies */}
        <div className="actor-card p-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Tecnologie Mostrate
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-xs mt-1 font-medium">Intelligenza Artificiale</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <p className="text-xs mt-1 font-medium">Telecontrollo remoto</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-xs mt-1 font-medium">Sensori ambientali</p>
            </div>
          </div>
        </div>
        
        {/* From Game to Reality */}
        <div className="actor-card p-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Dal Gioco alla Realtà
          </h3>
          <p className="text-sm text-muted-foreground">
            Sebbene realizzato con LEGO, è più di un gioco: è un modello didattico che ispira. 
            Ci fa immaginare robot capaci di pulire le strade di Catania o piantare alberelli 
            nei parchi, applicando la stessa logica mostrata nella demo.
          </p>
        </div>
      </div>
    </div>
  );
}
