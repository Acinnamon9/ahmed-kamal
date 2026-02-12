import React from "react";
import { ROI_PRESETS, type ROIPreset } from "../../constants/roiPresets";
import { cn } from "../../lib/utils";

interface IndustryPresetsProps {
  activePresetId: string | null;
  onSelect: (preset: ROIPreset) => void;
}

const IndustryPresets: React.FC<IndustryPresetsProps> = ({
  activePresetId,
  onSelect,
}) => {
  return (
    <div className="mb-10">
      <p className="text-[9px] font-black text-(--muted-foreground) uppercase tracking-[0.3em] mb-4 text-center lg:text-left opacity-60">
        Select Your Sector
      </p>
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {ROI_PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => onSelect(preset)}
            className={cn(
              "px-3 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border cursor-pointer flex items-center gap-1.5",
              activePresetId === preset.id
                ? "bg-brand-link text-white dark:text-black border-brand-link shadow-lg shadow-brand-link/25 scale-[1.02]"
                : "bg-white/5 text-(--muted-foreground) border-white/10 hover:border-brand-link/40 hover:text-brand-link hover:bg-brand-link/5",
            )}
          >
            <span className="text-xs">{preset.icon}</span>
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IndustryPresets;
