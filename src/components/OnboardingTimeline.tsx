import React from "react";
import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { cn } from "../lib/utils";
import { CheckCircle2, Clock, Rocket, Zap, Search } from "lucide-react";
import HeroVisual from "./hero/HeroVisual";

const TIMELINE_STEPS = [
  {
    id: "audit",
    title: "Discovery Audit",
    description: "Deep dive into your current lead flow bottlenecks.",
    day: "Hour 0-4",
    icon: <Search className="w-5 h-5" />,
    position: "top",
  },
  {
    id: "strategy",
    title: "Custom Strategy",
    description: "We architect the exact AI agents you need.",
    day: "Hour 5-12",
    icon: <Zap className="w-5 h-5" />,
    position: "bottom",
  },
  {
    id: "build",
    title: "System Build",
    description: "Configuring your voice, chat, and nurture bots.",
    day: "Hour 13-36",
    icon: <Clock className="w-5 h-5" />,
    position: "top",
  },
  {
    id: "train",
    title: "Knowledge Training",
    description: "Feeding the AI your scripts, objections, and FAQs.",
    day: "Hour 37-47",
    icon: <CheckCircle2 className="w-5 h-5" />,
    position: "bottom",
  },
  {
    id: "launch",
    title: "Live Launch",
    description: "Your AI workforce goes live. Leads convert instantly.",
    day: "Hour 48",
    icon: <Rocket className="w-5 h-5" />,
    position: "top",
  },
];

/**
 * OnboardingTimeline Component
 *
 * An interactive, sequential timeline that visualizes the "48-hour launch" process.
 * Features a progress-linked central axis with alternating cards and hover-activated unlocking.
 */
