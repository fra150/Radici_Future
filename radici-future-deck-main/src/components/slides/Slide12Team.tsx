
import { RootIcon } from "../IconComponents";

export function Slide12Team() {
  return (
    <div className="flex flex-col items-center">
      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-10">
        {/* Team Member 1 */}
        <div className="actor-card flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-3">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="font-medium text-base">Dr. Francesco Bulla</h3>
          <p className="text-xs text-muted-foreground mb-2">Back-end Developer | AI Engineer</p>
          <p className="text-xs">Ideatore del progetto</p>
        </div>
        
        {/* Team Member 2 */}
        <div className="actor-card flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-3">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="font-medium text-base">Hassaan Ahmed</h3>
          <p className="text-xs text-muted-foreground mb-2">Full-stack Developer</p>
          <p className="text-xs">hassanhere04@gmail.com</p>
          <p className="text-xs text-muted-foreground">(Francia - partecipa da remoto)</p>
        </div>
        
        {/* Team Member 3 */}
        <div className="actor-card flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-3">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="font-medium text-base">Ing. Cristina Maria Coppoletta</h3>
          <p className="text-xs text-muted-foreground mb-2">Docente</p>
          <p className="text-xs">Coppoletta.mariarc@gmail.com</p>
        </div>
        
        {/* Team Member 4 */}
        <div className="actor-card flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-3">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="font-medium text-base">Antonino Paternò</h3>
          <p className="text-xs text-muted-foreground mb-2">Vincitore C@nnizz@Robot 2024/2025</p>
          <p className="text-xs">antoninopaterno0@gmail.com</p>
        </div>
        
        {/* Team Member 5 */}
        <div className="actor-card flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-3">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="font-medium text-base">Davide Cucuzza</h3>
          <p className="text-xs text-muted-foreground mb-2">Vincitore C@nnizz@Robot 2024/2025</p>
          <p className="text-xs">Dgc3008@gmail.com</p>
        </div>
      </div>
      
      {/* Logo and contact */}
      <div className="flex flex-col items-center w-full max-w-lg text-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-3">
          <RootIcon className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-medium mb-1">Radici Future</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Per qualsiasi informazione aggiuntiva sul progetto o opportunità di collaborazione, 
          non esitate a contattarci via email.
        </p>
        <div className="text-sm">Grazie</div>
      </div>
    </div>
  );
}
