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
 * Centralized configuration to toggle specific features within the Hero section.
 */
const HERO_CONFIG = {
  showBadge: true,
  showBenefits: false, // Currently disabled as per user request
};

/**
 * Hero Component
 *
 * The main landing section of the website.
 * Features scroll-linked animations (parallax/fade) and a high-impact responsive layout.
 * Acts as the primary value proposition delivery vehicle.
 */
const Hero: React.FC = () => {
  // Reference to the main section element to track its scroll position relative to viewport
  const containerRef = useRef<HTMLElement>(null);

  /**
   * scrollYProgress: A normalized value (0 to 1) representing the section's scroll state.
   * "start start": top of section hits top of viewport.
   * "end start": bottom of section hits top of viewport.
   */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /**
   * Animation Transforms:
   * Dynamically adjusts opacity and vertical position as the user scrolls.
   * This creates a 'disappearing' effect as the user moves deeper into the page.
   */
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);

  return (
    <Section
      ref={containerRef}
      className="pt-40 pb-20 sm:pt-56 sm:pb-32 lg:pt-40 lg:pb-10 relative overflow-hidden"
    >
      {/* Layer 0: Animated background gradients and particles */}
      <HeroBackground />

      <Container className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1700px]">
        {/* Content Wrapper: handles entrance stagger animations */}
        <motion.div
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Optional Micro-copy badge for context */}
          {HERO_CONFIG.showBadge && <HeroBadge />}

          {/* Main Value Proposition Headline with scroll-linked transform */}
          <motion.h1
            variants={itemVariants}
            style={{ opacity: headlineOpacity, y: headlineY }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-body leading-[1.05] text-(--foreground) mb-8 tracking-tighter max-w-none"
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

      {/* Social Proof: Horizontal marquee of trusted brand logos */}
      <HeroTrustedBy />

      {/* Trust & Safety: Security certifications display */}
      <HeroCompliance />
    </Section>
  );
};

export default Hero;
