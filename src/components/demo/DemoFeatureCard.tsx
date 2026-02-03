import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { DemoStepType } from "./DemoData";

interface DemoFeatureCardProps {
  step: DemoStepType;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

/**
 * DemoFeatureCard Component
 * Renders an individual selectable feature card in the demo.
 */
const DemoFeatureCard: React.FC<DemoFeatureCardProps> = ({
  step,
  isActive,
  onClick,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
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
      {/* Active Visuals: Selection Indicator & Connection Beam */}
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
              : cn(step.bg, step.border, step.color, "group-hover:scale-110"),
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
              isActive ? "text-(--foreground)/80" : "text-(--muted-foreground)",
            )}
          >
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default DemoFeatureCard;
