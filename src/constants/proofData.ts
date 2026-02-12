export interface ProofMetric {
  value: string;
  label: string;
}

export interface ProofCaseStudy {
  id: string;
  logo: string;
  sourceLogo?: string;
  title: string;
  metrics: ProofMetric[];
  challenge: string;
  solution: string;
  testimonial: string;
  author: string;
  role: string;
}

export const caseStudies: ProofCaseStudy[] = [
  {
    id: "danube",
    logo: "DANUBE",
    sourceLogo: "/Danube.png",
    title: "Accelerating Sales by $5.2M in 30 Days",
    metrics: [
      { value: "$5.2M", label: "Revenue Lift" },
      { value: "1,240", label: "Prospects" },
      { value: "480", label: "Meetings" },
    ],
    challenge:
      "Thousands of raw leads were cooling off due to slow manual response times, causing massive budget leakage.",
    solution:
      "Integrated Ravan.ai Unified Workforce to handle 100% of lead qualification, cutting response time to under 2 minutes.",
    testimonial:
      "Ravan.ai transformed our sales efficiency. Our senior closers can now focus exclusively on high-value interactions.",
    author: "Adel Sajan",
    role: "MD, Danube Properties",
  },

  {
    id: "sobha",
    logo: "SOBHA",
    sourceLogo: "/Sobha.png",
    title: "Automating Quality Control at Scale",
    metrics: [
      { value: "85%", label: "Junk Reduced" },
      { value: "$8.4M", label: "Pipeline" },
      { value: "< 2min", label: "Speed" },
    ],
    challenge:
      "Lead volume was overwhelming SDRs, resulting in missed opportunities and inconsistent follow-ups.",
    solution:
      "Implemented a rigorous qualification AI that verified intent and budget, ensuring the team only spoke to serious investors.",
    testimonial:
      "Quality is our obsession. Ravan.ai filtered out the noise and delivered us pure gold.",
    author: "PNC Menon",
    role: "Chairman, Sobha Realty",
  },
  {
    id: "damac",
    logo: "DAMAC",
    sourceLogo: "/DAMAC.png",
    title: "High-Volume Velocity Sales",
    metrics: [
      { value: "10k+", label: "Leads/Wk" },
      { value: "40%", label: "Lower CPAL" },
      { value: "650", label: "Visits" },
    ],
    challenge:
      "Aggressive marketing generated massive lead flow that went cold before humans could dial them.",
    solution:
      "Spun up 50+ autonomous voice agents to dial leads the second they hit the CRM, ensuring maximum contact rates.",
    testimonial:
      "In this market, speed is money. Ravan.ai gives us the first-mover advantage with every single lead.",
    author: "Hussain Sajwani",
    role: "Founder, DAMAC",
  },

  {
    id: "versace",
    logo: "VERSACE",
    sourceLogo: "/Versace.png",
    title: "The Ultimate Luxury Experience",
    metrics: [
      { value: "$20M+", label: "Sales" },
      { value: "100%", label: "Alignment" },
      { value: "VIP", label: "Service" },
    ],
    challenge:
      "Standard sales scripts felt insufficient for the brand. They needed an experience that screamed exclusivity.",
    solution:
      "Engineered a 'Brand Ambassador' AI with a refined tone and specialized vocabulary to engage UHNW buyers.",
    testimonial:
      "Ravan.ai delivered an experience that felt personal, exclusive, and perfectly on-brand.",
    author: "Donatella Versace",
    role: "CCO, Versace",
  },
];

export const trustedLogos = [
  {
    name: "DANUBE",
    image: "/Danube.png",
  },

  {
    name: "DAMAC",
    image: "/DAMAC.png",
  },
  {
    name: "SOBHA",
    image: "/Sobha.png",
  },

  {
    name: "VERSACE",
    image: "/Versace.png",
  },
];
