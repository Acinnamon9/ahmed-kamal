import React from "react";
import { useCurrency } from "../../hooks/useCurrency";

interface ROIResultCardProps {
  isRevenueBased: boolean;
  upliftMechanism: string;
  tagline: string;

  // Revenue-based props
  currentRevenue?: number;
  projectedRevenue?: number;
  currentCloseRate?: number;
  boostedCloseRate?: number;
  leads?: number;

  // Government (non-revenue) props
  monthlyCases?: number;
  costPerCase?: number;
  uplift?: number;
}

/**
 * ROIResultCard Component
 * Shows a Before → After comparison for revenue-based industries,
 * or an efficiency gains panel for non-revenue sectors like Government.
 */
const ROIResultCard: React.FC<ROIResultCardProps> = ({
  isRevenueBased,
  upliftMechanism,
  tagline,
  currentRevenue = 0,
  projectedRevenue = 0,
  currentCloseRate = 0,
  boostedCloseRate = 0,
  leads = 0,
  monthlyCases = 0,
  costPerCase = 0,
  uplift = 0,
}) => {
  const { formatCurrency } = useCurrency();

  const additionalRevenue = projectedRevenue - currentRevenue;
  const currentDeals = Math.round(leads * (currentCloseRate / 100));
  const projectedDeals = Math.round(leads * (boostedCloseRate / 100));

  // Government KPIs
  const currentMonthlyCost = monthlyCases * costPerCase;
  const projectedCostPerCase = costPerCase * (1 - uplift * 0.6);
  const projectedMonthlyCost = monthlyCases * projectedCostPerCase;
  const costSaved = currentMonthlyCost - projectedMonthlyCost;
  const backlogReduction = Math.round(uplift * 100 * 1.2);
  const responseTimeReduction = Math.round(uplift * 100 * 1.5);

  if (!isRevenueBased) {
    return (
      <div className="space-y-6">
        {/* Government: Efficiency Gains */}
        <div className="bg-brand-link/5 rounded-2xl p-6 border border-brand-link/20 relative overflow-hidden">
          <div className="absolute top-3 left-4">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
              <span className="text-[8px] font-black text-brand-link uppercase tracking-[0.2em]">
                Efficiency Forecast
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-brand-error tracking-tighter">
                –{responseTimeReduction}%
              </div>
              <div className="text-[8px] font-bold text-(--muted-foreground) uppercase tracking-widest mt-1.5">
                Response Time
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-brand-error tracking-tighter">
                –{backlogReduction}%
              </div>
              <div className="text-[8px] font-bold text-(--muted-foreground) uppercase tracking-widest mt-1.5">
                Case Backlog
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-brand-success tracking-tighter">
                {formatCurrency(costSaved)}
              </div>
              <div className="text-[8px] font-bold text-(--muted-foreground) uppercase tracking-widest mt-1.5">
                Monthly Savings
              </div>
            </div>
          </div>
        </div>

        {/* Mechanism + Tagline */}
        <div className="text-center space-y-2 pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-success/10 border border-brand-success/20">
            <span className="text-[9px] font-black text-brand-success uppercase tracking-widest">
              {upliftMechanism}
            </span>
          </div>
          <p className="text-[10px] text-(--muted-foreground) font-bold uppercase tracking-widest opacity-70">
            {tagline}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Before vs After Comparison */}
      <div className="grid grid-cols-2 gap-4">
        {/* BEFORE */}
        <div className="bg-(--muted)/30 rounded-2xl p-5 border border-(--border)/50 text-center relative">
          <div className="absolute top-3 left-0 right-0">
            <span className="text-[8px] font-black text-(--muted-foreground) uppercase tracking-[0.25em] opacity-60">
              Current — Manual
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <div className="text-lg sm:text-xl font-black text-(--muted-foreground) tracking-tighter">
                {currentCloseRate.toFixed(1)}%
              </div>
              <div className="text-[8px] font-bold text-(--muted-foreground) uppercase tracking-widest opacity-60">
                Close Rate
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-(--muted-foreground) tracking-tighter">
                {currentDeals}
              </div>
              <div className="text-[8px] font-bold text-(--muted-foreground) uppercase tracking-widest opacity-60">
                Deals / Month
              </div>
            </div>
            <div className="pt-2 border-t border-(--border)/30">
              <div className="text-xl sm:text-2xl font-black text-(--muted-foreground) tracking-tighter">
                {formatCurrency(currentRevenue)}
              </div>
              <div className="text-[8px] font-bold text-(--muted-foreground) uppercase tracking-widest opacity-60">
                Monthly Revenue
              </div>
            </div>
          </div>
        </div>

        {/* AFTER */}
        <div className="bg-brand-link/5 rounded-2xl p-5 border border-brand-link/20 text-center relative group hover:border-brand-link/40 transition-all duration-500">
          <div className="absolute top-3 left-0 right-0">
            <span className="text-[8px] font-black text-brand-link uppercase tracking-[0.25em]">
              Projected — With AI
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <div className="text-lg sm:text-xl font-black text-brand-success tracking-tighter">
                {boostedCloseRate.toFixed(1)}%
              </div>
              <div className="text-[8px] font-bold text-(--muted-foreground) uppercase tracking-widest">
                Close Rate
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-brand-success tracking-tighter">
                {projectedDeals}
              </div>
              <div className="text-[8px] font-bold text-(--muted-foreground) uppercase tracking-widest">
                Deals / Month
              </div>
            </div>
            <div className="pt-2 border-t border-brand-link/20">
              <div className="text-xl sm:text-2xl font-black text-brand-link tracking-tighter">
                {formatCurrency(projectedRevenue)}
              </div>
              <div className="text-[8px] font-bold text-(--muted-foreground) uppercase tracking-widest">
                Monthly Revenue
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delta / Additional Revenue Highlight */}
      <div className="bg-brand-success/5 rounded-2xl p-5 text-center border border-brand-success/20 relative overflow-hidden group hover:border-brand-success/40 transition-all duration-500">
        <div className="absolute top-3 left-4">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
            <span className="text-[8px] font-black text-brand-success uppercase tracking-[0.2em]">
              Forecast Active
            </span>
          </div>
        </div>
        <div className="relative z-10 mt-2">
          <div className="text-[9px] font-black text-(--muted-foreground) uppercase tracking-[0.3em] mb-2 opacity-70">
            Additional Monthly Revenue
          </div>
          <div className="text-4xl sm:text-5xl font-black text-brand-success tracking-tighter mb-3 transition-transform group-hover:scale-105 duration-1000">
            +{formatCurrency(additionalRevenue)}
          </div>
          <div className="text-[10px] font-bold text-(--muted-foreground) uppercase tracking-widest opacity-80">
            +{projectedDeals - currentDeals} extra deals ×{" "}
            {formatCurrency(projectedRevenue / (projectedDeals || 1))} avg.
          </div>
        </div>
      </div>

      {/* Mechanism + Tagline */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-link/10 border border-brand-link/20">
          <span className="text-[9px] font-black text-brand-link uppercase tracking-widest">
            ↑ {upliftMechanism}
          </span>
        </div>
        <p className="text-[10px] text-(--muted-foreground) font-bold uppercase tracking-widest opacity-70">
          {tagline}
        </p>
      </div>
    </div>
  );
};

export default ROIResultCard;
