import React, { useState } from "react";
import { Section, Container } from "./ui/Layout";
import { Card } from "./ui/Card";
import Button from "./ui/Button";
import Magnetic from "./ui/Magnetic";
import InteractiveTilt from "./ui/InteractiveTilt";
import Badge from "./ui/Badge";
import ROISliderGroup from "./roi/ROISliderGroup";
import ROIResultCard from "./roi/ROIResultCard";

/**
 * ROICalculator Component
 *
 * An interactive tool that allows potential clients to estimate revenue growth
 * by switching to AI-driven lead management.
 */
const ROICalculator: React.FC = () => {
  // Input States: Managed locally to provide real-time feedback on calculation
  const [leads, setLeads] = useState(300);
  const [dealValue, setDealValue] = useState(1000);
  const [closeRate, setCloseRate] = useState(7);

  /**
   * REVENUE PROJECTION LOGIC:
   * 1. currentRevenue: Based on existing manual closure rates.
   * 2. projectedRevenue: A 30% conservative baseline uplift achieved by
   *    eliminating response latency and ensuring 100% follow-up.
   */
  const currentRevenue = leads * (closeRate / 100) * dealValue;
  const projectedRevenue = currentRevenue * 0.3;

  return (
    <Section className="bg-transparent overflow-hidden relative py-24 md:py-32">
      {/* 
        Thematic Background Decor: 
        Soft localized glows that match the site's hero gradient colors.
      */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-(--hero-gradient-from) rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-(--hero-gradient-to) rounded-full blur-[100px] opacity-10" />
      </div>

      <Container className="relative z-10">
        {/* Main Glassmorphic Panel Wrapper */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden py-10 px-6 md:px-12">
          {/* Internal Glass Flow Overlay: creates a subtle chromatic variation */}
          <div className="absolute inset-0 bg-linear-to-br from-brand-primary/5 via-transparent to-brand-primary/5 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto relative z-10">
            {/* Left Column: Educational Copy & Action */}
            <div className="max-w-xl text-center lg:text-left">
              <div className="mb-6">
                <Badge
                  variant="outline"
                  className="text-brand-link border-brand-link/20 bg-brand-link/5 tracking-[0.3em] font-black"
                >
                  Performance Analytics
                </Badge>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black text-(--foreground) mb-8 leading-[1.05] tracking-tighter uppercase">
                Project Your <br />
                <span className="text-brand-link">Revenue Uplift</span>
              </h2>
              <p className="text-lg text-(--muted-foreground) leading-relaxed font-medium mb-10 max-w-lg mx-auto lg:mx-0">
                Quantify the operational leakage in your current manual
                workflows. Our AI eliminates response delay and maximizes every
                unit of inbound lead traffic.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                {/* Magnetic Interaction: Makes the button feel physically reactive */}
                <Magnetic>
                  <Button
                    size="xl"
                    className="shadow-xl shadow-brand-link/20 group uppercase tracking-widest text-xs font-black"
                    onClick={() =>
                      window.open("https://atomicx.ravan.ai/book", "_blank")
                    }
                  >
                    Request Strategic Setup
                  </Button>
                </Magnetic>
                <span className="text-[10px] font-bold text-(--muted-foreground) uppercase tracking-widest opacity-60">
                  *Verified by Danube & Emaar
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Slider Suite */}
            <InteractiveTilt strength={5}>
              <Card
                variant="white"
                className="p-8 sm:p-12 shadow-2xl relative overflow-hidden bg-(--card)/40 backdrop-blur-xl border border-(--border)/30"
              >
                <div className="space-y-12">
                  <ROISliderGroup
                    leads={leads}
                    setLeads={setLeads}
                    dealValue={dealValue}
                    setDealValue={setDealValue}
                    closeRate={closeRate}
                    setCloseRate={setCloseRate}
                  />

                  {/* Result Panel: Reacts instantly to state changes above */}
                  <ROIResultCard projectedRevenue={projectedRevenue} />
                </div>

                {/* Subtle Technical 'Glow' accent in the corner */}
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
