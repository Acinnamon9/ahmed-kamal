import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InteractiveDemo from "./components/InteractiveDemo";
import JourneyTimeline from "./components/journey/Timeline";
import LayoutToggle from "./components/ui/LayoutToggle";
import InteractiveBackground from "./components/ui/InteractiveBackground";
import OnboardingTimeline from "./components/OnboardingTimeline";
import ChatBot from "./components/ChatBot";
import { BookingProvider } from "./context/BookingContext";
import BookingModal from "./components/ui/BookingModal";

// Lazy load non-critical sections to optimize initial bundle size
const AITeam = lazy(() => import("./components/AITeam"));
const IndustrySolutions = lazy(() => import("./components/IndustrySolutions"));
const ROICalculator = lazy(() => import("./components/ROICalculator"));
const Approach = lazy(() => import("./components/Approach"));
const SocialProof = lazy(() => import("./components/SocialProof"));
const FAQ = lazy(() => import("./components/FAQ"));
const Footer = lazy(() => import("./components/Footer"));

/**
 * PAGE LAYOUT CONFIGURATION
 * To reorder the page, simply move the objects in this array.
 * Each object defines a section and its stacking order.
 */
const PAGE_SECTIONS = [
  { id: "hero", Component: Hero, zIndex: 10, isLazy: false },
  { id: "journey", Component: JourneyTimeline, zIndex: 20, isLazy: false },
  { id: "ai-team", Component: AITeam, zIndex: 30, isLazy: true },
  {
    id: "onboarding",
    Component: OnboardingTimeline,
    zIndex: 40,
    isLazy: true,
  },
  { id: "demo", Component: InteractiveDemo, zIndex: 50, isLazy: true },
  { id: "approach", Component: Approach, zIndex: 60, isLazy: true },
  { id: "solutions", Component: IndustrySolutions, zIndex: 70, isLazy: true },
  { id: "roi", Component: ROICalculator, zIndex: 80, isLazy: true },
  { id: "social-proof", Component: SocialProof, zIndex: 90, isLazy: true },
  { id: "faq", Component: FAQ, zIndex: 100, isLazy: true },
  { id: "footer", Component: Footer, zIndex: 110, isLazy: true },
];

/**
 * Main App Component
 *
 * This is the entry point of the application. It sets up the main layout,
 * global context providers, and renders the page sections dynamically.
 */
function App() {
  return (
    // BookingProvider: Manages the state and logic for the booking demo modal globally
    <BookingProvider>
      <div className="relative font-jakarta bg-(--background) selection:bg-brand-primary/20 selection:text-brand-primary min-h-screen">
        {/* Animated background layer that follows or reacts to the mouse */}
        <InteractiveBackground />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Modal for Booking Demos - triggered by buttons across the site */}
        <BookingModal />

        {/* Floating toggle for switching between layout modes or themes */}
        <LayoutToggle />

        {/* Integrated ChatBot widget for lead capture/interaction */}
        <ChatBot />

        {/* Main Content Area: Renders all page sections based on PAGE_SECTIONS config */}
        <div className="flex flex-col">
          {PAGE_SECTIONS.map(({ id, Component, zIndex, isLazy }) => {
            const content = (
              <div
                key={id}
                id={id}
                className="relative bg-transparent"
                style={{ zIndex }}
              >
                <Component />
              </div>
            );

            // Conditional rendering for lazy-loaded components to improve performance
            if (isLazy) {
              return (
                <Suspense
                  key={id}
                  fallback={<div className="min-h-[50vh] bg-transparent" />}
                >
                  {content}
                </Suspense>
              );
            }

            return content;
          })}
        </div>
      </div>
    </BookingProvider>
  );
}

export default App;
