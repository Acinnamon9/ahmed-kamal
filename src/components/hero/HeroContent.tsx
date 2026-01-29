import React from "react";
import { motion } from "framer-motion";
import Typewriter from "../ui/Typewriter";
import { itemVariants } from "../../animations";
import { useIsMobile } from "../../hooks/useIsMobile";

const HeroContent: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      className="p-6 sm:p-8 md:p-9 lg:p-10 rounded-[32px] sm:rounded-[36px] md:rounded-[40px] bg-white/5 dark:bg-black/10 backdrop-blur-md border border-white/10 shadow-2xl relative z-10 overflow-hidden w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl lg:max-w-3xl"
      initial={{ opacity: 1, x: isMobile ? 0 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none"></div>

      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] text-(--foreground) mb-6 sm:mb-7 md:mb-8 tracking-tighter"
      >
        <Typewriter
          delay={0.6}
          segments={[
            { text: "Full AI " },
            {
              text: "Sales & Marketing",
              className: "text-(--foreground)",
            },
            { text: " Team" },
          ]}
          cursorColor="#0f172a"
        />
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-(--muted-foreground) leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-lg font-medium tracking-tight"
      >
        Hundreds of qualified appointments every month —{" "}
        <span className="text-(--foreground) font-semibold italic">
          while you sleep.
        </span>
      </motion.p>
    </motion.div>
  );
};

export default HeroContent;
