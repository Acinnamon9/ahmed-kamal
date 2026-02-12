export interface ROIPreset {
  id: string;
  label: string;
  leads: number;
  dealValue: number;
  closeRate: number;
  description: string;
  isRevenueBased: boolean;
}

export const ROI_PRESETS: ROIPreset[] = [
  {
    id: "real-estate",
    label: "Real Estate",
    leads: 500,
    dealValue: 8000,
    closeRate: 3,
    description: "High volume. Low close rate. Speed matters most.",
    isRevenueBased: true,
  },
  {
    id: "healthcare",
    label: "Healthcare",
    leads: 900,
    dealValue: 1750,
    closeRate: 55,
    description: "Retention > acquisition. No-show reduction drives revenue.",
    isRevenueBased: true,
  },
  {
    id: "finance",
    label: "Financial Services",
    leads: 600,
    dealValue: 11000,
    closeRate: 12,
    description: "Heavy qualification funnel. Strong compliance friction.",
    isRevenueBased: true,
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    leads: 20000,
    dealValue: 95,
    closeRate: 2.5,
    description: "High volume. Margins thin. Automation impact must scale.",
    isRevenueBased: true,
  },
  {
    id: "supply-chain",
    label: "Supply Chain",
    leads: 175,
    dealValue: 130000,
    closeRate: 20,
    description: "Low lead volume. High deal value. Longer sales cycles.",
    isRevenueBased: true,
  },
  {
    id: "hospitality",
    label: "Hospitality",
    leads: 5000,
    dealValue: 900,
    closeRate: 45,
    description: "Missed-call loss is a real revenue leak.",
    isRevenueBased: true,
  },
  {
    id: "automotive",
    label: "Automotive",
    leads: 600,
    dealValue: 2750,
    closeRate: 12,
    description: "Speed-to-lead directly correlates with close probability.",
    isRevenueBased: true,
  },
  {
    id: "pro-services",
    label: "Professional Services",
    leads: 175,
    dealValue: 50000,
    closeRate: 22,
    description: "Qualification quality matters more than volume.",
    isRevenueBased: true,
  },
  {
    id: "government",
    label: "Government",
    leads: 10000,
    dealValue: 0,
    closeRate: 0,
    description:
      "Social Impact: Processing time, backlog reduction, cost per case.",
    isRevenueBased: false,
  },
];
