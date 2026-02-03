import React, { useState, useEffect } from "react";
import {
  industries,
  type Industry,
  UNIVERSAL_BASELINE,
} from "../constants/industryData";
import { Section, Container } from "./ui/Layout";
import SectorCard from "./industry/SectorCard";
import CenterCard from "./industry/CenterCard";
import IndustryHeader from "./industry/IndustryHeader";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";
import { cn } from "../lib/utils";

/**
 * IndustrySolutions Component
 *
 * Displays sector-specific AI implementations using a modular grid.
 * Features an "Intelligence Suite" that can be expanded to show more sectors,
 * and a "Universal Core" card that reacts to user interactions with other sectors.
 */
const IndustrySolutions: React.FC = () => {
  // isExpanded: toggles between showing a preview or the full list of industries
  const [isExpanded, setIsExpanded] = useState(false);

  // hoveredIndustry: state passed to the CenterCard to highlight shared data/metrics
  const [hoveredIndustry, setHoveredIndustry] = useState<Industry | null>(null);

  useEffect(() => {
    /**
     * Performance Optimization: Image Preloading
     * Fetches industry-related background images/icons in advance so they
     * appear instantly without flickering when the user interacts or expands.
     */
    industries.forEach((ind) => {
      if (ind.image) {
        const img = new Image();
        img.src = ind.image;
      }
    });
    if (UNIVERSAL_BASELINE.image) {
      const img = new Image();
      img.src = UNIVERSAL_BASELINE.image;
    }
  }, []);

  return (
    <Section
      id="solutions"
      className="font-jakarta py-16 md:py-20 overflow-hidden bg-transparent"
    >
      <Container>
        <IndustryHeader />

        <div className="flex flex-col gap-12">
          {/* 
            The Sector Core Grid:
            Uses AnimatePresence and 'layout' props from Framer Motion to smoothly
            reflow cards when the list expands or contracts.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            <AnimatePresence mode="popLayout">
              {/* Fixed First Industry Card */}
              <motion.div
                key={industries[0].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                layout
                transition={{ duration: 0.4 }}
              >
                <SectorCard
                  industry={industries[0]}
                  onHover={setHoveredIndustry}
                />
              </motion.div>

              {/* 
                "Universal Core" Anchor Card:
                Positioned statically as the 2nd item. It serves as a visual hub,
                reacting to whichever sector the user is currently hovering over.
              */}
              <motion.div
                key="universal-core"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                layout
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <CenterCard hoveredIndustry={hoveredIndustry} />
              </motion.div>

              {/* 
                Dynamic Industry List:
                Slices the data based on 'isExpanded' state to show/hide extra sectors.
              */}
              {(isExpanded ? industries.slice(1) : industries.slice(1, 2)).map(
                (ind, idx) => (
                  <motion.div
                    key={ind.id}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                      y: 10,
                      transition: { duration: 0.2 },
                    }}
                    transition={{
                      duration: 0.4,
                      delay: isExpanded ? (idx + 2) * 0.05 : 0.1,
                    }}
                    layout
                  >
                    <SectorCard industry={ind} onHover={setHoveredIndustry} />
                  </motion.div>
                ),
              )}
            </AnimatePresence>
          </div>

          {/* Controls: Enquiry CTA and View More Toggle */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
            {/* Sector-specific Enquiry Trigger */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-1 flex flex-col items-center md:items-start"
            >
              <div className="relative group">
                <Button
                  variant="glass-primary"
                  size="lg"
                  className="w-full md:w-auto px-6 md:px-8 py-4 font-black tracking-wider md:tracking-widest rounded-2xl text-[10px] md:text-xs whitespace-normal md:whitespace-nowrap bg-brand-link/20 border-brand-link/30 hover:bg-brand-link/30 hover:border-brand-link/40 shadow-brand-link/10"
                  onClick={() =>
                    window.open("https://atomicx.ravan.ai/book", "_blank")
                  }
                >
                  <span className="flex items-center gap-2">
                    ENQUIRE ABOUT YOUR SECTOR
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </Button>

                {/* Micro-Interaction: Hover tooltip for social proof/expectation setting */}
                <div className="absolute bottom-full left-1/2 md:left-0 md:translate-x-0 -translate-x-1/2 mb-4 px-3 py-2 bg-brand-depth/90 backdrop-blur-md border border-white/10 rounded-lg text-[9px] font-black text-white uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl translate-y-2 group-hover:translate-y-0">
                  Custom analysis in 24h
                  <div className="absolute top-full left-1/2 md:left-8 -translate-x-1/2 border-8 border-transparent border-t-brand-depth/90"></div>
                </div>
              </div>
            </motion.div>

            {/* Layout Expansion Controller */}
            <motion.div layout className="order-2 md:order-2">
              <Button
                variant="glass"
                onClick={() => {
                  if (isExpanded) {
                    // Scroll back to the top of the section when closing for better UX
                    document
                      .getElementById("solutions")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                  setIsExpanded(!isExpanded);
                }}
                className="group relative px-10 py-4 rounded-full border-brand-link/20 hover:border-brand-link/50 text-[11px] font-black tracking-[0.2em] uppercase transition-all bg-brand-link/5"
              >
                <span className="flex items-center gap-4">
                  {isExpanded
                    ? "Close Full Suite"
                    : "Unlock Sector Intelligence Suite"}
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform duration-500",
                      isExpanded ? "rotate-180" : "group-hover:translate-y-0.5",
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>

                {/* Visual "New" or "Available" Ping Indicator */}
                {!isExpanded && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3 pointer-events-none">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default IndustrySolutions;
