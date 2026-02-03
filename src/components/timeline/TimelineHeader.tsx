import React from "react";
import { motion } from "framer-motion";
import HeroVisual from "../hero/HeroVisual";

/**
 * TimelineHeader
 * Renders the intro section of the onboarding journey.
 */
const TimelineHeader: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-48">
      <div className="flex-1 text-center lg:text-left">
        {/* White-glove Onboarding Badge: Uses a multi-agent avatar stack metaphor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-(--foreground)/5 border border-(--foreground)/10 mb-6 backdrop-blur-md"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-full border-2 border-(--background) bg-(--foreground)/10 flex items-center justify-center text-[8px] font-bold text-(--foreground)`}
              >
                AI
              </div>
            ))}
          </div>
          <span className="text-sm font-medium text-(--foreground)/80">
            White-glove Onboarding
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-(--foreground) mb-6"
        >
          Up and running in <span className="text-brand-primary">48 hours</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-(--muted-foreground) max-w-2xl"
        >
          Our team handles the architecture, training, and deployment. Zero
          technical overhead for your team.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full"
      >
        {/* Visual representation of an AI bot head or terminal */}
        <HeroVisual />
      </motion.div>
    </div>
  );
};

export default TimelineHeader;
