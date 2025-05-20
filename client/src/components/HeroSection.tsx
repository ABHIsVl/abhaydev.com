import { useRef } from 'react';
import MorphingScene from '@/lib/3d/Globe';
import Button from '@/components/Shared/Button';

type HeroSectionProps = {
  onContactClick: () => void;
};

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="hero" 
      ref={sectionRef} 
      className="h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-0"
    >
      <MorphingScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="hero-content flex flex-col items-center text-center md:text-left md:items-start gap-8 animate-fadeIn">
          <div className="w-full md:w-3/5 space-y-6" ref={textRef}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold leading-tight animate-slideUp">
              I Craft <span className="text-accent">Digital Experiences</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium animate-slideUp animation-delay-200">
              Creative Developer & Designer | Abhay Dev
            </h2>
            <p className="text-lg max-w-xl animate-slideUp animation-delay-300">
              I transform ideas into impactful digital solutions that connect brands with their audience through strategic design and development.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start animate-slideUp animation-delay-400">
              <Button variant="primary" onClick={onContactClick}>
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fadeIn animation-delay-500">
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <div className="w-6 h-12 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}