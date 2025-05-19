
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (slideNumber: number) => void;
}

export function Navigation({ currentSlide, totalSlides, onNavigate }: NavigationProps) {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card border rounded-full px-3 py-1.5 flex items-center space-x-1 shadow-lg">
        <Button 
          variant="ghost" 
          size="icon" 
          className="w-8 h-8 rounded-full"
          onClick={() => onNavigate(Math.max(1, currentSlide - 1))}
          disabled={currentSlide === 1}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Button>
        
        {Array.from({ length: totalSlides }).map((_, i) => (
          <Button
            key={i}
            variant="ghost"
            className={cn(
              "w-6 h-6 rounded-full p-0 text-xs",
              currentSlide === i + 1 && "bg-primary text-primary-foreground"
            )}
            onClick={() => onNavigate(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="w-8 h-8 rounded-full"
          onClick={() => onNavigate(Math.min(totalSlides, currentSlide + 1))}
          disabled={currentSlide === totalSlides}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
