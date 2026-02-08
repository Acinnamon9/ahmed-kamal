import React from "react";
import Badge from "../ui/Badge";
import { motion } from "framer-motion";

/**
 * ProofHeader Component
 * Displays the section title and case study badge.
 */
const ProofHeader: React.FC = () => {
  return (
    <div className="text-center mb-0">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <Badge
          variant="secondary"
          className="uppercase tracking-[0.3em] font-black text-[10px] mb-6 border-brand-link text-brand-link bg-brand-link/5"
        >
          Evidence Archive
        </Badge>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.1 }}
        className="text-4xl sm:text-6xl font-black text-(--foreground) tracking-tighter mb-4 uppercase"
      >
        Verified Impact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2 }}
        className="text-(--muted-foreground) max-w-2xl mx-auto text-lg font-medium opacity-80"
      >
        Operational deployments documented and verified for high-scale revenue
        performance.
      </motion.p>
    </div>
  );
};

export default ProofHeader;
