import React from "react";
import { Section, Container } from "./ui/Layout";
import WorkforceHeader from "./workforce/WorkforceHeader";
import WorkforceMarquee from "./workforce/WorkforceMarquee";
import WorkforceGrid from "./workforce/WorkforceGrid";
import WorkforceCTA from "./workforce/WorkforceCTA";

/**
 * WORKFORCE CONFIGURATION
 * Toggle between 'marquee' (infinite scroll) and 'grid' (static cards).
 */
const WORKFORCE_CONFIG = {
  layout: "grid" as "marquee" | "grid",
};

/**
 * Workforce Component
 * Presents the AI Workforce as a high-end command center.
 */
/**
 * AITeam (Workforce) Component
 *
 * Showcases the "AI Workforce" fleet using a futuristic command center aesthetic.
 * This component is highly configurable, supporting both static grid and
 * infinite marquee layouts.
 */
const AITeam: React.FC = () => {
  // isExpanded: state to reveal more team members in the grid layout
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Section
      id="ai-team"
      className="font-jakarta bg-transparent py-16 sm:py-20 relative overflow-hidden"
    >
      {/* 
        Layer 0: Precision Grid Pattern
        Adds a subtle industrial/technical feel with recurring dot patterns.
      */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0 bg-[grid-size:40px_40px] mask-[radial-gradient(ellipse_at_center,black,transparent)]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
          }}
        />
      </div>

      <Container className="max-w-7xl relative z-10">
        {/* Main Glassmorphic Wrapper */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden py-10 px-6 md:px-12">
          {/* Glass Gradient Overlay: adds chromatic depth */}
          <div className="absolute inset-0 bg-linear-to-br from-brand-primary/5 via-transparent to-brand-primary/5 pointer-events-none" />

          {/* Sub-Components for modular structure */}
          <WorkforceHeader />

          {/* 
            DYNAMIC LAYOUT ENGINE:
            Renders a static Grid or an infinite Marquee based on WORKFORCE_CONFIG.
          */}
          {WORKFORCE_CONFIG.layout === "grid" && (
            <WorkforceGrid isExpanded={isExpanded} />
          )}

          {WORKFORCE_CONFIG.layout === "marquee" && <WorkforceMarquee />}

          <div className="mt-12">
            <WorkforceCTA
              isExpanded={isExpanded}
              toggleExpanded={() => setIsExpanded(!isExpanded)}
            />
          </div>
        </div>
      </Container>

      {/* Atmospheric Radial Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),transparent_70%)] pointer-events-none" />
    </Section>
  );
};

export default AITeam;
