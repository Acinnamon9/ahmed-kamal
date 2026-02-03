import { ReactNode } from "react";
import { PhoneForwarded, MessageSquare, Zap } from "lucide-react";

export interface DemoStepType {
  id: string;
  label: string;
  description: string;
  icon: ReactNode;
  color: string;
  bg: string;
  border: string;
}

export const DEMO_STEPS: DemoStepType[] = [
  {
    id: "widget",
    label: "AI Website Voice Widget",
    description:
      "Embeddable voice AI that captures leads and answers questions directly on your site",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
  },
  {
    id: "calling",
    label: "AI Calling",
    description:
      "Human-like phone agents for inbound support and outbound sales campaigns",
    icon: <PhoneForwarded className="w-6 h-6" />,
    color: "text-brand-primary",
    bg: "bg-brand-primary/10",
    border: "border-brand-primary/20",
  },
  {
    id: "automation",
    label: "AI Automation",
    description:
      "End-to-end workflow automation that connects your CRM, calendar, and tools",
    icon: <Zap className="w-6 h-6" />,
    color: "text-brand-success",
    bg: "bg-brand-success/10",
    border: "border-brand-success/20",
  },
];
