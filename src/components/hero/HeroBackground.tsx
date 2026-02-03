import React from "react";
import NeuralNetworkCanvas from "../ui/NeuralNetworkCanvas";

/**
 * HeroBackground Component
 *
 * Creates the atmospheric foundation for the hero section.
 * Combines dynamic canvas-based animations with static orbital glows.
 */
const HeroBackground: React.FC = () => {
  return (
    <>
      {/* 
        Layer 1: Neural Network Canvas 
        A custom engine that renders connecting dots and lines. 
        Provides a "living" technical feel to the landing experience.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <NeuralNetworkCanvas
          dotColor="#00c2ff"
          lineColor="#00c2ff"
          className="w-full h-full opacity-40 dark:opacity-20"
        />
      </div>

      {/* 
        Layer 2: Atmospheric Orbital Glows 
        Large, blurred spheres of low-opacity color that prevent the 
        background from feeling "flat".
      */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/3 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-link/2 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </>
  );
};

export default HeroBackground;
