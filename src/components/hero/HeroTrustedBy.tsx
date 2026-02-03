import React from "react";
import { motion } from "framer-motion";
import { trustedLogos } from "../../constants/proofData";

/**
 * HeroTrustedBy Component
 *
 * An infinite horizontal scrolling marquee displaying brand partner logos.
 * This component provides immediate social proof and builds trust with new visitors.
 */
const HeroTrustedBy: React.FC = () => {
  /**
   * PERFORMANCE PATTERN: Seamless Marquee
   * We duplicate the array of logos so that as the first set finishes
   * scrolling off-screen, the second set enters, creating a never-ending loop
   * without a visible "reset" jump.
   */
  const scrollingLogos = [...trustedLogos, ...trustedLogos];

  return (
    <div className="w-full mt-24 py-10 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-center text-[10px] md:text-[16px] font-black uppercase tracking-[0.3em] text-(--muted-foreground)/40 mb-12">
          Empowering Market Leaders Globally
        </p>

        {/* mask-fade-edges: custom utility (usually defined in CSS) that creates soft 
            transparency gradients on the left/right sides of the scroll area. */}
        <div className="mask-fade-edges relative overflow-hidden">
          <motion.div
            className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"], // Scroll halfway (one full set of logos) then loop
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {scrollingLogos.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-4 group shrink-0">
                {/* Logo Image Container: handles grayscale filtering */}
                <div className="w-16 h-16 md:w-20 md:h-20 relative flex items-center justify-center">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-full max-w-full object-contain filter grayscale opacity-50 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                {/* Logo Brand Name Tag */}
                <span className="text-base md:text-xl font-black tracking-tighter text-(--muted-foreground)/60 group-hover:text-(--foreground) transition-all duration-300 font-heading uppercase italic">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroTrustedBy;
