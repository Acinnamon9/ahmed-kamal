import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TimelineStepType } from "./types";
import { cn } from "../../lib/utils";

interface TimelineStepProps {
  step: TimelineStepType;
  index: number;
  isActive: boolean;
  isUnlocked: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

/**
 * TimelineStep
 * Renders a single node and its associated content card.
 * Now with scroll-triggered reveal animations.
 */
const TimelineStep: React.FC<TimelineStepProps> = ({
  step,
  index,
  isActive,
  isUnlocked,
  onMouseEnter,
  onMouseLeave,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "-20% 0px -20% 0px", // Triggers when element is in the middle 40% of viewport
  });
  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center group/item md:h-0"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Mobile-only Vertical line indicator (replaces horizontal track) */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-(--foreground)/10 md:hidden" />

      {/* Desktop Center Node: The dot on the horizontal bar */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isUnlocked && isInView ? 1 : 0,
          opacity: isUnlocked && isInView ? 1 : 0,
        }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn(
          "hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-(--background) border-2 rounded-full z-10 transition-all duration-300",
          isActive
            ? "border-brand-primary scale-125 shadow-[0_0_15px_var(--color-brand-primary)]"
            : "border-(--foreground)/30 scale-100",
        )}
      >
        {/* Ring animation to draw attention to the current active step */}
        {isActive && (
          <div className="absolute inset-0 bg-brand-primary rounded-full animate-ping opacity-20" />
        )}
      </motion.div>

      {/* 
        Feature Card: 
        Alternates between 'top' and 'bottom' positions on desktop to prevent visual crowding.
      */}
      <motion.div
        initial={{
          opacity: 0,
          y: step.position === "top" ? 30 : -30,
          scale: 0.95,
        }}
        animate={{
          opacity: isUnlocked && isInView ? 1 : 0,
          y: isUnlocked && isInView ? 0 : step.position === "top" ? 30 : -30,
          scale: isUnlocked && isInView ? (isActive ? 1.05 : 1) : 0.95,
        }}
        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
        className={cn(
          "relative ml-16 md:ml-0 md:w-full p-6 rounded-xl border backdrop-blur-md transition-all duration-500 cursor-pointer overflow-hidden",
          "md:absolute md:left-1/2 md:-translate-x-1/2 md:w-72",
          step.position === "top"
            ? "md:bottom-full md:mb-16"
            : "md:top-full md:mt-16",
          isActive
            ? "bg-brand-primary/8 dark:bg-brand-primary/15 border-brand-primary/40 shadow-[0_8px_32px_rgba(var(--brand-primary-rgb),0.12)]"
            : "bg-(--foreground)/2 dark:bg-(--foreground)/10 border-(--foreground)/15 opacity-60 backdrop-blur-sm hover:opacity-100 hover:bg-(--foreground)/4",
          !isUnlocked && "pointer-events-none opacity-20 saturate-0",
        )}
      >
        {/* 
          Aesthetic Layer: Retro Scanlines 
          Adds a subtle 'VHS' or 'Security Console' texture to the card.
        */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
        </div>

        {/* Technical Corner Accent Graphics (HUD style) */}
        <div
          className={cn(
            "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-colors duration-300",
            isActive ? "border-brand-primary" : "border-transparent",
          )}
        />
        <div
          className={cn(
            "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 transition-colors duration-300",
            isActive ? "border-brand-primary" : "border-transparent",
          )}
        />

        {/* Desktop: Vertical line connecting card to the center axis */}
        <div
          className={cn(
            "hidden md:block absolute left-1/2 -translate-x-1/2 w-px transition-all duration-500",
            step.position === "top" ? "top-full h-16" : "bottom-full h-16",
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
              : "border-(--foreground)/30 text-(--foreground)/30",
          )}
        >
          {step.icon}
        </div>

        {/* Card Content: Time-frame badge and 'Active' status pulse */}
        <div className="flex items-center justify-between mb-3">
          <div
            className={cn(
              "text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-colors duration-300",
              isActive ? "text-brand-primary" : "text-(--muted-foreground)",
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

        <div className="flex items-start gap-3">
          <div
            className={cn(
              "p-2 rounded-lg border transition-all duration-300",
              isActive
                ? "bg-brand-primary/10 border-brand-primary/20 text-brand-primary shadow-[0_0_15px_rgba(var(--brand-primary-rgb),0.1)]"
                : "bg-(--foreground)/5 border-(--foreground)/10 text-(--muted-foreground)",
            )}
          >
            {React.cloneElement(step.icon as React.ReactElement, {
              className: "w-5 h-5",
            })}
          </div>
          <div className="flex-1">
            <motion.h3
              animate={{ scale: isActive ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "text-lg font-black mb-1 transition-colors duration-300 tracking-tight",
                isActive ? "text-(--foreground)" : "text-(--muted-foreground)",
              )}
            >
              {step.title}
            </motion.h3>
            <motion.p
              animate={{ scale: isActive ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "text-xs leading-relaxed transition-colors duration-300 font-medium",
                isActive
                  ? "text-(--foreground)/70"
                  : "text-(--muted-foreground)/40",
              )}
            >
              {step.description}
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="h-4 md:hidden" />
    </div>
  );
};

export default TimelineStep;
