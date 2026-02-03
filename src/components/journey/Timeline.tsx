import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { JOURNEY_NARRATIVES } from "../../constants/journeyData";
import { Section, Container } from "../ui/Layout";
import BackgroundDecor from "./BackgroundDecor";
import JourneyHeader from "./JourneyHeader";
import JourneyTabs from "./JourneyTabs";
import NarrativeStepCard from "./NarrativeStepCard";

/**
 * JourneyTimeline Component
 * A modularized, high-end visual audit of revenue leaks.
 * Supports multiple narratives: Time Decay, Human Bottleneck, and Trust Erosion.
 * Layout: Numbered 4-card horizontal grid for sequential storytelling.
 */
/**
 * JourneyTimeline Component
 * This is the main orchestrator for the "Revenue Leak" section.
 * It manages which 'narrative' (Time Decay, Human Bottleneck, etc.) is currently being displayed.
 */
const JourneyTimeline: React.FC = () => {
  // state: tracks which narrative tab is currently selected
  const [activeNarrativeId, setActiveNarrativeId] = useState(
    JOURNEY_NARRATIVES[0].id,
  );

  // find the actual data object for the selected ID
  const activeNarrative =
    JOURNEY_NARRATIVES.find((n) => n.id === activeNarrativeId) ||
    JOURNEY_NARRATIVES[0];

  return (
    <Section
      id="journey-timeline"
      className="bg-transparent py-20 md:py-28 relative overflow-hidden"
    >
      {/* Decorative background effects (mesh, glows, etc.) */}
      <BackgroundDecor />

      <Container className="max-w-[1400px] relative z-10 px-6">
        {/* Header with Title and "Revenue Leak Analysis" Badge */}
        <JourneyHeader />

        {/* The tab switcher to change between different story-lines */}
        <JourneyTabs
          activeId={activeNarrativeId}
          onTabChange={setActiveNarrativeId}
        />

        {/* 
          AnimatePresence: helps animate components entering/leaving the DOM.
          When the user clicks a tab, the old grid fades out and the new one fades in.
        */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNarrativeId}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            {/* Map through the cards of the active narrative and render each as a card */}
            {activeNarrative.cards.map((card, idx) => (
              <NarrativeStepCard key={idx} card={card} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
};

export default JourneyTimeline;
