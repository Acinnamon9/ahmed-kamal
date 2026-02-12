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
}

/**
 * ROISliderGroup Component
 * Renders the input sliders for the ROI Calculator.
 */
const ROISliderGroup: React.FC<ROISliderGroupProps> = ({
  leads,
  setLeads,
  dealValue,
  setDealValue,
  closeRate,
  setCloseRate,
}) => {
  const { formatCurrency } = useCurrency();

  return (
    <>
      <Slider
        label="Monthly Leads"
        valueDisplay={leads.toLocaleString()}
        min="10"
        max={leads > 1000 ? Math.max(leads * 1.5, 100000).toString() : "1000"}
        step={leads > 1000 ? "100" : "10"}
        value={leads}
        onChange={(e) => setLeads(parseInt(e.target.value))}
      />

      <Slider
        label="Avg. Deal Value"
        valueDisplay={formatCurrency(dealValue)}
        min="10"
        max={
          dealValue > 50000
            ? Math.max(dealValue * 1.5, 500000).toString()
            : "50000"
        }
        step={dealValue > 1000 ? "500" : "10"}
        value={dealValue}
        onChange={(e) => setDealValue(parseInt(e.target.value))}
      />

      <Slider
        label="Current Close Rate"
        valueDisplay={`${closeRate}%`}
        min="0.1"
        max="90"
        step="0.1"
        value={closeRate}
        onChange={(e) => setCloseRate(parseFloat(e.target.value))}
      />
    </>
  );
};

export default ROISliderGroup;
