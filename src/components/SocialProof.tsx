import React, { useState } from "react";
import { caseStudies } from "../constants/proofData";
import { Section, Container } from "./ui/Layout";
import ProofHeader from "./proof/ProofHeader";
import { motion, AnimatePresence } from "framer-motion";
import ArchiveSidebar from "./proof/modular/ArchiveSidebar";
import IntelligencePane from "./proof/modular/IntelligencePane";

/**
 * SocialProof Component
 *
 * Showcases verified case studies using a "Mission Archive" interface.
 * Users can browse through various client successes, each presented with
 * specific metrics, situation analysis, and authenticated testimonials.
 *
 * Modularized for improved readability and maintenance.
 */
const SocialProof: React.FC = () => {
  // activeIndex: controls which case study is currently shown in the detail pane
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStudy = caseStudies[activeIndex];

  return (
    <Section
      id="social-proof"
      className="font-jakarta py-24 md:py-32 overflow-hidden bg-transparent border-y border-(--border)/30"
    >
      <Container>
        <ProofHeader />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-16 max-w-7xl mx-auto">
          {/* Mission Archive Sidebar: Selection Navigation */}
          <ArchiveSidebar
            caseStudies={caseStudies}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />

          {/* 
            Operational Intelligence Pane:
            Detailed view for the selected case study. 
            Uses AnimatePresence for a heavy 'slide-across' transition effect.
          */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStudy.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                <IntelligencePane activeStudy={activeStudy} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SocialProof;