const OnboardingTimeline: React.FC = () => {
  // State: tracks which index is being hovered to highlight corresponding card
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  // State: tracks how many steps the user has "unlocked" through interaction
  const [unlockedIndex, setUnlockedIndex] = React.useState<number>(0);

  // activeIndex: priority given to hovered step, falling back to current unlocked progress
  const activeIndex = hoveredIndex !== null ? hoveredIndex : unlockedIndex;

  // Calculate percentage for the animated progress bar
  const progressPercent = activeIndex / (TIMELINE_STEPS.length - 1);

  return (
    <Section
      id="timeline"
      className="bg-transparent py-32 relative overflow-hidden"
    >
      {/* Soft background glow centered at the top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10 max-w-[1700px]">
        {/* Intro Section: Heading and Visual Mockup */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-48">
          <div className="flex-1 text-center lg:text-left">
            {/* White-glove Onboarding Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-(--foreground)/5 border border-(--foreground)/10 mb-6 backdrop-blur-md"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 rounded-full border-2 border-(--background) bg-(--foreground)/10 flex items-center justify-center text-[8px] font-bold text-(--foreground)`}
                  >
                    AI
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-(--foreground)/80">
                White-glove Onboarding
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-(--foreground) mb-6"
            >
              Up and running in{" "}
              <span className="text-brand-primary">48 hours</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-(--muted-foreground) max-w-2xl"
            >
              Our team handles the architecture, training, and deployment. Zero
              technical overhead for your team.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            {/* Visual representation of an AI bot head or terminal */}
            <HeroVisual />
          </motion.div>
        </div>

        {/* 
          Actual Timeline Grid:
          Shows a central horizontal line on desktop and cards alternating Top/Bottom.
        */}
        <div className="relative max-w-6xl mx-auto py-48">
          {/* Main Horizontal Line (Background) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-(--foreground)/10 -translate-y-1/2 rounded-full hidden md:block" />

          {/* 
            Progress Line (Animated):
            Expands horizontally as the user hovers or unlocks more steps.
          */}
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progressPercent * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-1/2 left-0 h-1 bg-brand-primary -translate-y-1/2 rounded-full origin-left hidden md:block shadow-[0_0_20px_var(--color-brand-primary)] z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 relative">
            {TIMELINE_STEPS.map((step, index) => {
              const isActive = index <= activeIndex;
              const isUnlocked = index <= unlockedIndex;

              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center group/item"
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    // "Unlock" logic: moving the mouse specifically over the current 'locked' node unlocks it
                    if (index === unlockedIndex) {
                      setUnlockedIndex((prev) =>
                        Math.min(prev + 1, TIMELINE_STEPS.length - 1),
                      );
                    }
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Mobile-only Vertical line indicator */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-(--foreground)/10 md:hidden" />

                  {/* Desktop Center Node: The dot on the horizontal bar */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: isUnlocked ? 1 : 0,
                      opacity: isUnlocked ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-(--background) border-2 rounded-full z-10 transition-all duration-300",
                      isActive
                        ? "border-brand-primary scale-125 shadow-[0_0_15px_var(--color-brand-primary)]"
                        : "border-(--foreground)/20 scale-100",
                    )}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-brand-primary rounded-full animate-ping opacity-20" />
                    )}
                  </motion.div>

                  {/* 
                    Feature Card: 
                    Alternates between 'top' and 'bottom' positions on desktop.
                  */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: step.position === "top" ? 30 : -30,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: isUnlocked ? 1 : 0,
                      y: isUnlocked ? 0 : step.position === "top" ? 30 : -30,
                      scale: isUnlocked ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={cn(
                      "relative ml-16 md:ml-0 md:w-full p-6 rounded-xl border backdrop-blur-md transition-all duration-500 cursor-pointer overflow-hidden",
                      "md:absolute md:left-1/2 md:-translate-x-1/2 md:w-72",
                      step.position === "top"
                        ? "md:bottom-full md:mb-16"
                        : "md:top-full md:mt-16",
                      isActive
                        ? "bg-brand-primary/10 border-brand-primary/40 shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.15)]"
                        : "bg-(--foreground)/5 border-(--foreground)/5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100",
                      !isUnlocked && "pointer-events-none",
                    )}
                  >
                    {/* Retro / Computer Scanline aesthetic effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-5">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
                    </div>

                    {/* Technical Corner Accent Graphics */}
                    <div
                      className={cn(
                        "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-colors duration-300",
                        isActive
                          ? "border-brand-primary"
                          : "border-transparent",
                      )}
                    />
                    <div
                      className={cn(
                        "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 transition-colors duration-300",
                        isActive
                          ? "border-brand-primary"
                          : "border-transparent",
                      )}
                    />

                    {/* Desktop: Vertical line connecting card to the center axis */}
                    <div
                      className={cn(
                        "hidden md:block absolute left-1/2 -translate-x-1/2 w-px transition-all duration-500",
                        step.position === "top"
                          ? "top-full h-16"
                          : "bottom-full h-16",
                        isActive
                          ? "bg-linear-to-b from-brand-primary to-transparent"
                          : "bg-(--foreground)/10",
                      )}
                    />

                    {/* Mobile-only node icon that sits on the vertical timeline line */}
                    <div
                      className={cn(
                        "absolute -left-10 md:hidden w-10 h-10 rounded-full bg-(--background) border flex items-center justify-center z-10 transition-all duration-300",
                        isActive
                          ? "border-brand-primary text-brand-primary shadow-[0_0_15px_var(--color-brand-primary)]"
                          : "border-(--foreground)/20 text-(--foreground)/20",
                      )}
                    >
                      {step.icon}
                    </div>

                    {/* Card Content: Time-frame badge and Status indicator */}
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={cn(
                          "text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-colors duration-300",
                          isActive
                            ? "text-brand-primary"
                            : "text-(--muted-foreground)",
                        )}
                      >
                        [{step.day}]
                      </div>
                      {isActive && (
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex items-center gap-1.5"
                        >
                          <div className="w-1 h-1 rounded-full bg-brand-primary" />
                          <span className="text-[8px] font-mono text-brand-primary uppercase tracking-widest">
                            Active
                          </span>
                        </motion.div>
                      )}
                    </div>

                    <h3
                      className={cn(
                        "text-lg font-black mb-2 transition-colors duration-300 tracking-tight",
                        isActive
                          ? "text-(--foreground)"
                          : "text-(--muted-foreground)",
                      )}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={cn(
                        "text-xs leading-relaxed transition-colors duration-300 font-medium",
                        isActive
                          ? "text-(--foreground)/70"
                          : "text-(--muted-foreground)/40",
                      )}
                    >
                      {step.description}
                    </p>
                  </motion.div>

                  <div className="h-4 md:hidden" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OnboardingTimeline;
