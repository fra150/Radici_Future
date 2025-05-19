
import { UsersIcon } from "../IconComponents";

export function Slide7Target() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Education and Youth */}
      <div className="actor-card">
        <div className="icon-circle bg-secondary">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 className="text-xl text-center font-medium mb-2">Educazione e Giovani</h3>
        <p className="text-sm text-center text-muted-foreground mb-4">Education and Youth</p>
        
        <div className="px-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs">Scuole coinvolte</span>
            <span className="text-xs font-medium">12+</span>
          </div>
          <div className="w-full bg-secondary h-2 rounded-full mb-3">
            <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
          
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs">Studenti partecipanti</span>
            <span className="text-xs font-medium">500+</span>
          </div>
          <div className="w-full bg-secondary h-2 rounded-full mb-3">
            <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
          
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs">Progetti STEM avviati</span>
            <span className="text-xs font-medium">25+</span>
          </div>
          <div className="w-full bg-secondary h-2 rounded-full">
            <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>
      </div>
      
      {/* Inmate Reinsertion */}
      <div className="actor-card">
        <div className="icon-circle bg-secondary">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 className="text-xl text-center font-medium mb-2">Reinserimento dei Detenuti</h3>
        <p className="text-sm text-center text-muted-foreground mb-4">Inmate Reinsertion</p>
        
        <div className="px-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs">Istituti penitenziari</span>
            <span className="text-xs font-medium">2+</span>
          </div>
          <div className="w-full bg-secondary h-2 rounded-full mb-3">
            <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
          </div>
          
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs">Detenuti formati</span>
            <span className="text-xs font-medium">50+</span>
          </div>
          <div className="w-full bg-secondary h-2 rounded-full mb-3">
            <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
          
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs">Riduzione recidiva</span>
            <span className="text-xs font-medium">-30%</span>
          </div>
          <div className="w-full bg-secondary h-2 rounded-full">
            <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>
      </div>
      
      {/* Inclusion & Equal Opportunities */}
      <div className="actor-card">
        <div className="icon-circle bg-secondary">
          <UsersIcon className="w-8 h-8" />
        </div>
        <h3 className="text-xl text-center font-medium mb-2">Inclusione & Pari Opportunità</h3>
        <p className="text-sm text-center text-muted-foreground mb-4">Inclusion & Equal Opportunities</p>
        
        <div className="px-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs">Gruppi vulnerabili inclusi</span>
            <span className="text-xs font-medium">5+</span>
          </div>
          <div className="w-full bg-secondary h-2 rounded-full mb-3">
            <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
          
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs">Partecipazione femminile</span>
            <span className="text-xs font-medium">45%+</span>
          </div>
          <div className="w-full bg-secondary h-2 rounded-full mb-3">
            <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
          
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs">Iniziative di supporto</span>
            <span className="text-xs font-medium">10+</span>
          </div>
          <div className="w-full bg-secondary h-2 rounded-full">
            <div className="bg-primary h-2 rounded-full" style={{ width: '55%' }}></div>
          </div>
        </div>
      </div>
      
      {/* Community & Volunteers */}
      <div className="actor-card">
        <div className="icon-circle bg-secondary">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <h3 className="text-xl text-center font-medium mb-2">Comunità e Volontari</h3>
        <p className="text-sm text-center text-muted-foreground mb-4">Community & Volunteers</p>
        
        <div className="px-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs">Quartieri coinvolti</span>
            <span className="text-xs font-medium">8+</span>
          </div>
          <div className="w-full bg-secondary h-2 rounded-full mb-3">
            <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
          </div>
          
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs">Volontari attivi</span>
            <span className="text-xs font-medium">150+</span>
          </div>
          <div className="w-full bg-secondary h-2 rounded-full mb-3">
            <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
          
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs">Eventi comunitari</span>
            <span className="text-xs font-medium">35+</span>
          </div>
          <div className="w-full bg-secondary h-2 rounded-full">
            <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
      
      {/* Ethics note */}
      <div className="md:col-span-2 border border-primary/20 rounded-md p-4 bg-secondary/30 mt-2">
        <h3 className="text-center font-medium mb-2 flex items-center justify-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Supervisione Etica
        </h3>
        <p className="text-sm text-muted-foreground text-center">
          Un Comitato Etico multidisciplinare supervisionerà tutte le attività, garantendo il rispetto delle 
          normative e dei diritti di tutti i partecipanti. Particolare attenzione sarà posta alla privacy dei dati, 
          alla sicurezza dei minori e alla dignità dei detenuti coinvolti.
        </p>
        <p className="text-center mt-4 italic text-sm">
          "L'inclusione sociale non è solo un obiettivo, ma un metodo: tutti possono contribuire al bene comune."
        </p>
      </div>
    </div>
  );
}
