import React, { useState } from "react";
import { Section, Container } from "./ui/Layout";
import HeroPhone from "./hero/HeroPhone";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <Section className="bg-transparent py-24 relative overflow-hidden">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center relative">
              {/* Left Column: Interactive Feature Cards */}
              <div className="space-y-6 relative z-10">
                {DEMO_STEPS.map((step, index) => (
                  <DemoFeatureCard
                    key={step.id}
                    step={step}
                    isActive={activeStep === index}
                    index={index}
                    onClick={() => {
                      setActiveStep(index);
                      if (step.action === "open-chatbot") {
                        window.dispatchEvent(new CustomEvent("open-chatbot"));
                      }
                    }}
                  />
                ))}
              </div>

              {/* Right Column: Visual Preview (Phone Mockup or Automation Image) */}
              <div className="w-full flex justify-center lg:justify-end relative z-10 min-h-[780px] items-center">
                {/* 
                  Dynamic Glow behind the content:
                  Changes color based on which feature step is currently active.
                */}
                <div
                  className={cn(
                    "absolute inset-0 blur-[100px] rounded-full opacity-30 animate-pulse transition-colors duration-1000",
                    DEMO_STEPS[activeStep].bg,
                  )}
                />

                <AnimatePresence mode="wait">
                  {DEMO_STEPS[activeStep].visualType === "automation" ? (
                    <motion.div
                      key="automation-image"
                      initial={{ opacity: 0, scale: 0.9, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full max-w-[420px] aspect-3/4 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                    >
                      <img
                        src="/AI automation.png"
                        alt="AI Automation Workflow"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="phone-mockup"
                      initial={{ opacity: 0, scale: 0.9, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9, x: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <HeroPhone />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default InteractiveDemo;
