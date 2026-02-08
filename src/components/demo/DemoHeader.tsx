import React from "react";
import { motion } from "framer-motion";
import Badge from "../ui/Badge";

/**
 * DemoHeader Component
 * Renders the introductory section of the interactive demo.
 */
const DemoHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <Badge
        className="mb-6 text-brand-orange bg-brand-orange/10 border-brand-orange/20"
        variant="outline"
        size="md"
      >
        Interactive Demo
      </Badge>
      <h2 className="text-4xl md:text-6xl font-black text-(--foreground) tracking-tighter mb-6">
        The Systems That Stop <br className="hidden md:block" />
        <span className="text-brand-orange">Leads From Dying</span>
      </h2>
      <p className="text-xl text-(--muted-foreground) max-w-3xl mx-auto font-medium leading-relaxed">
        Replace the chaos of missed calls and slow follow-ups with instant,
        always-on infrastructure.
      </p>
    </motion.div>
  );
};

export default DemoHeader;
