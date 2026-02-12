import React from "react";
import Slider from "../ui/Slider";
import { useCurrency } from "../../hooks/useCurrency";

interface ROISliderGroupProps {
  leads: number;
  setLeads: (value: number) => void;
  dealValue: number;
  setDealValue: (value: number) => void;
  closeRate: number;
  setCloseRate: (value: number) => void;
  leadsLabel: string;
  dealValueLabel: string;
  closeRateLabel: string;
  isRevenueBased: boolean;
}

/**
 * ROISliderGroup Component
 * Renders contextual input sliders for the ROI Calculator.
 * Labels and ranges adapt based on the selected industry preset.
 */
const ROISliderGroup: React.FC<ROISliderGroupProps> = ({
  leads,
  setLeads,
  dealValue,
  setDealValue,
  closeRate,
  setCloseRate,
  leadsLabel,
  dealValueLabel,
  closeRateLabel,
  isRevenueBased,
}) => {
  const { formatCurrency } = useCurrency();

  // Compute sensible max for leads slider
  const leadsMax = (() => {
    if (leads <= 500) return 1000;
    if (leads <= 5000) return 10000;
    return 200000;
  })();

  // Compute sensible max for deal value slider
  const dealMax = (() => {
    if (dealValue <= 1000) return 2000;
    if (dealValue <= 10000) return 50000;
    if (dealValue <= 50000) return 200000;
    return 500000;
  })();

  return (
    <div className="space-y-10">
      <Slider
        label={leadsLabel}
        valueDisplay={leads.toLocaleString()}
        min="10"
        max={leadsMax.toString()}
        step={leadsMax > 10000 ? "500" : leadsMax > 1000 ? "50" : "10"}
        value={leads}
        onChange={(e) => setLeads(parseInt(e.target.value))}
      />

      <Slider
        label={dealValueLabel}
        valueDisplay={formatCurrency(dealValue)}
        min="10"
        max={dealMax.toString()}
        step={dealMax > 50000 ? "1000" : dealMax > 5000 ? "500" : "10"}
        value={dealValue}
        onChange={(e) => setDealValue(parseInt(e.target.value))}
      />

      {isRevenueBased && closeRateLabel && (
        <Slider
          label={closeRateLabel}
          valueDisplay={`${closeRate}%`}
          min="0.5"
          max="90"
          step="0.5"
          value={closeRate}
          onChange={(e) => setCloseRate(parseFloat(e.target.value))}
        />
      )}
    </div>
  );
};

export default ROISliderGroup;
