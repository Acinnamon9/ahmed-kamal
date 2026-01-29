import React from "react";
import { motion } from "framer-motion";

const complianceLogos = [
  { name: "PCI DSS", image: "https://www.callers.ai/images/dss-logo.svg" },
  { name: "GDPR", image: "https://www.callers.ai/images/gdpr-logo.svg" },
  { name: "HIPAA", image: "https://www.callers.ai/images/hipaa-logo.svg" },
  { name: "SOC2", image: "https://www.callers.ai/images/soc2-logo.svg" },
  { name: "CCPA", image: "https://www.callers.ai/images/ccpa-logo.svg" },
];

const HeroCompliance: React.FC = () => {
  return (
    <div className="w-full py-8 mt-4">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 transition-opacity duration-500">
          {complianceLogos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="h-8 md:h-10 w-auto flex items-center justify-center">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-full w-auto object-contain transition-all duration-300"
                />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-(--muted-foreground) uppercase">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCompliance;
