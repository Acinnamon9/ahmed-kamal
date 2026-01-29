import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { containerVariants, itemVariants } from "../animations";
import HeroBackground from "./hero/HeroBackground";
import HeroBadge from "./hero/HeroBadge";
import HeroCTA from "./hero/HeroCTA";
import HeroTrustedBy from "./hero/HeroTrustedBy";
import HeroCompliance from "./hero/HeroCompliance";

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
      className="pt-40 pb-20 sm:pt-56 sm:pb-32 lg:pt-64 lg:pb-40 relative overflow-hidden"
    >
      <HeroBackground />

      <Container className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1700px]">
        <motion.div
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <HeroRobotHead /> */}

          {HERO_CONFIG.showBadge && <HeroBadge />}

          <motion.h1
            variants={itemVariants}
            style={{ opacity: headlineOpacity, y: headlineY }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-(--foreground) mb-8 tracking-tighter max-w-none"
          >
            AI Agents That Call, Qualify, and Book Appointments{" "}
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
        </motion.div>
      </Container>
      <HeroTrustedBy />
      <HeroCompliance />
    </Section>
  );
};

export default Hero;
