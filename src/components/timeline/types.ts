import { ReactNode } from "react";

export interface TimelineStepType {
  id: string;
  title: string;
  description: string;
  day: string;
  icon: ReactNode;
  position: "top" | "bottom";
}
