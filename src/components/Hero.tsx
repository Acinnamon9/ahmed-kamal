import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { containerVariants, itemVariants } from "../animations";
import HeroBackground from "./hero/HeroBackground";
import HeroBadge from "./hero/HeroBadge";
import HeroCTA from "./hero/HeroCTA";
import HeroRobotHead from "./hero/HeroRobotHead";

/**
 * FEATURE TOGGLES
 */
const HERO_CONFIG = {
  showBadge: true,
  showBenefits: false, // Currently disabled as per user request
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);

  return (
    <Section
      ref={containerRef}
      id="hero"
      className="bg-linear-to-t from-(--muted) to-(--background) min-h-screen pt-32 sm:pt-48 lg:pt-64 flex items-center relative overflow-hidden"
    >
      <HeroBackground />

      <Container className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroRobotHead />

          {HERO_CONFIG.showBadge && <HeroBadge />}

          <motion.h1
            variants={itemVariants}
            style={{ opacity: headlineOpacity, y: headlineY }}
            className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] text-(--foreground) mb-8 tracking-tighter max-w-5xl"
          >
            AI Agents That Call, Qualify, and Book Leads{" "}
            <span className="bg-linear-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
              Automatically
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-(--muted-foreground) leading-relaxed mb-12 max-w-3xl font-medium tracking-tight"
          >
            Launch in 72 hours. Works with any CRM. No missed leads.
          </motion.p>

          <HeroCTA />

          {/* Benefits List - Hidden if HERO_CONFIG.showBenefits is false */}
          {/* (Logic moved out but could be added as HeroBenefits if needed) */}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;
