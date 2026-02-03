import { CheckCircle2, Clock, Rocket, Zap, Search } from "lucide-react";
import { TimelineStepType } from "./types";

/**
 * TIMELINE_STEPS
 * Static configuration for the 48-hour onboarding journey.
 * Each step includes positioning metadata for the desktop alternating layout.
 */
export const TIMELINE_STEPS: TimelineStepType[] = [
  {
    id: "audit",
    title: "Discovery Audit",
    description: "Deep dive into your current lead flow bottlenecks.",
    day: "Hour 0-4",
    icon: <Search className="w-5 h-5" />,
    position: "top", // Logic: Determines if the card floats above or below the center line
  },
  {
    id: "strategy",
    title: "Custom Strategy",
    description: "We architect the exact AI agents you need.",
    day: "Hour 5-12",
    icon: <Zap className="w-5 h-5" />,
    position: "bottom",
  },
  {
    id: "build",
    title: "System Build",
    description: "Configuring your voice, chat, and nurture bots.",
    day: "Hour 13-36",
    icon: <Clock className="w-5 h-5" />,
    position: "top",
  },
  {
    id: "train",
    title: "Knowledge Training",
    description: "Feeding the AI your scripts, objections, and FAQs.",
    day: "Hour 37-47",
    icon: <CheckCircle2 className="w-5 h-5" />,
    position: "bottom",
  },
  {
    id: "launch",
    title: "Live Launch",
    description: "Your AI workforce goes live. Leads convert instantly.",
    day: "Hour 48",
    icon: <Rocket className="w-5 h-5" />,
    position: "top",
  },
];
