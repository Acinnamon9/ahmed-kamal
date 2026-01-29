import React from "react";
import { motion } from "framer-motion";
import { trustedLogos } from "../../constants/proofData";

const HeroTrustedBy: React.FC = () => {
  // Duplicate the logos to create a seamless infinite scroll effect
  const scrollingLogos = [...trustedLogos, ...trustedLogos];

  return (
    <div className="w-full mt-24 py-10 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-center text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-(--muted-foreground)/40 mb-12">
          Empowering Market Leaders Globally
        </p>

        <div className="mask-fade-edges relative overflow-hidden">
          <motion.div
            className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {scrollingLogos.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-4 group shrink-0">
                <div className="w-8 h-8 md:w-10 md:h-10 relative flex items-center justify-center">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-full max-w-full object-contain filter grayscale opacity-50 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
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
