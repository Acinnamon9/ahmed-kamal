import React from "react";
import { type Industry } from "../../constants/industryData";
import InteractiveTilt from "../ui/InteractiveTilt";

interface SectorCardProps {
  industry: Industry;
  onHover: (industry: Industry | null) => void;
}

/**
 * SectorCard Component
 *
 * Represents a specialized AI implementation for a specific business vertical.
 * Features a high-contrast layout emphasizing ROI metrics and visual context.
 *
 * Uses React.memo for efficient rendering in large grids.
 */
const SectorCard: React.FC<SectorCardProps> = React.memo(
  ({ industry, onHover }) => (
    <InteractiveTilt className="h-full">
      <div
        className="relative group bg-(--card)/30 backdrop-blur-xl border border-(--border)/50 rounded-[24px] p-5 flex flex-col h-full shadow-sm hover:bg-(--card)/50 transition-all duration-500 overflow-hidden"
        onMouseEnter={() => onHover(industry)} // Parent coordination for focal effects
        onMouseLeave={() => onHover(null)}
      >
        {/* 
          Snapshot Window:
          An aesthetic preview area that transitions from grayscale to full color 
          on hover, symbolizing "bringing clarity/life" to the sector.
        */}
        <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-5 border border-white/5">
          <img
            src={industry.image}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out group-hover:scale-105 delay-200"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-20" />
        </div>

        {/* Content Area: Identification and context tags */}
        <div className="flex flex-col flex-1">
          <div className="flex items-baseline justify-between mb-4 gap-2">
            <h3 className="text-xl md:text-2xl font-black text-(--foreground) uppercase tracking-tighter leading-none">
              {industry.label}
            </h3>
            <span className="text-[10px] font-bold text-brand-link bg-white dark:bg-white/5 border border-brand-link/40 rounded-full px-2.5 py-1 shadow-sm shrink-0 whitespace-nowrap leading-none">
              {industry.title}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4 opacity-60">
            {industry.tags.slice(0, 2).map((tag: string) => (
              <span
                key={tag}
                className="text-[12px] font-bold text-(--muted-foreground) uppercase tracking-wider"
              >
                #{tag.replace(/\s+/g, "")}
              </span>
            ))}
          </div>

          <p className="text-[13px] text-(--muted-foreground) leading-relaxed mb-6 font-medium">
            {industry.description}
          </p>

          {/* 
            Metrics Section:
            Dynamically colored based on value content. 
            Green: Growth / Gains.
            Red: Risk Reductions / Cost savings (indicated by '-' prefix).
          */}
          <div className="mt-auto pt-4 border-t border-(--border)/40 space-y-3">
            {industry.metrics.map((metric: any, idx: number) => (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[14px] font-black text-(--muted-foreground) uppercase tracking-wide leading-none">
                    {metric.label}
                  </span>
                  {metric.mechanism && (
                    <span className="text-[12px] text-brand-link font-bold uppercase mt-1 tracking-tight">
                      {metric.mechanism.replace("via ", "• ")}
                    </span>
                  )}
                </div>
                <span
                  className={`text-2xl font-black tracking-tighter tabular-nums ${
                    metric.value.startsWith("–") || metric.value.startsWith("-")
                      ? "text-brand-error"
                      : "text-brand-success"
                  }`}
                >
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InteractiveTilt>
  ),
);

export default SectorCard;
