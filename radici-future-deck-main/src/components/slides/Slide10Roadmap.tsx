
import { TargetIcon } from "../IconComponents";

export function Slide10Roadmap() {
  return (
    <div className="flex flex-col">
      {/* Timeline */}
      <div className="grid grid-cols-4 mb-6">
        {/* Phase 1: Launch */}
        <div className="border-t-4 border-primary pt-4 px-2">
          <div className="text-center mb-2">
            <div className="inline-block w-8 h-8 rounded-full bg-primary text-background text-sm font-medium flex items-center justify-center">1</div>
          </div>
          <h3 className="text-center text-lg font-medium mb-1">Avvio</h3>
          <p className="text-center text-xs text-muted-foreground mb-2">Mesi 1-3</p>
        </div>
        
        {/* Phase 2: Development */}
        <div className="border-t-4 border-primary/70 pt-4 px-2">
          <div className="text-center mb-2">
            <div className="inline-block w-8 h-8 rounded-full bg-primary/70 text-background text-sm font-medium flex items-center justify-center">2</div>
          </div>
          <h3 className="text-center text-lg font-medium mb-1">Sviluppo</h3>
          <p className="text-center text-xs text-muted-foreground mb-2">Mesi 4-6</p>
        </div>
        
        {/* Phase 3: Pilot */}
        <div className="border-t-4 border-primary/50 pt-4 px-2">
          <div className="text-center mb-2">
            <div className="inline-block w-8 h-8 rounded-full bg-primary/50 text-background text-sm font-medium flex items-center justify-center">3</div>
          </div>
          <h3 className="text-center text-lg font-medium mb-1">Pilot</h3>
          <p className="text-center text-xs text-muted-foreground mb-2">Mesi 7-9</p>
        </div>
        
        {/* Phase 4: Expansion */}
        <div className="border-t-4 border-primary/30 pt-4 px-2">
          <div className="text-center mb-2">
            <div className="inline-block w-8 h-8 rounded-full bg-primary/30 text-background text-sm font-medium flex items-center justify-center">4</div>
          </div>
          <h3 className="text-center text-lg font-medium mb-1">Espansione</h3>
          <p className="text-center text-xs text-muted-foreground mb-2">Mesi 10-12</p>
        </div>
      </div>
      
      {/* Timeline content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phase 1: Launch */}
        <div className="actor-card">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-background text-sm font-medium flex items-center justify-center mr-3">1</div>
            <h3 className="font-medium">Avvio (Mesi 1-3)</h3>
          </div>
          <ul className="space-y-2 ml-11">
            <li className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Formalizzazione team e accordi con Comune, scuole e carceri</span>
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Workshop di co-progettazione partecipata</span>
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Sviluppo del prototipo robot LEGO e primo design piattaforma</span>
            </li>
          </ul>
        </div>
        
        {/* Phase 2: Development */}
        <div className="actor-card">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/70 text-background text-sm font-medium flex items-center justify-center mr-3">2</div>
            <h3 className="font-medium">Sviluppo (Mesi 4-6)</h3>
          </div>
          <ul className="space-y-2 ml-11">
            <li className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-0.5 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Implementazione modulo AI e integrazione sensori sui robot</span>
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-0.5 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Sviluppo smart contract blockchain per GreenPoints</span>
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-0.5 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Test in ambienti controllati (scuole e aree carcerarie)</span>
            </li>
          </ul>
        </div>
        
        {/* Phase 3: Pilot */}
        <div className="actor-card">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/50 text-background text-sm font-medium flex items-center justify-center mr-3">3</div>
            <h3 className="font-medium">Pilot (Mesi 7-9)</h3>
          </div>
          <ul className="space-y-2 ml-11">
            <li className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-0.5 text-primary/50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Lancio sperimentazione pubblica in un quartiere di Catania</span>
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-0.5 text-primary/50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Eventi di pulizia con squadre miste e robot in azione</span>
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-0.5 text-primary/50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Dashboard aperta ai cittadini con primi dati live</span>
            </li>
          </ul>
        </div>
        
        {/* Phase 4: Expansion */}
        <div className="actor-card">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/30 text-background text-sm font-medium flex items-center justify-center mr-3">4</div>
            <h3 className="font-medium">Espansione (Mesi 10-12)</h3>
          </div>
          <ul className="space-y-2 ml-11">
            <li className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-0.5 text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Estensione ad altri 2 quartieri/scuole di Catania</span>
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-0.5 text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Valutazione di impatto e rapporto dei benefici</span>
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-0.5 text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Preparazione proposta per finanziamenti UE per fase 2</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Beyond 12 months */}
      <div className="mt-6 border border-primary/20 rounded-md p-4 bg-secondary/30">
        <h3 className="text-center font-medium mb-2">Oltre i 12 mesi</h3>
        <p className="text-sm text-muted-foreground text-center">
          Fase di scalabilità con istituzione formale di Radici Future come associazione/impresa sociale. 
          L'obiettivo a lungo termine: entro 24 mesi Catania diventa un modello replicato in almeno 
          un'altra città italiana e una francese, gettando le basi di un movimento europeo di "rinascita urbana tech".
        </p>
      </div>
    </div>
  );
}
