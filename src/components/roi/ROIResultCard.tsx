import React from "react";
import { useCurrency } from "../../hooks/useCurrency";

interface ROIResultCardProps {
  projectedRevenue: number;
  isRevenueBased?: boolean;
  description?: string;
}

/**
 * ROIResultCard Component
 * Displays the calculated projected revenue uplift or efficiency gains.
 */
const ROIResultCard: React.FC<ROIResultCardProps> = ({
  projectedRevenue,
  isRevenueBased = true,
  description,
}) => {
  const { formatCurrency } = useCurrency();

  return (
    <div className="bg-brand-link/5 rounded-[32px] p-8 text-center border border-brand-link/20 relative overflow-hidden group hover:border-brand-link/40 transition-all duration-500">
      {/* HUD Accent */}
      <div className="absolute top-4 left-4">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
          <span className="text-[8px] font-black text-brand-link uppercase tracking-[0.2em]">
            Forecast Active
          </span>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-link/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-all duration-500 group-hover:scale-110">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brand-link"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="text-[10px] font-black text-(--muted-foreground) uppercase tracking-[0.3em] mb-4 opacity-80">
          {isRevenueBased
            ? "Projected Monthly Revenue Uplift"
            : "Projected Efficiency Gain"}
        </div>
        <div className="text-5xl sm:text-7xl font-black text-brand-link tracking-tighter mb-4 transition-transform group-hover:scale-105 duration-1000 delay-200 selection:bg-brand-link/30">
          {isRevenueBased ? formatCurrency(projectedRevenue) : "35–50%"}
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-success/10 border border-brand-success/20">
            <span className="text-[9px] font-black text-brand-success uppercase tracking-widest">
              {isRevenueBased
                ? "+30% Operational Gain"
                : "Backlog Reduction Ready"}
            </span>
          </div>
          {description && (
            <p className="text-[10px] text-(--muted-foreground) font-bold uppercase tracking-widest max-w-[280px] leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ROIResultCard;
