
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const NetworkDiagram = () => {
  const { t } = useLanguage();
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const connectors = svgRef.current?.querySelectorAll('.connector');
            connectors?.forEach((connector) => {
              connector.classList.add('animate');
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (svgRef.current) {
      observer.observe(svgRef.current);
    }
    
    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-x-auto p-4">
      <svg 
        ref={svgRef}
        viewBox="0 0 960 640" 
        className="w-full max-w-4xl mx-auto h-auto"
        aria-labelledby="network-diagram-title"
      >
        <title id="network-diagram-title">{t('how_it_works_title')}</title>
        
        {/* Environment Node */}
        <g className="animate-fade-in" style={{ animationDelay: "0ms" }}>
          <rect x="50" y="80" width="140" height="80" rx="10" className="fill-nature-100 stroke-nature-500" />
          <text x="120" y="120" textAnchor="middle" className="text-sm font-medium fill-nature-800">{t('flow_step1')}</text>
          <path className="connector" d="M190 120 L310 120" />
        </g>
        
        {/* Data Lake Node */}
        <g className="animate-fade-in" style={{ animationDelay: "100ms" }}>
          <rect x="320" y="80" width="120" height="80" rx="10" className="fill-civic-100 stroke-civic-500" />
          <text x="380" y="120" textAnchor="middle" className="text-sm font-medium fill-civic-800">Data Lake</text>
          <path className="connector" d="M380 160 L380 200" />
        </g>
        
        {/* Training Set Node */}
        <g className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <rect x="320" y="200" width="120" height="80" rx="10" className="fill-civic-100 stroke-civic-500" />
          <text x="380" y="240" textAnchor="middle" className="text-sm font-medium fill-civic-800">Training Set</text>
          <path className="connector" d="M380 280 L380 320" />
        </g>
        
        {/* AI Central Node */}
        <g className="animate-fade-in" style={{ animationDelay: "300ms" }}>
          <rect x="280" y="320" width="200" height="100" rx="10" className="fill-civic-500 stroke-civic-700 animate-pulse-slow" />
          <text x="380" y="350" textAnchor="middle" className="text-sm font-bold fill-white">{t('actor_ai')}</text>
          <text x="380" y="370" textAnchor="middle" className="text-xs fill-white">StudSAR v3 + RAG</text>
          <text x="380" y="390" textAnchor="middle" className="text-xs fill-white">• {t('flow_step2')}</text>
          <text x="380" y="405" textAnchor="middle" className="text-xs fill-white">• {t('flow_step3')}</text>
          
          {/* Connectors from AI */}
          <path className="connector" d="M280 370 L180 370" />
          <path className="connector" d="M230 370 L230 450 L130 450" />
          <path className="connector" d="M380 420 L380 500" />
          <path className="connector" d="M480 370 L580 370" />
          <path className="connector" d="M430 420 L430 500 L580 500" />
        </g>
        
        {/* Dashboard Node */}
        <g className="animate-fade-in" style={{ animationDelay: "400ms" }}>
          <rect x="40" y="330" width="140" height="80" rx="10" className="fill-civic-100 stroke-civic-500" />
          <text x="110" y="370" textAnchor="middle" className="text-sm font-medium fill-civic-800">Dashboard</text>
        </g>
        
        {/* Robots Node */}
        <g className="animate-fade-in" style={{ animationDelay: "500ms" }}>
          <rect x="580" y="330" width="140" height="80" rx="10" className="fill-civic-100 stroke-civic-500" />
          <text x="650" y="370" textAnchor="middle" className="text-sm font-medium fill-civic-800">{t('actor_robots')}</text>
        </g>
        
        {/* Schools Node */}
        <g className="animate-fade-in" style={{ animationDelay: "600ms" }}>
          <rect x="320" y="500" width="120" height="80" rx="10" className="fill-nature-100 stroke-nature-500" />
          <text x="380" y="540" textAnchor="middle" className="text-sm font-medium fill-nature-800">{t('actor_schools')}</text>
        </g>
        
        {/* Prison Node */}
        <g className="animate-fade-in" style={{ animationDelay: "700ms" }}>
          <rect x="580" y="500" width="140" height="80" rx="10" className="fill-nature-100 stroke-nature-500" />
          <text x="650" y="540" textAnchor="middle" className="text-sm font-medium fill-nature-800">{t('actor_prisons')}</text>
        </g>
        
        {/* Citizens Node */}
        <g className="animate-fade-in" style={{ animationDelay: "800ms" }}>
          <rect x="40" y="410" width="90" height="80" rx="10" className="fill-nature-100 stroke-nature-500" />
          <text x="85" y="450" textAnchor="middle" className="text-sm font-medium fill-nature-800">{t('actor_citizens')}</text>
        </g>
        
        {/* Municipality Node */}
        <g className="animate-fade-in" style={{ animationDelay: "900ms" }}>
          <rect x="160" y="580" width="200" height="60" rx="10" className="fill-civic-300 stroke-civic-600" />
          <text x="260" y="615" textAnchor="middle" className="text-sm font-medium fill-civic-800">{t('actor_municipality')}</text>
          <path className="connector" d="M260 580 L280 420" />
        </g>
        
        {/* Access Node */}
        <g className="animate-fade-in" style={{ animationDelay: "1000ms" }}>
          <rect x="480" y="580" width="200" height="60" rx="10" className="fill-civic-300 stroke-civic-600" />
          <text x="580" y="605" textAnchor="middle" className="text-sm font-medium fill-civic-800">SPID / QR-ID</text>
          <text x="580" y="625" textAnchor="middle" className="text-xs fill-civic-800">{t('access_title')}</text>
          <path className="connector" d="M580 580 L480 420" />
        </g>
      </svg>
    </div>
  );
};
