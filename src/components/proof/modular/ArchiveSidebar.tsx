import React from "react";
import { cn } from "../../../lib/utils";
import { ProofCaseStudy } from "../../../constants/proofData";
import { motion } from "framer-motion";

interface ArchiveSidebarProps {
  caseStudies: ProofCaseStudy[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

/**
 * ArchiveSidebar
 * A vertical (or horizontal on mobile) selection list for the Mission Archive.
 */
const ArchiveSidebar: React.FC<ArchiveSidebarProps> = ({
  caseStudies,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className="lg:w-1/3 flex flex-col gap-3">
      <div className="mb-4 px-4 flex items-center justify-between">
        <span className="text-[10px] font-black text-brand-link uppercase tracking-[0.3em] opacity-80">
          Mission Archive
        </span>
        <span className="text-[9px] font-black text-brand-link/40 uppercase tracking-widest">
          v2.0 / Verified
        </span>
      </div>

      <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar gap-2 pb-4 lg:pb-0">
        {caseStudies.map((study, idx) => (
          <button
            key={study.id}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "relative text-left px-5 py-5 rounded-xl transition-all duration-500 whitespace-nowrap lg:whitespace-normal group border",
              activeIndex === idx
                ? "bg-brand-link/10 border-brand-link/30 shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                : "hover:bg-brand-link/5 border-transparent hover:border-brand-link/10",
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span
                  className={cn(
                    "text-sm font-black tracking-tighter transition-colors duration-300 uppercase",
                    activeIndex === idx
                      ? "text-brand-link"
                      : "text-(--muted-foreground)",
                  )}
                >
                  {study.logo}
                </span>
                <span
                  className={cn(
                    "text-[18px] font-black tracking-tighter transition-opacity duration-300",
                    activeIndex === idx
                      ? "text-brand-success"
                      : "text-brand-success/40",
                  )}
                >
                  {study.metrics[0].value}
                </span>
              </div>
              {activeIndex === idx && (
                <div className="w-2 h-2 rounded-full bg-brand-link animate-pulse hidden lg:block" />
              )}
            </div>

            {/* Active Indicator: Slides vertically on desktop to match selection */}
            {activeIndex === idx && (
              <motion.div
                layoutId="activeReport"
                className="absolute left-0 top-0 w-1 h-full bg-brand-link hidden lg:block"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArchiveSidebar;
