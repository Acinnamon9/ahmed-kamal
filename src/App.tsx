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

// Lazy load non-critical sections
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

  { id: "journey", Component: JourneyTimeline, zIndex: 22, isLazy: false },
  { id: "ai-team", Component: AITeam, zIndex: 30, isLazy: true },

  {
    id: "onboarding",
    Component: OnboardingTimeline,
    zIndex: 35,
    isLazy: false,
  },
  { id: "demo", Component: InteractiveDemo, zIndex: 15, isLazy: false },
  { id: "approach", Component: Approach, zIndex: 55, isLazy: true },

  { id: "solutions", Component: IndustrySolutions, zIndex: 40, isLazy: true },
  { id: "roi", Component: ROICalculator, zIndex: 50, isLazy: true },
  { id: "social-proof", Component: SocialProof, zIndex: 60, isLazy: true },
  { id: "faq", Component: FAQ, zIndex: 70, isLazy: true },
  { id: "footer", Component: Footer, zIndex: 90, isLazy: true },
];

function App() {
  return (
    <BookingProvider>
      <div className="relative font-jakarta bg-(--background) selection:bg-brand-primary/20 selection:text-brand-primary min-h-screen">
        <InteractiveBackground />
        <Navbar />
        <BookingModal />
        <LayoutToggle />
        <ChatBot />

        <div className="flex flex-col">
          {PAGE_SECTIONS.map(({ id, Component, zIndex, isLazy }) => {
            const content = (
              <div
                key={id}
                className="relative bg-transparent"
                style={{ zIndex }}
              >
                <Component />
              </div>
            );

            if (isLazy) {
              return (
                <Suspense
                  key={id}
                  fallback={<div className="h-screen bg-transparent" />}
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
