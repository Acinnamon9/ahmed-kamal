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
        max="1000"
        step="10"
        value={leads}
        onChange={(e) => setLeads(parseInt(e.target.value))}
      />

      <Slider
        label="Avg. Deal Value"
        valueDisplay={formatCurrency(dealValue)}
        min="500"
        max="50000"
        step="500"
        value={dealValue}
        onChange={(e) => setDealValue(parseInt(e.target.value))}
      />

      <Slider
        label="Current Close Rate"
        valueDisplay={`${closeRate}%`}
        min="1"
        max="30"
        step="0.5"
        value={closeRate}
        onChange={(e) => setCloseRate(parseFloat(e.target.value))}
      />
    </>
  );
};

export default ROISliderGroup;
