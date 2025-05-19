
import { EducationIcon, GovIcon, JailIcon, RobotIcon, UsersIcon } from "../IconComponents";

export function Slide3Actors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Robot Intelligenti */}
      <div className="actor-card">
        <div className="icon-circle bg-secondary">
          <RobotIcon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl text-center font-medium mb-2">Robot Intelligenti</h3>
        <p className="text-sm text-center text-muted-foreground mb-1">Intelligent Robots</p>
        <div className="w-16 h-0.5 bg-primary/30 mx-auto mb-4"></div>
        <p className="text-muted-foreground text-sm">
          Piccoli robot "lego" mobili dotati di AI svolgono compiti ambientali (raccolta rifiuti, piantumazione, monitoraggio) in autonomia o teleoperati. Sono il "braccio" tecnologico del progetto.
        </p>
      </div>
      
      {/* Studenti & Scuole */}
      <div className="actor-card">
        <div className="icon-circle bg-secondary">
          <EducationIcon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl text-center font-medium mb-2">Studenti & Scuole</h3>
        <p className="text-sm text-center text-muted-foreground mb-1">Students & Schools</p>
        <div className="w-16 h-0.5 bg-primary/30 mx-auto mb-4"></div>
        <p className="text-muted-foreground text-sm">
          Coinvolti attraverso programmi di <em>robotica educativa</em>. Gli studenti progettano e controllano i robot, imparando competenze STEM e valori civici. Le scuole diventano laboratori di sostenibilità.
        </p>
      </div>
      
      {/* Detenuti & Carceri */}
      <div className="actor-card">
        <div className="icon-circle bg-secondary">
          <JailIcon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl text-center font-medium mb-2">Detenuti & Carceri</h3>
        <p className="text-sm text-center text-muted-foreground mb-1">Inmates & Prisons</p>
        <div className="w-16 h-0.5 bg-primary/30 mx-auto mb-4"></div>
        <p className="text-muted-foreground text-sm">
          Istituti penitenziari partecipano con programmi riabilitativi hi-tech. Solo i detenuti selezionati meritevoli di giustizia e reinserimento contribuiscono a distanza (pilotando robot tramite Internet) o in attività esterne controllate, acquisendo abilità utili.
        </p>
      </div>
      
      {/* Comune & Istituzioni */}
      <div className="actor-card">
        <div className="icon-circle bg-secondary">
          <GovIcon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl text-center font-medium mb-2">Comune & Istituzioni</h3>
        <p className="text-sm text-center text-muted-foreground mb-1">Municipality & Institutions</p>
        <div className="w-16 h-0.5 bg-primary/30 mx-auto mb-4"></div>
        <p className="text-muted-foreground text-sm">
          Il Comune di Catania patrocina e supervisiona con un comitato etico. Giudici di sorveglianza e tutor monitorano il coinvolgimento dei detenuti, garantendo che ogni passo rispetti principi etici e legalità.
        </p>
      </div>
      
      <div className="md:col-span-2 mt-4 text-center">
        <div className="w-full flex items-center justify-center">
          <UsersIcon className="w-10 h-10 text-primary animate-pulse" />
        </div>
        <p className="text-muted-foreground text-sm mt-2">
          "La collaborazione tra diversi attori sociali è la vera forza del cambiamento sostenibile."
        </p>
      </div>
    </div>
  );
}
