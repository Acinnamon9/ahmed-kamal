export interface IndustryMetric {
  value: string;
  label: string;
  mechanism?: string;
}

export interface Industry {
  id: string;
  label: string;
  title: string;
  tags: string[];
  metrics: IndustryMetric[];
  buttonText: string;
  image: string;
  description: string;
}

export const UNIVERSAL_BASELINE: Industry = {
  id: "global",
  label: "Universal Baseline",
  title: "Universal Infrastructure Gains",
  tags: ["Cross-Industry Native", "Immediate Deployment", "Baseline ROI"],
  metrics: [
    {
      value: "+25%",
      label: "Contact Rate",
      mechanism: "via <2min response time",
    },
    {
      value: "–40%",
      label: "Missed Opportunities",
      mechanism: "via 24/7 overflow capture",
    },
    {
      value: "–30%",
      label: "Labor Overhead",
      mechanism: "via automated screening",
    },
    {
      value: "+15%",
      label: "Baseline Conversion",
      mechanism: "via consistent follow-up",
    },
  ],
  buttonText: "See Universal Impact",
  image: "https://client-of-vivek.vercel.app/Global Status.png",
  description:
    "Our core intelligence layer provides immediate efficiency across every operational node, slashing response times and standardizing quality.",
};

export const industries: Industry[] = [
  {
    id: "real-estate",
    label: "Real Estate",
    title: "Lead Response Engine",
    tags: ["Instant <2m Response", "CRM Auto-Sync", "20 hrs saved/week"],
    metrics: [
      {
        value: "+30–60%",
        label: "Lead Contact Rate",
        mechanism: "via <2m auto-dialer",
      },
      {
        value: "+20–35%",
        label: "Appointments Booked",
        mechanism: "via recursive calendar sync",
      },
    ],
    buttonText: "Book a Meeting",
    image: "https://client-of-vivek.vercel.app/Real Estate.png",
    description:
      "Agents bridge the gap between portal enquiry and viewing, qualifying buyers instantly and syncing data directly to your CRM.",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    title: "Intake Optimization",
    tags: ["Swift Scheduling", "Auto-Reminders", "Front-Desk Relief"],
    metrics: [
      {
        value: "–20–35%",
        label: "No-Show Rate",
        mechanism: "via multi-channel logic",
      },
      {
        value: "2–4x",
        label: "Booking Speed",
        mechanism: "via instant slot-selection",
      },
    ],
    buttonText: "Book a Meeting",
    image: "https://client-of-vivek.vercel.app/Healthcare.png",
    description:
      "AI manages the entire patient intake lifecycle, from instant slot booking to insurance verification and automated follow-ups.",
  },
  {
    id: "finance",
    label: "Financial Services",
    title: "Verification Protocol",
    tags: ["Document Collection", "Live Transcription", "Compliance-Ready"],
    metrics: [
      {
        value: "+25–45%",
        label: "Completion Rate",
        mechanism: "via OCR document assist",
      },
      {
        value: "–40–60%",
        label: "Handling Cost",
        mechanism: "via automated screening",
      },
    ],
    buttonText: "Book a Meeting",
    image: "https://client-of-vivek.vercel.app/Lending and Finance.png",
    description:
      "Standardize complex document intake and KYC with OCR-enabled agents that guide applicants through the process in real-time.",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    title: "Retention Operations",
    tags: ["Cart Recovery Calls", "COD Confirmation", "RTO Reduction"],
    metrics: [
      {
        value: "+10–25%",
        label: "Recovery Rate",
        mechanism: "via abandonment triggers",
      },
      {
        value: "–20–40%",
        label: "RTO Rate",
        mechanism: "via COD verification IVR",
      },
    ],
    buttonText: "Book a Meeting",
    image: "https://client-of-vivek.vercel.app/E-commerce.png",
    description:
      "Recover abandoned carts with personalized voice calls and verify COD orders instantly to eliminate RTO losses.",
  },
  {
    id: "supply-chain",
    label: "Supply Chain",
    title: "Dynamic Dispatch",
    tags: ["Route Logic", "Address Accuracy", "Dispatch Yield"],
    metrics: [
      {
        value: "+10–25%",
        label: "First-Attempt Success",
        mechanism: "via ETA-sync notifications",
      },
      {
        value: "–30–50%",
        label: "Resolution Time",
        mechanism: "via smart routing rules",
      },
    ],
    buttonText: "Book a Meeting",
    image: "https://client-of-vivek.vercel.app/Supply Chain Management.png",
    description:
      "Optimize last-mile efficiency by resolving address conflicts and coordinating delivery windows via persistent customer loops.",
  },
  {
    id: "hospitality",
    label: "Hospitality",
    title: "Inbound Capture",
    tags: ["24/7 Concierge", "Upsell Attach", "Review Logic"],
    metrics: [
      {
        value: "+15–30%",
        label: "Capture Rate",
        mechanism: "via 24/7 AI attendant",
      },
      {
        value: "–40–70%",
        label: "Missed-Call Loss",
        mechanism: "via overflow automation",
      },
    ],
    buttonText: "Book a Meeting",
    image: "https://client-of-vivek.vercel.app/Hospitality.png",
    description:
      "Never miss a booking with a 24/7 AI concierge that handles reservations, FAQs, and local recommendations across 40+ languages.",
  },
  {
    id: "automotive",
    label: "Automotive",
    title: "Lifecycle Management",
    tags: ["Service Reminders", "Maintenance Sync", "Sales Follow-up"],
    metrics: [
      {
        value: "+20–40%",
        label: "Service Bookings",
        mechanism: "via DMS-sync alerts",
      },
      {
        value: "8–15 hrs",
        label: "Saved Weekly",
        mechanism: "via auto-followup cycles",
      },
    ],
    buttonText: "Book a Meeting",
    image: "https://client-of-vivek.vercel.app/Automotive.png",
    description:
      "Maximize workshop yield with agents that proactively book service slots and follow-up on sales leads before they go cold.",
  },
  {
    id: "pro-services",
    label: "Professional Services",
    title: "High-Value Intake",
    tags: ["Lead Qualification", "Auto-Summarized", "Missed-Call Loss Zero"],
    metrics: [
      {
        value: "+25–50%",
        label: "Inbound Capture",
        mechanism: "via live lead-scoring",
      },
      {
        value: "–50–80%",
        label: "Missed-Call Loss",
        mechanism: "via instant response API",
      },
    ],
    buttonText: "Book a Meeting",
    image: "https://client-of-vivek.vercel.app/Professional services.png",
    description:
      "Capture and score high-value leads instantly, providing summarized insights to your team to focus work on the winners.",
  },
];
