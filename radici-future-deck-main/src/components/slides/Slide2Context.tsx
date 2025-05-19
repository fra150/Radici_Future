
import { CityIcon } from "../IconComponents";

export function Slide2Context() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Sfida Urbana */}
      <div className="actor-card">
        <div className="icon-circle bg-secondary">
          <CityIcon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl text-center font-medium mb-3">Sfida Urbana</h3>
        <p className="text-muted-foreground text-sm">
          Catania affronta <strong>degrado ambientale</strong> (rifiuti, spazi verdi trascurati) e <strong>tensioni sociali</strong> (scarsa inclusione, recidiva criminale). Le risorse pubbliche sono limitate, serve un approccio innovativo.
        </p>
      </div>
      
      {/* Visione */}
      <div className="actor-card">
        <div className="icon-circle bg-secondary">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl text-center font-medium mb-3">Visione Radici Future</h3>
        <p className="text-muted-foreground text-sm">
          Immaginiamo una <strong>rinascita urbana</strong> in cui tecnologia e comunità collaborano. AI e robotica diventano strumenti per migliorare l'ambiente cittadino, mentre <strong>studenti</strong> e <strong>detenuti</strong> cooperano.
        </p>
      </div>
      
      {/* Obiettivo */}
      <div className="actor-card">
        <div className="icon-circle bg-secondary">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <h3 className="text-xl text-center font-medium mb-3">Obiettivo Ispiratore</h3>
        <p className="text-muted-foreground text-sm">
          "Radici Future" vuole piantare oggi le radici di un futuro migliore: città più verde e vivibile, cittadini attivi e inclusi, tecnologia al servizio del bene comune. Un modello replicabile da Catania al mondo.
        </p>
      </div>
      
      <div className="md:col-span-3 mt-6 text-center italic text-muted-foreground">
        <p>"Non ereditiamo la Terra dai nostri antenati; la prendiamo in prestito dai nostri figli."</p>
      </div>
    </div>
  );
}
