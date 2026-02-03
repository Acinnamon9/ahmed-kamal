import React from "react";
import {
  type Industry,
  UNIVERSAL_BASELINE,
} from "../../constants/industryData";
import InteractiveTilt from "../ui/InteractiveTilt";
import Button from "../ui/Button";

interface CenterCardProps {
  hoveredIndustry: Industry | null;
}

/**
 * CenterCard Component
 *
 * Displays the "Universal Baseline" — the core value proposition that
 * applies to every business, regardless of industry.
 * Acts as the anchor point in the industry grid.
 */
const CenterCard: React.FC<CenterCardProps> = () => {
  return (
    <InteractiveTilt className="h-full">
      <div className="relative overflow-hidden bg-brand-link/5 backdrop-blur-2xl border border-brand-link/20 rounded-[24px] p-6 flex flex-col h-full shadow-sm group">
        <div className="relative z-10 flex flex-col h-full text-center">
          {/* Label indicating the cross-industry nature of these stats */}
          <div className="mb-1">
            <span className="text-brand-link text-[8px] font-black tracking-[0.3em] uppercase">
              Universal Core
            </span>
          </div>

          <h3 className="text-xl font-black text-(--foreground) uppercase mb-1 tracking-tighter">
            {UNIVERSAL_BASELINE.title}
          </h3>
          <div className="h-0.5 w-8 bg-brand-link/40 mx-auto mb-4 rounded-full" />

          <p className="text-[13px] text-(--muted-foreground) leading-relaxed mb-6 font-medium max-w-[280px] mx-auto">
            {UNIVERSAL_BASELINE.description}
          </p>

          {/* 
            Core ROI Grid:
            Standardized display for baseline performance improvements 
            (time, efficiency, etc.) seen across the entire client base.
          */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-3 mb-8 flex-1 content-center">
            {UNIVERSAL_BASELINE.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span
                  className={`text-2xl font-black tracking-tighter tabular-nums ${
                    metric.value.startsWith("–") || metric.value.startsWith("-")
                      ? "text-brand-error"
                      : "text-brand-success"
                  }`}
                >
                  {metric.value}
                </span>
                <span className="text-[8px] font-bold text-(--muted-foreground) uppercase tracking-widest mt-0.5 text-center leading-tight max-w-[80px]">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <Button
            variant="primary"
            size="md"
            className="w-full mt-auto bg-brand-link hover:bg-brand-link/90 text-white dark:text-black py-3 font-black uppercase tracking-widest shadow-md shadow-brand-link/10 text-[10px]"
            onClick={() =>
              window.open("https://atomicx.ravan.ai/book", "_blank")
            }
          >
            {UNIVERSAL_BASELINE.buttonText}
          </Button>
        </div>
      </div>
    </InteractiveTilt>
  );
};

export default CenterCard;
