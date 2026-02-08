import React from "react";
import { motion } from "framer-motion";
import Badge from "../ui/Badge";

const IndustryHeader: React.FC = () => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="flex items-center justify-center gap-4 mb-8"
      >
        <div className="h-px w-10 bg-linear-to-r from-transparent to-brand-link/40"></div>
        <Badge
          variant="outline"
          className="text-brand-link border-brand-link/20 bg-brand-link/5 tracking-[0.4em]"
        >
          Impact In Scale
        </Badge>
        <div className="h-px w-10 bg-linear-to-l from-transparent to-brand-link/40"></div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-black text-(--foreground) tracking-tighter uppercase leading-[0.9] mb-8"
      >
        Universal Core <br />
        <span className="text-brand-link italic">Sector Power</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-(--muted-foreground) leading-relaxed font-medium max-w-2xl mx-auto"
      >
        Our universal core provides the{" "}
        <span className="text-(--foreground) brightness-125">baseline ROI</span>
        . Our sector-specific logic provides the{" "}
        <span className="text-brand-link">exponential power</span>.
      </motion.p>
    </div>
  );
};

export default IndustryHeader;
