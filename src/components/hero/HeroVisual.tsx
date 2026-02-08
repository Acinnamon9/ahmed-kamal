import React from "react";
import { motion } from "framer-motion";
import { integrationLogos } from "../../constants/integrationData";

/**
 * HeroVisual Component
 *
 * A high-impact visual composition representing the AI ecosystem.
 * Features a central lady image, platform screenshots, and floating integration icons.
 * Uses complex spatial logic to ensure floating elements don't obscure primary content.
 */
const HeroVisual: React.FC = () => {
  /**
   * safePositions
   * Predefined "Safe Zones" that stay clear of the central focal points.
   * Calculated to wrap around the central lady/screenshot cluster [25-85% H, 20-85% V].
   */
  const safePositions = [
    { left: "-15%", top: "0%" }, // shopify
    { left: "-18%", top: "55%" }, // orange circle
    { left: "50%", top: "-14%" }, // Salesforce
    { left: "calc(105% - 20px)", top: "calc(5% + 30px)" }, // Top Right outer
    { left: "calc(100% - 20px)", top: "40%" }, // whatsapp
    { left: "calc(70% - 20px)", top: "85%" }, // 3 colours
    { left: "calc(100% - 20px)", top: "-5%" }, // Higher Right edge (Monkey/Mailchimp)
    { left: "-20%", top: "18%" }, // telegram
    { left: "10%", top: "-10%" }, // instagram position
    { left: "calc(95% - 20px)", top: "65%" }, // tiktok position
    { left: "calc(110% - 20px)", top: "20%" }, // linkedin position
  ];

  return (
    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center lg:justify-end pr-0 lg:pr-12 overflow-visible">
      {/* 
        Floating Ecosystem Layer:
        Renders various technology partners (Zendesk, Salesforce, etc.) 
        moving in independent, randomized paths for a "liquid" UI feel.
      */}
      <div className="absolute inset-0 z-30 pointer-events-none overflow-visible">
        {integrationLogos.map((logo, i) => {
          const pos = safePositions[i % safePositions.length];
          return (
            <motion.div
              key={`float-bg-${i}`}
              className="absolute drop-shadow-lg pointer-events-auto cursor-pointer group"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
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
              // Infinite orbital/floating paths
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
              {/* Subtle hover glow tied to the brand's primary color */}
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

      {/* Main Composite Image Cluster */}
      <div className="relative w-full max-w-[850px] z-10">
        {/* Layer 1: Chat Platform Screenshot - Grounded on the right */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: -120 }}
          viewport={{ once: false, margin: "-100px" }}
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
            {/* Glassmorphic card frame */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 glass-card">
              <img
                src="/chat_screenshot.png"
                alt="AI Conversation Platform"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Backlight glow to make the interface pop */}
            <div className="absolute -inset-4 bg-brand-primary/10 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </motion.div>

        {/* 
           Layer 2: User Persona (The Lady) 
           Fades in and slides up on scroll, overlaying the screenshot to add a 
           human dimension to the technology.
        */}
        <motion.div
          initial={{ opacity: 0, y: 40, x: -20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -left-[116px] -bottom-20 z-20 w-[56.5%] pointer-events-none"
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
              src="/pretty_woman.png"
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
