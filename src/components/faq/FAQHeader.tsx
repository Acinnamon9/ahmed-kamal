import React from "react";
import Badge from "../ui/Badge";

/**
 * FAQHeader Component
 * Title and subtitle for the FAQ section.
 */
const FAQHeader: React.FC = () => {
  return (
    <div className="text-center mb-0">
      <Badge
        variant="secondary"
        className="uppercase tracking-[0.3em] font-black text-[10px]"
      >
        Strategic Briefing
      </Badge>
      <h2 className="text-4xl sm:text-6xl font-black mt-6 tracking-tighter text-(--foreground) uppercase">
        FAQ
      </h2>
      <p className="text-lg text-(--muted-foreground) mt-4 max-w-2xl mx-auto font-medium opacity-80">
        Frequently Asked Questions
      </p>
    </div>
  );
};

export default FAQHeader;
