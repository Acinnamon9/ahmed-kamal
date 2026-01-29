/**
 * @file journeyData.ts
 * @description Constants and interfaces for the 4-card multi-narrative Journey section.
 */

export interface NarrativeCard {
  title: string;
  description: string;
  image: string;
  metric?: string;
  type: "won" | "lost";
  isFeatured?: boolean;
}

export interface Narrative {
  id: string;
  tabLabel: string;
  cards: NarrativeCard[];
}

export const JOURNEY_NARRATIVES: Narrative[] = [
  {
    id: "desire-decay",
    tabLabel: "⏱ Lead Goes Cold",
    cards: [
      {
        title: "INSTANT RESPONSE",
        description:
          "Capture interest at the absolute peak of intent. AtomicX ensures every lead is met with immediate engagement.",
        image:
          "https://client-of-vivek.vercel.app/assets/Lead submits form.jpg",
        metric: "< 5s",
        type: "won",
        isFeatured: true,
      },
      {
        title: "PEAK WINDOW",
        description:
          "The golden window closes. Slow response kills conversions—your SDR hasn't seen the notification yet.",
        image:
          "https://client-of-vivek.vercel.app/assets/Peak Interest Window.jpg",
        metric: "3 min",
        type: "lost",
      },
      {
        title: "LEAD SPOILAGE",
        description:
          "Intent begins to evaporate. You are now 21x less likely to convert this expensive, hard-won lead.",
        image: "https://client-of-vivek.vercel.app/assets/Lead Goes Cold.jpg",
        metric: "1 hour",
        type: "lost",
      },
      {
        title: "TOTAL LOSS",
        description:
          "The lead has already purchased from a competitor. Your acquisition cost is now a pure loss.",
        image:
          "https://client-of-vivek.vercel.app/assets/First Contact Attempt.jpg",
        metric: "24 hours",
        type: "lost",
      },
    ],
  },
  {
    id: "human-bottleneck",
    tabLabel: "🧠 Human Bottleneck",
    cards: [
      {
        title: "THE SILENT KILLER",
        description:
          "Shockingly, 70% of inbound leads never get called. You're paying for traffic you never attempt to close.",
        image:
          "https://client-of-vivek.vercel.app/assets/THE SILENT KILLER.jpeg",
        metric: "70%",
        type: "lost",
        isFeatured: true,
      },
      {
        title: "REP HESITATION",
        description:
          "Humans don't follow up consistently. Junior reps freeze or overthink the pitch, losing the lead.",
        image: "https://client-of-vivek.vercel.app/assets/REP HESITATION.jpeg",
        type: "lost",
      },
      {
        title: "FOLLOW-UP DECAY",
        description:
          "The effort disappears fast. Statistics show follow-up attempts drop off a cliff after day 2.",
        image: "https://client-of-vivek.vercel.app/assets/FOLLOW-UP DECAY.jpeg",
        metric: "Day 2",
        type: "lost",
      },
      {
        title: "QUALIFICATION WASTE",
        description:
          "Sales teams waste 40% of their time on bad-fit leads instead of focusing on high-intent buyers.",
        image:
          "https://client-of-vivek.vercel.app/assets/QUALIFICATION WASTE.jpeg",
        metric: "40%",
        type: "lost",
      },
    ],
  },
  {
    id: "trust-erosion",
    tabLabel: "🔁 Trust Erosion",
    cards: [
      {
        title: "TRUST INTEGRITY",
        description:
          "Every handoff degrades trust. Fragmented experiences make leads feel like a number, not a customer.",
        image: "https://client-of-vivek.vercel.app/assets/TRUST INTEGRITY.jpeg",
        metric: "-60%",
        type: "lost",
        isFeatured: true,
      },
      {
        title: "REPETITION",
        description:
          "The caller has to explain their problem for the third time. Trust evaporates with every repeat question.",
        image: "https://client-of-vivek.vercel.app/assets/REPETITION.jpeg",
        type: "lost",
      },
      {
        title: "FRAGMENTATION",
        description:
          "Reps have zero shared history or context. The brand feels disconnected and unprofessional.",
        image: "https://client-of-vivek.vercel.app/assets/FRAGMENTATION.jpeg",
        type: "lost",
      },
      {
        title: "FRICTION EXIT",
        description:
          "The buyer feels unsafe and abandons the journey due to perceived negligence and friction.",
        image: "https://client-of-vivek.vercel.app/assets/FRICTION EXIT.jpeg",
        type: "lost",
      },
    ],
  },
];
