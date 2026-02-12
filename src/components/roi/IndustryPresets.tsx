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
    <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
      {ROI_PRESETS.map((preset) => (
        <button
          key={preset.id}
          onClick={() => onSelect(preset)}
          className={cn(
            "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border",
            activePresetId === preset.id
              ? "bg-brand-link text-white dark:text-black border-brand-link shadow-lg shadow-brand-link/20"
              : "bg-white/5 text-(--muted-foreground) border-white/10 hover:border-brand-link/40 hover:text-brand-link",
          )}
        >
          {preset.label}
        </button>
      ))}
    </div>
  );
};

export default IndustryPresets;
