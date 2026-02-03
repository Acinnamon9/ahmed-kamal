import React, { useState, useEffect } from "react";
import { Section, Container } from "./ui/Layout";
import HeroPhone from "./hero/HeroPhone";
import { cn } from "../lib/utils";
import DemoHeader from "./demo/DemoHeader";
import DemoFeatureCard from "./demo/DemoFeatureCard";
import { DEMO_STEPS } from "./demo/DemoData";

/**
 * InteractiveDemo Component
 *
 * Showcases the core offerings (Widget, Calling, Automation) through an
 * interactive step-by-step UI with auto-cycling and real-time visual feedback.
 *
 * Modularized for code clarity.
 */
const InteractiveDemo: React.FC = () => {
  // activeStep: index of the current showcased feature
  const [activeStep, setActiveStep] = useState(0);

  /**
   * Auto-Cycle Logic:
   * Switches the active step every 4 seconds to ensure the 'story' progresses
   * automatically if the user doesn't interact manually.
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % DEMO_STEPS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section
      id="demo"
      className="bg-transparent py-24 relative overflow-hidden"
    >
      <Container className="relative z-10">
        <DemoHeader />

        {/* 
          Main Showroom Glassmorphic Container:
          Higher contrast glow and blurred backgrounds to highlight the demo content.
        */}
        <div className="relative">
          {/* Subtle colored glow behind the main demo box */}
          <div className="absolute -inset-12 bg-brand-orange/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-8 lg:p-12 lg:pb-24 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
              {/* Left Column: Interactive Feature Cards */}
              <div className="space-y-6 relative z-10">
                {DEMO_STEPS.map((step, index) => (
                  <DemoFeatureCard
                    key={step.id}
                    step={step}
                    isActive={activeStep === index}
                    index={index}
                    onClick={() => setActiveStep(index)}
                  />
                ))}
              </div>

              {/* Right Column: Visual Preview (Phone Mockup) */}
              <div className="w-full flex justify-center lg:justify-end relative z-10">
                {/* 
                  Dynamic Glow behind the phone:
                  Changes color based on which feature step is currently active.
                */}
                <div
                  className={cn(
                    "absolute inset-0 blur-[100px] rounded-full opacity-30 animate-pulse transition-colors duration-1000",
                    activeStep === 0
                      ? "bg-brand-orange/40"
                      : activeStep === 1
                        ? "bg-brand-primary/40"
                        : "bg-brand-success/40",
                  )}
                />

                {/* HeroPhone: Detailed mock-up component showing simulated interface */}
                <HeroPhone />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default InteractiveDemo;
