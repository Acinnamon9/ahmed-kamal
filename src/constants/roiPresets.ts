export interface ROIPreset {
  id: string;
  label: string;
  icon: string;

  // Default slider values
  leads: number;
  dealValue: number;
  closeRate: number;

  // Industry-specific uplift applied to close rate (0.30 = +30%)
  uplift: number;

  // Context labels for sliders
  leadsLabel: string;
  dealValueLabel: string;
  closeRateLabel: string;

  // What drives the uplift — shown in result
  upliftMechanism: string;

  // Tagline shown below result
  tagline: string;

  isRevenueBased: boolean;
}

/*────────────────────────────────────────────────────────────────
  Revenue-based preset formula:
    Current Revenue  = leads × (closeRate / 100) × dealValue
    Boosted Rate     = closeRate × (1 + uplift)
    Projected Rev.   = leads × (boostedRate / 100) × dealValue
    Additional Rev.  = Projected – Current

  Government (non-revenue):
    Uses separate KPIs rendered differently by the UI.
────────────────────────────────────────────────────────────────*/

export const ROI_PRESETS: ROIPreset[] = [
  {
    id: "real-estate",
    label: "Real Estate",
    icon: "🏢",
    leads: 500,
    dealValue: 8000,
    closeRate: 3,
    uplift: 0.45,
    leadsLabel: "Monthly Leads",
    dealValueLabel: "Avg. Commission Revenue",
    closeRateLabel: "Lead → Close Rate",
    upliftMechanism: "Speed-to-lead < 2 min response",
    tagline: "High volume. Low close rate. Speed matters most.",
    isRevenueBased: true,
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: "🏥",
    leads: 900,
    dealValue: 1500,
    closeRate: 55,
    uplift: 0.25,
    leadsLabel: "Monthly Patient Inquiries",
    dealValueLabel: "Avg. Patient LTV",
    closeRateLabel: "Inquiry → Attended Rate",
    upliftMechanism: "No-show reduction via multi-channel reminders",
    tagline: "Retention > acquisition. No-show reduction drives revenue.",
    isRevenueBased: true,
  },
  {
    id: "finance",
    label: "Financial Services",
    icon: "💰",
    leads: 500,
    dealValue: 10000,
    closeRate: 12,
    uplift: 0.35,
    leadsLabel: "Monthly Applicants",
    dealValueLabel: "Avg. Deal Value (Commission/LTV)",
    closeRateLabel: "Application → Close Rate",
    upliftMechanism: "OCR-assisted intake + automated screening",
    tagline: "Heavy qualification funnel. Strong compliance friction.",
    isRevenueBased: true,
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: "🛒",
    leads: 25000,
    dealValue: 85,
    closeRate: 2.5,
    uplift: 0.5,
    leadsLabel: "Monthly Events (cart + support)",
    dealValueLabel: "Avg. Order Value",
    closeRateLabel: "Recovery / Conversion Rate",
    upliftMechanism: "Abandoned cart recovery calls + COD verification",
    tagline: "High volume. Thin margins. Automation impact must scale.",
    isRevenueBased: true,
  },
  {
    id: "supply-chain",
    label: "Supply Chain",
    icon: "📦",
    leads: 150,
    dealValue: 120000,
    closeRate: 18,
    uplift: 0.3,
    leadsLabel: "Monthly Leads",
    dealValueLabel: "Avg. Annual Contract Value",
    closeRateLabel: "Lead → Close Rate",
    upliftMechanism: "ETA-sync + address conflict resolution",
    tagline: "Low lead volume. High deal value. Longer sales cycles.",
    isRevenueBased: true,
  },
  {
    id: "hospitality",
    label: "Hospitality",
    icon: "🏨",
    leads: 4000,
    dealValue: 800,
    closeRate: 40,
    uplift: 0.35,
    leadsLabel: "Monthly Inquiries (call + web)",
    dealValueLabel: "Avg. Booking Value",
    closeRateLabel: "Inquiry → Booking Rate",
    upliftMechanism: "24/7 AI concierge eliminates missed-call loss",
    tagline: "Missed-call loss is a real revenue leak.",
    isRevenueBased: true,
  },
  {
    id: "automotive",
    label: "Automotive",
    icon: "🚗",
    leads: 500,
    dealValue: 2500,
    closeRate: 10,
    uplift: 0.4,
    leadsLabel: "Monthly Leads",
    dealValueLabel: "Avg. Gross Profit / Vehicle",
    closeRateLabel: "Lead → Sale Rate",
    upliftMechanism: "Instant follow-up + DMS-synced service reminders",
    tagline: "Speed-to-lead directly correlates with close probability.",
    isRevenueBased: true,
  },
  {
    id: "pro-services",
    label: "Professional Services",
    icon: "⚖️",
    leads: 150,
    dealValue: 40000,
    closeRate: 20,
    uplift: 0.4,
    leadsLabel: "Monthly Leads",
    dealValueLabel: "Avg. Engagement Value",
    closeRateLabel: "Qualified → Close Rate",
    upliftMechanism: "Live lead-scoring + instant response API",
    tagline: "Qualification quality matters more than volume.",
    isRevenueBased: true,
  },
  {
    id: "government",
    label: "Government",
    icon: "🏛️",
    leads: 10000,
    dealValue: 45,
    closeRate: 0,
    uplift: 0.4,
    leadsLabel: "Monthly Cases / Applications",
    dealValueLabel: "Avg. Cost Per Case",
    closeRateLabel: "",
    upliftMechanism: "Automated intake + routing + multilingual AI desk",
    tagline: "Processing time, backlog reduction, cost per case.",
    isRevenueBased: false,
  },
];
