/**
 * @file leadProblemData.tsx
 * @description Constants and interfaces defining the data for the "Lead Problem" section.
 * This includes timeline events used to illustrate lead spoilage.
 */

/**
 * Represents an event in the lead conversion timeline, used to illustrate 'won' or 'lost' opportunities.
 */
export interface LeadProblemTimelineEvent {
  time: string;
  event: string;
  result: string;
  type: "won" | "lost";
  image?: string;
}

/**
 * Sequential events demonstrating typical failures in speed-to-lead for manual systems.
 */
export const timelineEvents: LeadProblemTimelineEvent[] = [
  {
    time: "0 min",
    event: "Lead Submits Form",
    result: "AI calls immediately",
    type: "won",
    image:
      "https://raw.githubusercontent.com/Acinnamon9/vite-react/main/public/assets/Lead submits form.jpg",
  },
  {
    time: "3 min",
    event: "Peak Interest Window",
    result: "Your SDR hasn't seen it yet",
    type: "lost",
    image:
      "https://raw.githubusercontent.com/Acinnamon9/vite-react/main/public/assets/Peak Interest Window.jpg",
  },
  {
    time: "1 hour",
    event: "Lead Goes Cold",
    result: "21x less likely to convert",
    type: "lost",
    image:
      "https://raw.githubusercontent.com/Acinnamon9/vite-react/main/public/assets/Lead Goes Cold.jpg",
  },
  {
    time: "24 hours",
    event: "First Contact Attempt",
    result: "Already bought from competitor",
    type: "lost",
    image:
      "https://raw.githubusercontent.com/Acinnamon9/vite-react/main/public/assets/First Contact Attempt.jpg",
  },
];
