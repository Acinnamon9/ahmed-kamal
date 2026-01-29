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
    sourceLogo:
      "https://yt3.googleusercontent.com/ytc/AIdro_n-x-MUm9n5dl840F716JA1WeMMDgRtqwCxj98hfxchN1I=s900-c-k-c0x00ffffff-no-rj",
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
    id: "emaar",
    logo: "EMAAR",
    sourceLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPRXmffFUFhstsSry7-v40QNQRZnct8SclA&s",
    title: "$12M Off-Plan Sales for Luxury Launch",
    metrics: [
      { value: "$12M+", label: "Revenue" },
      { value: "3.5x", label: "Conv. Lift" },
      { value: "24/7", label: "Uptime" },
    ],
    challenge:
      "Needed to filter 15,000+ global leads for a luxury launch without compromising the premium 'white-glove' experience.",
    solution:
      "Deployed a 'Luxury Concierge' AI persona to engage high-net-worth individuals instantly and schedule private viewings.",
    testimonial:
      "The precision of the agents is remarkable. Our sales team walked into meetings with prospects who were already educated.",
    author: "Ahmed Al Matrooshi",
    role: "Exec. Board, Emaar",
  },
  {
    id: "sobha",
    logo: "SOBHA",
    sourceLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWA2aqWWmrh8e9BG_NqwpKcggOY-EzpXbD1w&s",
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
    sourceLogo:
      "https://e7.pngegg.com/pngimages/338/272/png-clipart-damac-properties-real-estate-off-plan-property-property-developer-limited-offer-miscellaneous-angle-thumbnail.png",
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
    id: "nakheel",
    logo: "NAKHEEL",
    sourceLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Nakheel_Properties_logo.svg/960px-Nakheel_Properties_logo.svg.png",
    title: "Revitalizing Waterfront Sales",
    metrics: [
      { value: "$15M", label: "Unlocked" },
      { value: "300%", label: "ROI" },
      { value: "98%", label: "Compliance" },
    ],
    challenge:
      "Needed to reactivate a dormant database. Manual recall campaigns were too expensive and low-yield.",
    solution:
      "Executed a massive contextual reactivation campaign to re-engage old prospects and identify new interest.",
    testimonial:
      "We turned a 'dead' database into a multi-million dollar revenue stream using natural AI conversations.",
    author: "Naaman Atallah",
    role: "CEO, Nakheel",
  },
  {
    id: "versace",
    logo: "VERSACE",
    sourceLogo:
      "https://static.vecteezy.com/system/resources/previews/024/131/299/non_2x/versace-brand-symbol-with-name-brown-logo-clothes-design-icon-abstract-illustration-with-black-background-free-vector.jpg",
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
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_n-x-MUm9n5dl840F716JA1WeMMDgRtqwCxj98hfxchN1I=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "EMAAR",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPRXmffFUFhstsSry7-v40QNQRZnct8SclA&s",
  },
  {
    name: "DAMAC",
    image:
      "https://usuaebusiness.org/wp-content/uploads/2025/02/DAMAC-logo.png",
  },
  {
    name: "SOBHA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWA2aqWWmrh8e9BG_NqwpKcggOY-EzpXbD1w&s",
  },
  {
    name: "NAKHEEL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Nakheel_Properties_logo.svg/960px-Nakheel_Properties_logo.svg.png",
  },
  {
    name: "VERSACE",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/131/299/non_2x/versace-brand-symbol-with-name-brown-logo-clothes-design-icon-abstract-illustration-with-black-background-free-vector.jpg",
  },
];
