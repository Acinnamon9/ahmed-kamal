import React, { useState, useRef } from "react";
import { Section, Container } from "./ui/Layout";
import { useScroll, useTransform } from "framer-motion";
import TimelineHeader from "./timeline/TimelineHeader";
import TimelineTrack from "./timeline/TimelineTrack";
import TimelineStep from "./timeline/TimelineStep";
import { TIMELINE_STEPS } from "./timeline/data";

/**
 * OnboardingTimeline Component
 *
 * An interactive, sequential timeline that visualizes the "48-hour launch" process.
 * Features scroll-based progressive reveal: cards unlock as the timeline scrolls from
 * bottom to middle of the viewport.
 *
 * Modularized for improved readability and maintenance.
 */
const OnboardingTimeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Track scroll progress of the timeline section
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.9", "start 0.6"], // Triggers reveal as the top moves from bottom to middle
  });

  // Map scroll progress (0 to 1) to number of unlocked cards (1 to 5)
  const unlockedCount = useTransform(
    scrollYProgress,
    [0, 1],
    [1, TIMELINE_STEPS.length],
  );

  // Convert to integer for indexing
  const [currentUnlocked, setCurrentUnlocked] = useState(1);

  React.useEffect(() => {
    return unlockedCount.on("change", (latest) => {
      setCurrentUnlocked(Math.floor(latest));
    });
  }, [unlockedCount]);

  // progressPercent: Drives the width of the cyan progress bar on desktop
  const progressPercent = (currentUnlocked - 1) / (TIMELINE_STEPS.length - 1);

  return (
    <Section className="bg-transparent py-32 relative overflow-hidden ">
      <Container className="relative z-10 max-w-[1700px]">
        {/* Intro Section: Staggered entrance animations for header content */}
        <TimelineHeader />

        {/* Timeline Content Area: Large vertical space for alternating cards */}
        <div
          ref={timelineRef}
          className="relative max-w-6xl mx-auto py-64 mt-16"
        >
          {/* 
            THE AXIS: 
            This div is the absolute vertical center. 
            Everything (Track + Dots) is anchored here.
          */}
          <div className="absolute top-1/2 left-0 w-full h-0 flex items-center">
            {/* The horizontal track line */}
            <TimelineTrack progressPercent={progressPercent} />

            {/* The steps grid, also centered on the same line */}
            <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0">
              {TIMELINE_STEPS.map((step, index) => (
                <TimelineStep
                  key={step.id}
                  step={step}
                  index={index}
                  isActive={hoveredIndex === index}
                  isUnlocked={index < currentUnlocked}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OnboardingTimeline;
