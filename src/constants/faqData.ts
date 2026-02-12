export interface FAQData {
  id: string;
  category: string;
  items: {
    q: string;
    a: string;
  }[];
}

export const faqCategories: FAQData[] = [
  {
    id: "core",
    category: "01 / CORE",
    items: [
      {
        q: "What is AtomicX?",
        a: "AtomicX is a brand-first AI implementation partner that builds, customizes, and deeply integrates conversational and automation solutions (powered by platforms like Ravan.ai) so the tech fits your business — not the other way around.",
      },
      {
        q: "What services do you provide?",
        a: "We deliver end-to-end services: strategy, persona & voice design, custom conversational flows, deep CRM & calendar integrations, paid-ads management automation, deployment, analytics, training and ongoing optimisation.",
      },
      {
        q: "How is AtomicX different from buying Ravan.ai directly?",
        a: "We’re a managed implementation layer: we do the heavy lifting (branding, custom flows, integrations, testing, change management). You get the robust AI engine underneath plus a tailored, brand-safe implementation and hands-on support.",
      },
      {
        q: "Who is AtomicX for?",
        a: "Brands that want enterprise-grade automation and a distinct voice — marketing teams, agencies, e-commerce, clinics, fintech, education and any business that needs branded conversational experiences and reliable lead operations.",
      },
      {
        q: "Can I see the product before we commit?",
        a: "Yes — you can schedule a demo of both the app/dashboard and the live conversational agent. Demos show the admin console, reporting, and a live agent interacting with visitors.",
      },
      {
        q: "Do you provide case studies or references?",
        a: "Yes. We can share anonymised case studies and customer references relevant to your vertical during the sales process.",
      },
    ],
  },
  {
    id: "execution",
    category: "02 / EXECUTION",
    items: [
      {
        q: "How long does onboarding take?",
        a: "Onboarding is completed within 48 hours from kickoff for standard packages. Complex, enterprise implementations may need a little longer — but the typical brand-to-live flow is 48 hours.",
      },
      {
        q: "What exactly is included in the 48-hour onboarding?",
        a: "A standard 48-hour onboarding includes: discovery + ICP mapping, initial persona & conversation design, CRM & calendar connection, demo agent deployment, basic training for your team, one live test run, and go-live for the agreed scope.",
      },
      {
        q: "How do you ensure the agent matches our brand voice?",
        a: "We create tailored language sets and persona profiles during discovery and iterate with your team. Final voice is approved by you before go-live.",
      },
      {
        q: "Is there human escalation?",
        a: "Yes — any conversation can be configured to escalate to a human agent (live-transfer, notification, or ticket creation) based on triggers you define.",
      },
      {
        q: "How do you train my team?",
        a: "We provide admin training, playbooks, and onboarding sessions. For managed plans, we also run weekly reviews and optimisation workshops.",
      },
      {
        q: "What happens if something breaks?",
        a: "We monitor health and errors; critical incidents are triaged according to the agreed SLA. We provide incident reporting and root cause analysis for enterprise customers.",
      },
      {
        q: "What technical prerequisites do we need?",
        a: "A website where the agent can be embedded (script access), API/CRM credentials for integration, calendar access for scheduling, and one or two product/ICP owners to sign off on copy and flows.",
      },
    ],
  },
  {
    id: "connectivity",
    category: "03 / CONNECTIVITY",
    items: [
      {
        q: "Which CRMs do you support?",
        a: "We support all CRMs. We provide out-of-the-box connectors for major CRMs (Salesforce, HubSpot, Zoho, Pipedrive, Microsoft Dynamics, etc.) and custom integration via API/webhooks for anything else.",
      },
      {
        q: "Do you handle calendar and scheduling integrations?",
        a: "Yes — we connect to Google Calendar, Outlook/Exchange and other calendaring systems to book and manage appointments automatically.",
      },
      {
        q: "Can you integrate with our internal systems (ERP, billing, ticketing)?",
        a: "Yes — we integrate with internal systems via APIs, webhooks or middlewares. Deep integrations are part of our bespoke service.",
      },
      {
        q: "What languages and channels do you support?",
        a: "Multi-language support is available. Channels include website chat/voice widget, SMS, email routing, and phone calls (for follow-up and booking). Channel selection is part of onboarding.",
      },
    ],
  },
  {
    id: "trust",
    category: "04 / TRUST",
    items: [
      {
        q: "Who owns the data and conversations?",
        a: "You do. We store and forward data according to the integration you choose. We can configure data retention and export rules to meet your policies.",
      },
      {
        q: "What about security and compliance?",
        a: "We follow industry best practices for secure integrations (encrypted in transit and at rest, role-based access). For enterprise customers we’ll provide compliance details and can discuss additional controls (SSO, audit logs, contracts, and required certifications).",
      },
      {
        q: "How do you handle privacy (GDPR/CCPA)?",
        a: "We can configure consent flows, data retention rules, and export/delete processes to meet GDPR/CCPA needs. We’ll include privacy handling in the implementation plan.",
      },
    ],
  },
  {
    id: "impact",
    category: "05 / IMPACT",
    items: [
      {
        q: "What performance metrics and reporting do you provide?",
        a: "We provide dashboards with leads captured, conversion rates, appointment booking rates, response time, channel performance, and conversation transcripts. Custom KPIs can be added.",
      },
      {
        q: "Do you offer A/B testing and optimization?",
        a: "Yes — we run experiments on copy, flows and triggers, then act on results to increase conversion and decrease friction.",
      },
      {
        q: "How do you measure ROI?",
        a: "We measure inbound lead volume, qualified leads, appointments booked, conversion improvements and time saved versus manual handling. We help define target metrics during onboarding.",
      },
      {
        q: "Can you run paid ad campaigns and tie them to the agent?",
        a: "Yes — we can manage paid ad campaigns and route high-intent inbound traffic directly to the conversational flows and tracking for closed-loop attribution.",
      },
      {
        q: "Do you offer a trial or pilot?",
        a: "Yes — we run short pilots focused on a single use case (lead capture, booking, or support) to prove value before wider rollout.",
      },
      {
        q: "What level of ongoing support do you offer?",
        a: "We provide support tiers: standard monitoring + periodic optimisation, or fully managed 24/7 operations and campaign management. SLA options are available for enterprise plans.",
      },
      {
        q: "What is the pricing model?",
        a: "Pricing is scope-based: setup fee + monthly subscription and optional managed services. Custom quotes available after discovery. (We’ll provide a clear proposal during the demo.)",
      },
    ],
  },
];
