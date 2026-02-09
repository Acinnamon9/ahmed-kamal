import React from "react";

/**
 * FooterBrand Component
 * Renders the logo and company mission statement.
 */
const FooterBrand: React.FC = () => {
  return (
    <div className="space-y-6">
      <a
        href="/"
        className="text-(--foreground) text-3xl font-black no-underline tracking-tighter transition-colors"
      >
        AtomicX
      </a>
      <p className="leading-relaxed text-base font-medium max-w-xs transition-colors">
        Building the world's first truly autonomous AI sales workforce. Scale
        your business without scaling your headcount.
      </p>
    </div>
  );
};

export default FooterBrand;
