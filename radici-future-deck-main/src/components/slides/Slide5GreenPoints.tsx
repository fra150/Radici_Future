
import { LeafIcon, TokenIcon } from "../IconComponents";

export function Slide5GreenPoints() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left side - Token illustration */}
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-64 h-64 rounded-full bg-secondary flex items-center justify-center mb-6">
          <div className="w-48 h-48 rounded-full border-4 border-primary flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full animate-pulse opacity-10 bg-primary"></div>
            <LeafIcon className="w-24 h-24 text-primary" />
          </div>
        </div>
        <h3 className="text-2xl font-medium mb-2">GreenPoints</h3>
        <p className="text-center text-sm text-muted-foreground">
          Incentivo digitale per azioni sostenibili
          <br />
          <span className="text-xs">Digital incentive for sustainable actions</span>
        </p>
      </div>
      
      {/* Right side - Flow diagram */}
      <div className="flex flex-col space-y-4">
        {/* How to earn */}
        <div className="actor-card p-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <TokenIcon className="w-5 h-5" />
            Come si guadagnano
          </h3>
          <div className="ml-7">
            <ul className="list-disc text-sm text-muted-foreground space-y-2">
              <li>Robot gestiti da studenti raccolgono rifiuti (+1 punto per oggetto)</li>
              <li>Detenuti tele-operano robot per piantare alberi (+5 punti per pianta)</li>
              <li>Partecipazione ad attività di manutenzione urbana (+10 punti per sessione)</li>
              <li>Miglioramenti e innovazioni tecniche ai robot (+15 punti)</li>
            </ul>
          </div>
        </div>
        
        {/* How they are recorded */}
        <div className="actor-card p-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            Come vengono registrati
          </h3>
          <div className="ml-7">
            <ul className="list-disc text-sm text-muted-foreground space-y-2">
              <li>Sistema blockchain trasparente e verificabile</li>
              <li>Dashboard pubblica accessibile a tutti</li>
              <li>Validazione multi-attore (studenti, educatori, comune)</li>
              <li>Registrazione automatica tramite sensori dei robot</li>
            </ul>
          </div>
        </div>
        
        {/* How they are used */}
        <div className="actor-card p-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Come vengono utilizzati
          </h3>
          <div className="ml-7">
            <ul className="list-disc text-sm text-muted-foreground space-y-2">
              <li>Scuole: materiali didattici, visite culturali, progetti speciali</li>
              <li>Detenuti: crediti formativi per programmi di reinserimento</li>
              <li>Quartieri: miglioramenti urbani decisi dalla comunità</li>
              <li>Riconoscimenti pubblici per i migliori contributori</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Footer - Beneficiaries */}
      <div className="md:col-span-2 grid grid-cols-3 gap-4 mt-4">
        <div className="p-3 border rounded-md flex flex-col items-center text-center">
          <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <h4 className="text-sm font-medium">Scuole</h4>
          <p className="text-xs text-muted-foreground">36% dei punti</p>
        </div>
        
        <div className="p-3 border rounded-md flex flex-col items-center text-center">
          <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <h4 className="text-sm font-medium">Detenuti</h4>
          <p className="text-xs text-muted-foreground">28% dei punti</p>
        </div>
        
        <div className="p-3 border rounded-md flex flex-col items-center text-center">
          <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <h4 className="text-sm font-medium">Quartieri</h4>
          <p className="text-xs text-muted-foreground">36% dei punti</p>
        </div>
      </div>
    </div>
  );
}
