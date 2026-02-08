import React from "react";

interface Metric {
  value: string;
  label: string;
}

interface RoleCardMetricsProps {
  metrics?: Metric[];
}

const RoleCardMetrics: React.FC<RoleCardMetricsProps> = ({ metrics }) => {
  if (!metrics) return null;

  return (
    <div className="grid grid-cols-2 gap-4 pt-8 border-t border-(--border) mt-auto">
      {metrics.map((metric, i) => (
        <div
          key={i}
          className="relative p-2 rounded-lg bg-white/10 border border-(--border) group-hover:border-brand-primary/20 transition-all overflow-hidden"
        >
          <div className="relative z-10">
            <span className="block text-lg font-black text-brand-primary tracking-tighter leading-none drop-shadow-xs">
              {metric.value}
            </span>
            <span className="text-[7px] text-(--muted-foreground) font-black uppercase tracking-[0.2em] mt-0.5 block drop-shadow-xs">
              {metric.label}
            </span>
          </div>
          {/* Subtle Metric Glow */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-brand-primary/5 rounded-bl-[20px]"></div>
        </div>
      ))}
    </div>
  );
};

export default RoleCardMetrics;
