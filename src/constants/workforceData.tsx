import React from "react";
import {
  PhoneForwarded,
  Headset,
  MessageSquareQuote,
  Megaphone,
  MailCheck,
  CalendarCheck2,
  GitMerge,
  GraduationCap,
} from "lucide-react";

export interface WorkforceMetric {
  value: string;
  label: string;
}

export interface WorkforceRole {
  id: string;
  title: string;
  replaces: string;
  replacesValue: string;
  features: string[];
  metrics?: WorkforceMetric[];
  icon: React.ReactNode;
  image?: string;
}

export const workforceRoles: WorkforceRole[] = [
  {
    id: "sales-rep",
    title: "AI Sales Representative",
    replaces: "Outbound SDR Team",
    replacesValue: "$15k/mo",
    image:
      "https://raw.githubusercontent.com/Acinnamon9/vite-react/main/public/assets/Sales representative.png",
    features: [
      "Calls inbound leads in under 3 minutes",
      "Qualifies prospects via logic-based voice",
      "Books appointments directly to calendar",
    ],
    metrics: [
      { value: "3m", label: "Response Speed" },
      { value: "24/7", label: "Outbound Ops" },
    ],
    icon: <PhoneForwarded size={32} strokeWidth={2} />,
  },
  {
    id: "receptionist",
    title: "AI Receptionist",
    replaces: "Front Desk & Admin",
    replacesValue: "$4k/mo",
    image:
      "https://raw.githubusercontent.com/Acinnamon9/vite-react/main/public/assets/Receptionist.png",
    features: [
      "Answers every inbound call instantly",
      "Routes inquiries with zero hold time",
      "Handles scheduling & complex FAQs",
    ],
    metrics: [
      { value: "100%", label: "Pickup Rate" },
      { value: "0s", label: "Wait Time" },
    ],
    icon: <Headset size={32} strokeWidth={2} />,
  },
  {
    id: "customer-service",
    title: "AI Support Agent",
    replaces: "Tier 1 Support Staff",
    replacesValue: "$4k/mo",
    image:
      "https://raw.githubusercontent.com/Acinnamon9/vite-react/main/public/assets/Customer service.png",
    features: [
      "Resolves common issues 24/7/365",
      "Available via Chat, SMS, and Email",
      "Instant handoff for complex tickets",
    ],
    metrics: [
      { value: "85%", label: "Self-Resolution" },
      { value: "Real-Time", label: "Availability" },
    ],
    icon: <MessageSquareQuote size={32} strokeWidth={2} />,
  },
  {
    id: "influencer",
    title: "AI Social Media Influencer",
    replaces: "Marketing & Ad Agency",
    replacesValue: "$5k/mo",
    image:
      "https://raw.githubusercontent.com/Acinnamon9/vite-react/main/public/assets/Social media influencer.png",
    features: [
      "Creates & posts viral content daily",
      "Manages paid ad campaigns 24/7",
      "Generates high-intent inbound leads",
    ],
    metrics: [
      { value: "10k+", label: "Daily Views" },
      { value: "3.5%", label: "Direct CTR" },
    ],
    icon: <Megaphone size={32} strokeWidth={2} />,
  },
  {
    id: "lead-nurturer",
    title: "AI Lead Nurturer",
    replaces: "Email & WhatsApp SDR",
    replacesValue: "$5k/mo",
    image:
      "https://raw.githubusercontent.com/Acinnamon9/vite-react/main/public/assets/Lead Nurturer.png",
    features: [
      "Runs 60-day follow-up sequences",
      "Warms cold leads with context",
      "Hands off only sales-ready prospects",
    ],
    metrics: [
      { value: "45%", label: "Conv. Uplift" },
      { value: "60d", label: "Max Sequence" },
    ],
    icon: <MailCheck size={32} strokeWidth={2} />,
  },
  {
    id: "appointment-setter",
    title: "AI Appointment Setter",
    replaces: "Administrative SDR",
    replacesValue: "$8k/mo",
    image:
      "https://raw.githubusercontent.com/Acinnamon9/vite-react/main/public/assets/Sales representative.png",
    features: [
      "Eliminates no-shows via smart follow-up",
      "Syncs availability across team",
      "Handles reschedules automatically",
    ],
    metrics: [
      { value: "-40%", label: "No-Show Rate" },
      { value: "Instant", label: "Sync" },
    ],
    icon: <CalendarCheck2 size={32} strokeWidth={2} />,
  },
  {
    id: "funnel-optimizer",
    title: "AI Funnel Optimizer",
    replaces: "CRO Specialist Staff",
    replacesValue: "$10k/mo",
    image:
      "https://raw.githubusercontent.com/Acinnamon9/vite-react/main/public/assets/AB tester.png",
    features: [
      "Identifies friction in buyers journey",
      "Suggests copy & flow improvements",
      "Runs continuous A/B testing cycles",
    ],
    metrics: [
      { value: "12x", label: "Faster Testing" },
      { value: "Auto", label: "Iteration" },
    ],
    icon: <GitMerge size={32} strokeWidth={2} />,
  },
  {
    id: "onboarding-specialist",
    title: "AI Onboarding Expert",
    replaces: "Customer Success Team",
    replacesValue: "$6k/mo",
    image:
      "https://raw.githubusercontent.com/Acinnamon9/vite-react/main/public/assets/Onboarding specialist.png",
    features: [
      "Guides new users step-by-step 24/7",
      "Reduces day-0 churn via education",
      "Auto-resolves integration friction",
    ],
    metrics: [
      { value: "-25%", label: "Early Churn" },
      { value: "Rapid", label: "Activation" },
    ],
    icon: <GraduationCap size={32} strokeWidth={2} />,
  },
];
