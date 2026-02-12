import React from "react";
import { motion } from "framer-motion";

const complianceLogos = [
  // { name: "PCI DSS", image: "https://www.callers.ai/images/dss-logo.svg" },
  // { name: "GDPR", image: "https://www.callers.ai/images/gdpr-logo.svg" },
  { name: "HIPAA", image: "https://www.callers.ai/images/hipaa-logo.svg" },
  { name: "SOC2", image: "https://www.callers.ai/images/soc2-logo.svg" },
  { name: "CCPA", image: "https://www.callers.ai/images/ccpa-logo.svg" },
];

/**
 * HeroCompliance Component
 *
 * Displays security and regulatory certifications (HIPAA, SOC2, etc.)
 * as high-fidelity badges. This component communicates enterprise-readiness
 * and data safety to technical decision-makers.
 */
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
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-2 group cursor-pointer relative"
            >
              {/* Badge Image with Dynamic Hover Glow */}
              <div className="h-12 md:h-16 w-auto flex items-center justify-center relative z-10">
                {/* 
                  Hover Detail: Creates a subtle cyan aura behind the badge 
                  to highlight the certification's importance.
                */}
                <div className="absolute inset-0 bg-brand-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-full w-auto object-contain transition-all duration-300 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>

              {/* Certification Name Label */}
              <span className="text-[10px] font-bold tracking-widest text-(--muted-foreground) uppercase transition-colors duration-300 group-hover:text-brand-primary">
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
