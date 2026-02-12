import React, { useState } from "react";
import { Section, Container } from "./ui/Layout";
import { Card } from "./ui/Card";
import Button from "./ui/Button";
import Magnetic from "./ui/Magnetic";
import InteractiveTilt from "./ui/InteractiveTilt";
import Badge from "./ui/Badge";
import ROISliderGroup from "./roi/ROISliderGroup";
import ROIResultCard from "./roi/ROIResultCard";
import IndustryPresets from "./roi/IndustryPresets";
import { ROI_PRESETS, type ROIPreset } from "../constants/roiPresets";

/**
 * ROICalculator Component
 *
 * An interactive Before → After comparison tool.
 * Users select an industry preset (or adjust manually) and see
 * exactly how AI-driven lead management shifts their unit economics.
 */
const ROICalculator: React.FC = () => {
  const defaultPreset = ROI_PRESETS[0]; // Real Estate

  const [leads, setLeads] = useState(defaultPreset.leads);
  const [dealValue, setDealValue] = useState(defaultPreset.dealValue);
  const [closeRate, setCloseRate] = useState(defaultPreset.closeRate);
  const [activePresetId, setActivePresetId] = useState<string | null>(
    defaultPreset.id,
  );

  const handlePresetSelect = (preset: ROIPreset) => {
    setActivePresetId(preset.id);
    setLeads(preset.leads);
    setDealValue(preset.dealValue);
    setCloseRate(preset.closeRate);
  };

  // Resolve active preset (fall back to defaults for custom slider states)
  const activePreset = ROI_PRESETS.find((p) => p.id === activePresetId);
  const uplift = activePreset?.uplift ?? 0.3;
  const isRevenueBased = activePreset?.isRevenueBased ?? true;

  // Revenue-based calculation
  const currentCloseRate = closeRate;
  const boostedCloseRate = Math.min(closeRate * (1 + uplift), 100);
  const currentRevenue = leads * (currentCloseRate / 100) * dealValue;
  const projectedRevenue = leads * (boostedCloseRate / 100) * dealValue;

  // Context labels
  const leadsLabel = activePreset?.leadsLabel ?? "Monthly Leads";
  const dealValueLabel = activePreset?.dealValueLabel ?? "Avg. Deal Value";
  const closeRateLabel = activePreset?.closeRateLabel ?? "Current Close Rate";
  const upliftMechanism =
    activePreset?.upliftMechanism ?? "+30% operational efficiency";
  const tagline =
    activePreset?.tagline ?? "Conservative baseline across all sectors.";

  return (
    <Section className="bg-transparent overflow-hidden relative py-24 md:py-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-(--hero-gradient-from) rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-(--hero-gradient-to) rounded-full blur-[100px] opacity-10" />
      </div>

      <Container className="relative z-10">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden py-10 px-6 md:px-12">
          <div className="absolute inset-0 bg-linear-to-br from-brand-primary/5 via-transparent to-brand-primary/5 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-6xl mx-auto relative z-10">
            {/* Left Column: Copy + Industry Selector */}
            <div className="max-w-xl text-center lg:text-left">
              <div className="mb-6">
                <Badge
                  variant="outline"
                  className="text-brand-link border-brand-link/20 bg-brand-link/5 tracking-[0.3em] font-black"
                >
                  ROI Calculator
                </Badge>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black text-(--foreground) mb-8 leading-[1.05] tracking-tighter uppercase">
                Project Your <br />
                <span className="text-brand-link">Revenue Uplift</span>
              </h2>
              <p className="text-lg text-(--muted-foreground) leading-relaxed font-medium mb-10 max-w-lg mx-auto lg:mx-0">
                Select your industry to see how AI transforms your unit
                economics. Every number is based on real operational data.
              </p>

              <IndustryPresets
                activePresetId={activePresetId}
                onSelect={handlePresetSelect}
              />

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Magnetic>
                  <Button
                    size="xl"
                    className="shadow-xl shadow-brand-link/20 group uppercase tracking-widest text-xs font-black"
                    onClick={() =>
                      window.open("https://atomicx.ravan.ai/book", "_blank")
                    }
                  >
                    Get Custom Analysis
                  </Button>
                </Magnetic>
                <span className="text-[10px] font-bold text-(--muted-foreground) uppercase tracking-widest opacity-60">
                  Custom report in 24h
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Calculator */}
            <InteractiveTilt strength={5}>
              <Card
                variant="white"
                className="p-8 sm:p-10 shadow-2xl relative overflow-hidden bg-(--card)/40 backdrop-blur-xl border border-(--border)/30"
              >
                <div className="space-y-10">
                  {/* Active Preset Indicator */}
                  {activePreset && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{activePreset.icon}</span>
                      <span className="text-[10px] font-black text-(--foreground) uppercase tracking-[0.2em]">
                        {activePreset.label}
                      </span>
                      <span className="text-[8px] font-bold text-(--muted-foreground) uppercase tracking-widest opacity-60 ml-auto">
                        Adjust below ↓
                      </span>
                    </div>
                  )}

                  {/* Sliders */}
                  <ROISliderGroup
                    leads={leads}
                    setLeads={(val) => {
                      setLeads(val);
                      setActivePresetId(activePresetId); // keep preset active (just slider override)
                    }}
                    dealValue={dealValue}
                    setDealValue={(val) => {
                      setDealValue(val);
                      setActivePresetId(activePresetId);
                    }}
                    closeRate={closeRate}
                    setCloseRate={(val) => {
                      setCloseRate(val);
                      setActivePresetId(activePresetId);
                    }}
                    leadsLabel={leadsLabel}
                    dealValueLabel={dealValueLabel}
                    closeRateLabel={closeRateLabel}
                    isRevenueBased={isRevenueBased}
                  />

                  {/* Results: Before → After */}
                  <ROIResultCard
                    isRevenueBased={isRevenueBased}
                    upliftMechanism={upliftMechanism}
                    tagline={tagline}
                    currentRevenue={currentRevenue}
                    projectedRevenue={projectedRevenue}
                    currentCloseRate={currentCloseRate}
                    boostedCloseRate={boostedCloseRate}
                    leads={leads}
                    monthlyCases={leads}
                    costPerCase={dealValue}
                    uplift={uplift}
                  />
                </div>

                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-link/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
              </Card>
            </InteractiveTilt>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ROICalculator;
