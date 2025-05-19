
import { useState } from "react";
import { Navigation } from "./Navigation";
import { Slide } from "./Slide";
import { Slide1Cover } from "./slides/Slide1Cover";
import { Slide2Context } from "./slides/Slide2Context";
import { Slide3Actors } from "./slides/Slide3Actors";
import { Slide4Demo } from "./slides/Slide4Demo";
import { Slide5GreenPoints } from "./slides/Slide5GreenPoints";
import { Slide6Architecture } from "./slides/Slide6Architecture";
import { Slide7Target } from "./slides/Slide7Target";
import { Slide8Scalability } from "./slides/Slide8Scalability";
import { Slide9Platform } from "./slides/Slide9Platform";
import { Slide10Roadmap } from "./slides/Slide10Roadmap";
import { Slide11Impact } from "./slides/Slide11Impact";
import { Slide12Team } from "./slides/Slide12Team";

export function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 12;
  
  const navigateToSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
    document.getElementById(`slide-${slideNumber}`)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="slide-container">
      {/* Slide 1: Cover */}
      <Slide 
        id="slide-1"
        title=""
        subtitle=""
        className={currentSlide === 1 ? "block" : "hidden"}
      >
        <Slide1Cover />
      </Slide>
      
      {/* Slide 2: Context & Vision */}
      <Slide 
        id="slide-2"
        title="Contesto & Visione"
        subtitle="Context & Vision"
        number={2}
        className={currentSlide === 2 ? "block" : "hidden"}
      >
        <Slide2Context />
      </Slide>
      
      {/* Slide 3: Actors Involved */}
      <Slide 
        id="slide-3"
        title="Attori Coinvolti"
        subtitle="Involved Actors"
        number={3}
        className={currentSlide === 3 ? "block" : "hidden"}
      >
        <Slide3Actors />
      </Slide>
      
      {/* Slide 4: Demo Live */}
      <Slide 
        id="slide-4"
        title="Demo Live: Robot LEGO in Azione"
        subtitle="Live Demo: LEGO Robot in Action"
        number={4}
        className={currentSlide === 4 ? "block" : "hidden"}
      >
        <Slide4Demo />
      </Slide>
      
      {/* Slide 5: GreenPoints */}
      <Slide 
        id="slide-5"
        title="GreenPoints – Incentivi alla Sostenibilità"
        subtitle="GreenPoints – Sustainability Incentives"
        number={5}
        className={currentSlide === 5 ? "block" : "hidden"}
      >
        <Slide5GreenPoints />
      </Slide>
      
      {/* Slide 6: Technical Architecture */}
      <Slide 
        id="slide-6"
        title="Architettura Tecnica"
        subtitle="Technical Architecture"
        number={6}
        className={currentSlide === 6 ? "block" : "hidden"}
      >
        <Slide6Architecture />
      </Slide>
      
      {/* Slide 7: Social Target */}
      <Slide 
        id="slide-7"
        title="Target Sociale e Inclusione"
        subtitle="Social Target and Inclusion"
        number={7}
        className={currentSlide === 7 ? "block" : "hidden"}
      >
        <Slide7Target />
      </Slide>
      
      {/* Slide 8: European Scalability */}
      <Slide 
        id="slide-8"
        title="Scalabilità Europea (Italia–Francia)"
        subtitle="European Scalability (Italy–France)"
        number={8}
        className={currentSlide === 8 ? "block" : "hidden"}
      >
        <Slide8Scalability />
      </Slide>
      
      {/* Slide 9: Platform & Website */}
      <Slide 
        id="slide-9"
        title="Piattaforma Trasparente & Sito Web"
        subtitle="Transparent Platform & Website"
        number={9}
        className={currentSlide === 9 ? "block" : "hidden"}
      >
        <Slide9Platform />
      </Slide>
      
      {/* Slide 10: 12-Month Roadmap */}
      <Slide 
        id="slide-10"
        title="Roadmap 12 Mesi"
        subtitle="12-Month Roadmap"
        number={10}
        className={currentSlide === 10 ? "block" : "hidden"}
      >
        <Slide10Roadmap />
      </Slide>
      
      {/* Slide 11: Expected Impact */}
      <Slide 
        id="slide-11"
        title="Impatto Atteso su Catania"
        subtitle="Expected Impact on Catania"
        number={11}
        className={currentSlide === 11 ? "block" : "hidden"}
      >
        <Slide11Impact />
      </Slide>
      
      {/* Slide 12: Team & Contacts */}
      <Slide 
        id="slide-12"
        title="Team & Contatti"
        subtitle="Team & Contacts"
        number={12}
        className={currentSlide === 12 ? "block" : "hidden"}
      >
        <Slide12Team />
      </Slide>
      
      {/* Navigation */}
      <Navigation 
        currentSlide={currentSlide} 
        totalSlides={totalSlides} 
        onNavigate={navigateToSlide} 
      />
    </div>
  );
}
