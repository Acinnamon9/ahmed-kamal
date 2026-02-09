import React from "react";
import { motion } from "framer-motion";
import { integrationLogos } from "../../constants/integrationData";

const HeroVisual: React.FC = () => {
  // Predefined safe zones that don't overlap with the central lady/screenshot cluster
  // These positions are calculated to stay clear of the center region [25% to 85% horizontally, 20% to 85% vertically]
  const safePositions = [
    { left: "-15%", top: "15%" }, // Top Left edge
    { left: "-12%", top: "45%" }, // Left Mid edge
    { left: "-18%", top: "75%" }, // Bottom Left edge
    { left: "5%", top: "-10%" }, // Higher and to the Left (Salesforce)
    { left: "105%", top: "5%" }, // Top Right outer
    { left: "110%", top: "40%" }, // Right Mid outer
    { left: "102%", top: "85%" }, // Bottom Right outer
    { left: "95%", top: "-5%" }, // Higher Right edge (Monkey/Mailchimp)
    { left: "-20%", top: "30%" }, // Far Left Mid
  ];

  return (
    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center lg:justify-end pr-0 lg:pr-12 overflow-visible">
      {/* Floating Ecosystem - Integration Icons (Now staying clear of the main content) */}
      <div className="absolute inset-0 z-30 pointer-events-none overflow-visible">
        {integrationLogos.map((logo, i) => {
          const pos = safePositions[i % safePositions.length];
          return (
            <motion.div
              key={`float-bg-${i}`}
              className="absolute drop-shadow-lg pointer-events-auto cursor-pointer group"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.15,
                rotate: 0,
                transition: { duration: 0.2 },
              }}
              style={{
                left: pos.left,
                top: pos.top,
                width: "48px",
                height: "48px",
              }}
              animate={{
                y: [0, i % 2 === 0 ? -25 : 25, i % 3 === 0 ? 10 : -10, 0],
                x: [0, i % 3 === 0 ? -20 : 20, i % 2 === 0 ? 15 : -15, 0],
                rotate: [0, i % 2 === 0 ? 12 : -12, i % 3 === 0 ? -8 : 8, 0],
              }}
              transition={{
                duration: 10 + (i % 6) * 3,
                repeat: Infinity,
                ease: "easeInOut",
                opacity: { duration: 0.8, delay: i * 0.1, repeat: 0 },
                scale: { duration: 0.8, delay: i * 0.1, repeat: 0 },
              }}
            >
              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"
                style={{ backgroundColor: logo.color }}
              />

              <img
                src={logo.image}
                alt={logo.name}
                className={`w-full h-full object-contain relative z-10 transition-transform duration-300 ${logo.name === "Mailchimp" ? "dark:invert" : ""}`}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Container for the overlapping main images */}
      <div className="relative w-full max-w-[850px] z-10">
        {/* Chat Screenshot - Grounded on the right */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: -120 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-[95%] ml-auto"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 glass-card">
              <img
                src={`${import.meta.env.BASE_URL}chat_screenshot.png`}
                alt="AI Conversation Platform"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Subtle glow behind screenshot */}
            <div className="absolute -inset-4 bg-brand-primary/10 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Pretty Woman - Fading in with scroll, moved further down and out */}
        <motion.div
          initial={{ opacity: 0, y: 40, x: -20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -left-24 -bottom-20 z-20 w-[65%] pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}pretty_woman.png`}
              alt="AI Interaction"
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroVisual;
