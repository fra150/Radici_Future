
import { MonitorIcon } from "../IconComponents";

export function Slide9Platform() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
      {/* Dashboard Mockup - 4 columns */}
      <div className="md:col-span-4 border border-primary/30 rounded-lg overflow-hidden">
        {/* Dashboard Header */}
        <div className="bg-primary/10 p-3 border-b border-primary/30 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MonitorIcon className="w-5 h-5" />
            <span className="font-medium">Radici Future Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary/50 rounded-full"></div>
            <div className="w-3 h-3 bg-primary/50 rounded-full"></div>
            <div className="w-3 h-3 bg-primary/50 rounded-full"></div>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="p-4 bg-background">
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="border border-primary/20 rounded p-2 text-center">
              <div className="text-xl font-semibold">128</div>
              <div className="text-xs text-muted-foreground">Robot attivi</div>
            </div>
            <div className="border border-primary/20 rounded p-2 text-center">
              <div className="text-xl font-semibold">523</div>
              <div className="text-xs text-muted-foreground">Utenti</div>
            </div>
            <div className="border border-primary/20 rounded p-2 text-center">
              <div className="text-xl font-semibold">18.5K</div>
              <div className="text-xs text-muted-foreground">GreenPoints</div>
            </div>
            <div className="border border-primary/20 rounded p-2 text-center">
              <div className="text-xl font-semibold">42</div>
              <div className="text-xs text-muted-foreground">Zone</div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="border border-primary/20 rounded-md h-44 mb-4 flex items-center justify-center bg-secondary/30">
            <div className="text-muted-foreground text-sm">Mappa interattiva di Catania</div>
          </div>
          
          {/* Lower Panels */}
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-primary/20 rounded p-3 h-32">
              <div className="text-sm font-medium mb-2">Attività recenti</div>
              <div className="text-xs text-muted-foreground mb-1">• Robot R23 ha completato pulizia in zona Lungomare</div>
              <div className="text-xs text-muted-foreground mb-1">• Studenti Liceo Da Vinci: +42 GreenPoints</div>
              <div className="text-xs text-muted-foreground">• Nuovo albero piantato in Via Etnea</div>
            </div>
            <div className="border border-primary/20 rounded p-3 h-32">
              <div className="text-sm font-medium mb-2">Grafici prestazioni</div>
              <div className="h-16 border-b border-dashed border-primary/30 flex items-end px-1">
                <div className="w-1/5 h-8 bg-primary/30 mx-0.5"></div>
                <div className="w-1/5 h-12 bg-primary/50 mx-0.5"></div>
                <div className="w-1/5 h-6 bg-primary/30 mx-0.5"></div>
                <div className="w-1/5 h-10 bg-primary/40 mx-0.5"></div>
                <div className="w-1/5 h-14 bg-primary/60 mx-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Platform Features - 3 columns */}
      <div className="md:col-span-3 flex flex-col space-y-4">
        {/* Open Data & Privacy */}
        <div className="actor-card p-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Open Data & Privacy
          </h3>
          <p className="text-sm text-muted-foreground ml-7">
            Dati aperti sul miglioramento ambientale, statistiche anonimizzate, trasparenza completa. 
            Privacy by design con consenso informato e pieno rispetto GDPR. 
            Dati personali protetti e minimizzati.
          </p>
        </div>
        
        {/* SPID Access */}
        <div className="actor-card p-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Accessi con SPID
          </h3>
          <p className="text-sm text-muted-foreground ml-7">
            Autenticazione sicura tramite SPID per accessi alle aree riservate. 
            Differenti livelli di autorizzazione: studenti, educatori, operatori penitenziari, 
            amministratori comunali, cittadini.
          </p>
        </div>
        
        {/* Monitoring & Feedback */}
        <div className="actor-card p-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Monitoraggio & Feedback
          </h3>
          <p className="text-sm text-muted-foreground ml-7">
            Dashboard in tempo reale per monitorare attività e impatto. Sistema di feedback 
            multi-stakeholder con questionari e valutazioni. 
            Analytics avanzati per misurare impatto ambientale e sociale.
          </p>
        </div>
        
        {/* Institutional Portal */}
        <div className="actor-card p-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Portale Istituzionale
          </h3>
          <p className="text-sm text-muted-foreground ml-7">
            Integrazione con portali comunali, autorizzazioni automatizzate, 
            accesso per le forze dell'ordine e supervisori. 
            Reports periodici per amministratori locali ed europei.
          </p>
        </div>
      </div>
    </div>
  );
}
