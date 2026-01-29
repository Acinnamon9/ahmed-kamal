import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import HeroPhone from "./hero/HeroPhone";
import { PhoneForwarded, MessageSquare, Zap } from "lucide-react";
import { cn } from "../lib/utils";

const DEMO_STEPS = [
  {
    id: "voice",
    label: "Instant Voice Conversations",
    description:
      "AI speech-to-speech bot that engages visitors and converts leads 24/7",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
  },
  {
    id: "calling",
    label: "Always-On Lead Calling",
    description:
      "AI phone caller that handles calls, books appointments, and follows up",
    icon: <PhoneForwarded className="w-6 h-6" />,
    color: "text-brand-primary",
    bg: "bg-brand-primary/10",
    border: "border-brand-primary/20",
  },
  {
    id: "automation",
    label: "Zero-Latency Follow-Up",
    description:
      "Custom AI workflows and automated business processes to scale your operations effortlessly",
    icon: <Zap className="w-6 h-6" />,
    color: "text-brand-success",
    bg: "bg-brand-success/10",
    border: "border-brand-success/20",
  },
];

const InteractiveDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            {DEMO_STEPS.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "group p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 cursor-pointer relative overflow-hidden",
                    isActive
                      ? "bg-white/8 border-white/20 shadow-2xl scale-[1.02]"
                      : "bg-white/5 border-white/10 hover:bg-white/8",
                  )}
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange"
                    />
                  )}

                  <div className="flex items-start gap-6">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-500",
                        isActive
                          ? "bg-brand-orange text-white border-brand-orange shadow-[0_0_20px_rgba(249,115,22,0.4)]"
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
                          isActive ? "text-white" : "text-(--foreground)",
                        )}
                      >
                        {step.label}
                      </h3>
                      <p
                        className={cn(
                          "text-lg leading-relaxed transition-colors duration-300",
                          isActive
                            ? "text-white/80"
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

          <div className="w-full flex justify-center lg:justify-end relative">
            {/* Dynamic Glow effect behind phone */}
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
            <HeroPhone />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default InteractiveDemo;
