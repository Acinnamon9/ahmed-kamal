import React, { useState } from "react";
import { Section, Container } from "./ui/Layout";
import TimelineHeader from "./timeline/TimelineHeader";
import TimelineTrack from "./timeline/TimelineTrack";
import TimelineStep from "./timeline/TimelineStep";
import { TIMELINE_STEPS } from "./timeline/data";

/**
 * OnboardingTimeline Component
 *
 * An interactive, sequential timeline that visualizes the "48-hour launch" process.
 * Features a progress-linked central axis with alternating cards and hover-activated unlocking.
 *
 * Modularized for improved readability and maintenance.
 */
const OnboardingTimeline: React.FC = () => {
  // State: hoveredIndex tracks which step the user is currently pointing at
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  /**
   * State: unlockedIndex
   * Implements a "Progressive Disclosure" pattern. Users must 'discover' the timeline
   * by moving their mouse over the nodes to unlock subsequent steps.
   */
  const [unlockedIndex, setUnlockedIndex] = useState<number>(0);

  // Derive activeIndex: give priority to hover for visual focus, fallback to current progress
  const activeIndex = hoveredIndex !== null ? hoveredIndex : unlockedIndex;

  // progressPercent: Drives the width of the cyan progress bar on desktop
  const progressPercent = activeIndex / (TIMELINE_STEPS.length - 1);

  return (
    <Section
      id="timeline"
      className="bg-transparent py-32 relative overflow-hidden"
    >
      {/* Visual Background Accent: Large atmospheric glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10 max-w-[1700px]">
        {/* Intro Section: Staggered entrance animations for header content */}
        <TimelineHeader />

        {/* Actual Timeline Interface */}
        <div className="relative max-w-6xl mx-auto py-48">
          {/* Central axes and animated progress overlay */}
          <TimelineTrack progressPercent={progressPercent} />

          {/* Sequential Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 relative">
            {TIMELINE_STEPS.map((step, index) => (
              <TimelineStep
                key={step.id}
                step={step}
                index={index}
                isActive={index <= activeIndex}
                isUnlocked={index <= unlockedIndex}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  // "Unlock" logic: moving the mouse specifically over a node makes it permanent
                  if (index === unlockedIndex) {
                    setUnlockedIndex((prev) =>
                      Math.min(prev + 1, TIMELINE_STEPS.length - 1),
                    );
                  }
                }}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OnboardingTimeline;
