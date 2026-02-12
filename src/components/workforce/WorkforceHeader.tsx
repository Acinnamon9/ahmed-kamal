import React from "react";
import { motion } from "framer-motion";

const WorkforceHeader: React.FC = () => {
  return (
    <div className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="flex items-center justify-start gap-4 mb-6"
      >
        <div className="h-px w-10 bg-linear-to-r from-transparent to-brand-orange/40"></div>
        <span className="text-[10px] font-black tracking-[0.5em] text-brand-orange uppercase">
          Operational Fleet
        </span>
        <div className="flex items-center gap-1.5 ml-2 bg-brand-success/10 dark:bg-brand-success/10 px-3 py-1 rounded-full border border-brand-success/30 dark:border-brand-success/20">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
          <span className="text-[9px] font-black text-green-700 dark:text-brand-success uppercase tracking-widest">
            48h Setup
          </span>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div className="flex-1 text-left">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-(--foreground) tracking-tighter uppercase leading-[0.9]">
            The New <br />
            <span className="text-brand-orange italic">Digital Workforce</span>
          </h2>
        </div>

        <div className="flex-1 md:max-w-lg text-left md:text-right">
          <p className="text-lg md:text-xl text-(--muted-foreground) leading-relaxed font-medium">
            Translate manual overhead into definitive outcomes. Deploy
            specialized{" "}
            <span className="text-(--foreground) brightness-125">
              AI agents engineered to replace bottlenecked roles
            </span>{" "}
            with 100% availability, 48-hour launch speed, and massive volume.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkforceHeader;
