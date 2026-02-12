import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

import { cn } from "../../lib/utils";

interface WorkforceCTAProps {
  isExpanded?: boolean;
  toggleExpanded?: () => void;
}

const WorkforceCTA: React.FC<WorkforceCTAProps> = ({
  isExpanded = false,
  toggleExpanded,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
      {/* Left Side: Primary CTA */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-1 md:order-1 flex flex-col items-center md:items-start"
      >
        <div className="relative group">
          <Button
            variant="glass-primary"
            size="lg"
            className="w-full md:w-auto px-6 md:px-8 py-4 font-black tracking-wider md:tracking-widest rounded-2xl text-[10px] md:text-xs whitespace-normal md:whitespace-nowrap"
            onClick={() =>
              window.open("https://atomicx.ravan.ai/book", "_blank")
            }
          >
            <span className="flex items-center gap-2">
              DEPLOY YOUR AI WORKFORCE
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </Button>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 md:left-0 md:translate-x-0 -translate-x-1/2 mb-4 px-3 py-2 bg-(--card)/95 backdrop-blur-md border border-(--border) rounded-lg text-[9px] font-black text-(--foreground) uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl translate-y-2 group-hover:translate-y-0">
            Setup in under 48 hours
            {/* Arrow */}
            <div className="absolute top-full left-1/2 md:left-8 -translate-x-1/2 border-8 border-transparent border-t-(--border)/30"></div>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Expand Toggle */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-2 md:order-2"
      >
        {toggleExpanded && (
          <Button
            variant="glass"
            onClick={() => {
              if (isExpanded) {
                document
                  .getElementById("ai-team")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }
              toggleExpanded();
            }}
            className="group relative px-8 py-4 rounded-full border-brand-primary/20 hover:border-brand-primary/50 text-[11px] font-black tracking-[0.2em] uppercase transition-all text-brand-primary hover:text-white hover:bg-brand-primary/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <span className="flex items-center gap-3">
              {isExpanded ? "Minimize Fleet" : "Expand Full Workforce"}
              <svg
                className={cn(
                  "w-4 h-4 transition-transform duration-500",
                  isExpanded ? "rotate-180" : "group-hover:translate-y-0.5",
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            {!isExpanded && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3 pointer-events-none">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            )}
          </Button>
        )}
      </motion.div>
    </div>
  );
};

export default WorkforceCTA;
