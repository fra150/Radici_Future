
import { cn } from "@/lib/utils";
import React from "react";

interface SlideProps {
  id: string;
  title: string;
  subtitle: string;
  number?: number;
  children: React.ReactNode;
  className?: string;
}

export function Slide({ id, title, subtitle, number, children, className }: SlideProps) {
  return (
    <div id={id} className={cn("slide animate-fade-in", className)}>
      {number !== undefined && (
        <div className="number-indicator">{number}</div>
      )}
      
      {/* Background shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="shape w-96 h-96 rounded-full top-0 -left-48 bg-primary"></div>
        <div className="shape w-64 h-64 rounded-full bottom-0 -right-32 bg-primary"></div>
        <div className="shape w-48 h-48 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary"></div>
      </div>
      
      <div className="w-full max-w-5xl mx-auto z-10">
        <div className="mb-10 text-center">
          <h2 className="slide-title">{title}</h2>
          <p className="slide-subtitle">{subtitle}</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="w-full">
          {children}
        </div>
        
        {/* Footer logo */}
        <div className="absolute bottom-4 left-4 flex items-center opacity-50">
          <div className="text-xs">Radici Future</div>
        </div>
      </div>
    </div>
  );
}
