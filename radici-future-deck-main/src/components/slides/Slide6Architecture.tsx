
import { BrainIcon, DatabaseIcon, MonitorIcon, RobotIcon } from "../IconComponents";

export function Slide6Architecture() {
  return (
    <div className="flex flex-col items-center">
      {/* Architecture Diagram */}
      <div className="w-full max-w-3xl bg-secondary/50 rounded-lg p-6 relative">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M400 100 L400 200 L150 300" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M400 100 L400 200 L650 300" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M400 100 L400 200" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M150 300 L400 400" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M400 200 L400 400" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M650 300 L400 400" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
        </svg>
        
        {/* AI Central */}
        <div className="relative z-10 flex flex-col items-center mb-16">
          <div className="w-20 h-20 rounded-full bg-card border flex items-center justify-center mb-2">
            <BrainIcon className="w-10 h-10" />
          </div>
          <h3 className="text-sm font-medium">AI Intelligente</h3>
          <p className="text-xs text-muted-foreground">Intelligent AI</p>
        </div>
        
        {/* Second Row */}
        <div className="relative z-10 flex justify-center mb-16">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-card border flex items-center justify-center mb-2">
              <RobotIcon className="w-10 h-10" />
            </div>
            <h3 className="text-sm font-medium">Robotica IoT</h3>
            <p className="text-xs text-muted-foreground">IoT Robotics</p>
          </div>
        </div>
        
        {/* Third Row */}
        <div className="relative z-10 flex justify-between mb-16">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-card border flex items-center justify-center mb-2">
              <DatabaseIcon className="w-10 h-10" />
            </div>
            <h3 className="text-sm font-medium text-center">Blockchain & Database</h3>
            <p className="text-xs text-muted-foreground">Blockchain & Database</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-card border flex items-center justify-center mb-2">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-center">Streaming 3D</h3>
            <p className="text-xs text-muted-foreground">3D Streaming</p>
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="relative z-10 flex justify-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-card border flex items-center justify-center mb-2">
              <MonitorIcon className="w-10 h-10" />
            </div>
            <h3 className="text-sm font-medium">Interfacce e API</h3>
            <p className="text-xs text-muted-foreground">Interfaces and APIs</p>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-1">
            <BrainIcon className="w-5 h-5" />
          </div>
          <p className="text-xs text-center">Model training, visione computerizzata</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-1">
            <RobotIcon className="w-5 h-5" />
          </div>
          <p className="text-xs text-center">Fleet di robot, sensori, attuatori</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-1">
            <DatabaseIcon className="w-5 h-5" />
          </div>
          <p className="text-xs text-center">GreenPoints, storage dati sicuro</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-1">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-xs text-center">Video in realtime, AR/VR per operatori</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-1">
            <MonitorIcon className="w-5 h-5" />
          </div>
          <p className="text-xs text-center">Dashboard, controllo remoto</p>
        </div>
      </div>
    </div>
  );
}
