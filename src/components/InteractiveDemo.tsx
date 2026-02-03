import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import HeroPhone from "./hero/HeroPhone";
import { PhoneForwarded, MessageSquare, Zap } from "lucide-react";
import { cn } from "../lib/utils";

const DEMO_STEPS = [
  {
    id: "widget",
    label: "AI Website Voice Widget",
    description:
      "Embeddable voice AI that captures leads and answers questions directly on your site",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
  },
  {
    id: "calling",
    label: "AI Calling",
    description:
      "Human-like phone agents for inbound support and outbound sales campaigns",
    icon: <PhoneForwarded className="w-6 h-6" />,
    color: "text-brand-primary",
    bg: "bg-brand-primary/10",
    border: "border-brand-primary/20",
  },
  {
    id: "automation",
    label: "AI Automation",
    description:
      "End-to-end workflow automation that connects your CRM, calendar, and tools",
    icon: <Zap className="w-6 h-6" />,
    color: "text-brand-success",
    bg: "bg-brand-success/10",
    border: "border-brand-success/20",
  },
];

/**
 * InteractiveDemo Component
 *
 * Showcases the core offerings (Widget, Calling, Automation) through an
 * interactive step-by-step UI with auto-cycling and real-time visual feedback.
 */
const InteractiveDemo: React.FC = () => {
  // activeStep: index of the current showcased feature
  const [activeStep, setActiveStep] = useState(0);

  // Auto-switch steps every 4 seconds to create a dynamic 'storytelling' effect
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
        {/* Section Header: Explaining the problem the demo solves */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-brand-orange uppercase bg-brand-orange/10 rounded-full border border-brand-orange/20">
            Interactive Demo
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-(--foreground) tracking-tighter mb-6">
            The Systems That Stop <br className="hidden md:block" />
            <span className="text-brand-orange">Leads From Dying</span>
          </h2>
          <p className="text-xl text-(--muted-foreground) max-w-3xl mx-auto font-medium leading-relaxed">
            Replace the chaos of missed calls and slow follow-ups with instant,
            always-on infrastructure.
          </p>
        </motion.div>

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
                {DEMO_STEPS.map((step, index) => {
                  const isActive = activeStep === index;
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      onClick={() => setActiveStep(index)} // Manual selection overrides auto-cycle
                      className={cn(
                        "group p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 cursor-pointer relative",
                        isActive
                          ? cn(
                              "shadow-2xl scale-[1.02]",
                              step.bg.replace("/10", "/5"),
                              step.border,
                            )
                          : "bg-white/5 border-white/10 hover:bg-white/8",
                      )}
                    >
                      {/* 
                        Feature Selection Visuals:
                        - layoutId: slides the selection indicator between cards smoothly.
                        - color transforms: changes icon/text colors based on 'active' brand colors.
                      */}
                      {isActive && (
                        <>
                          <motion.div
                            layoutId="active-indicator"
                            className={cn(
                              "absolute left-0 top-6 bottom-6 w-1 rounded-full",
                              step.color.replace("text-", "bg-"),
                            )}
                          />

                          {/* Connection 'Beam' pointing from card towards the preview phone */}
                          <div
                            className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-px bg-linear-to-r from-current to-transparent z-0 pointer-events-none text-current"
                            style={{
                              color:
                                step.color === "text-brand-orange"
                                  ? "#f97316"
                                  : step.color === "text-brand-primary"
                                    ? "#3b82f6"
                                    : "#22c55e",
                            }}
                          >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
                          </div>
                        </>
                      )}

                      <div className="flex items-start gap-6">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-500",
                            isActive
                              ? cn(
                                  "bg-transparent dark:bg-transparent",
                                  step.color,
                                  step.border,
                                  "shadow-[0_0_20px_rgba(255,255,255,0.1)]",
                                )
                              : cn(
                                  step.bg,
                                  step.border,
                                  step.color,
                                  "group-hover:scale-110",
                                ),
                          )}
                        >
                          {step.icon}
                        </div>
                        <div>
                          <h3
                            className={cn(
                              "text-2xl font-bold mb-2 transition-colors duration-300",
                              isActive ? step.color : "text-(--foreground)",
                            )}
                          >
                            {step.label}
                          </h3>
                          <p
                            className={cn(
                              "text-lg leading-relaxed transition-colors duration-300",
                              isActive
                                ? "text-(--foreground)/80"
                                : "text-(--muted-foreground)",
                            )}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
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
