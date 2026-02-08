import React from "react";
import { motion } from "framer-motion";

/**
 * BackgroundDecor: Atmospheric visual layer for the LeadProblem section.
 * Includes Technical Mesh, Atmospheric Glows, Scanner Beam, and Data Ribbons.
 */
/**
 * BackgroundDecor: Atmospheric visual layer for the LeadProblem section.
 * It uses a combination of CSS patterns and Framer Motion animations to create a
 * "high-tech" laboratory or audit environment feel.
 */
const BackgroundDecor: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* 
        2. Deep Atmospheric Glows:
        - Large, blurred radial gradients that slowly move and pulse.
        - Adds depth and color (brand-primary and brand-success) to the background.
      */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.08, 0.03],
          x: [0, 40, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] bg-brand-primary rounded-full blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.02, 0.06, 0.02],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-brand-success rounded-full blur-[120px]"
      />

      {/* 
        3. The "Efficiency Audit" Scanner Beam:
        - A large, blurred gradient that "sweeps" across the section vertically.
        - Symbolizes a radar or diagnostic scan happening on the page.
      */}
      <motion.div
        initial={{ top: "-100%" }}
        animate={{ top: "250%" }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[400px] bg-linear-to-b from-transparent via-brand-primary/5 to-transparent skew-y-12 blur-3xl opacity-50"
      />

      {/* 
        4. Data ribbons:
        - Multiple thin vertical lines that appear and disappear at different intervals.
        - Mimics "data packets" or signal strength indicators.
      */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + i * 14}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            className="absolute w-px h-64 bg-linear-to-b from-transparent via-brand-primary/40 to-transparent blur-[2px]"
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundDecor;
